const lazyBackgrounds = document.querySelectorAll('.lazy-bg[data-bg]');
const revealTargets = document.querySelectorAll('.reveal-on-scroll');

function loadBackground(element) {
	const source = element.getAttribute('data-bg');

	if (!source) {
		return;
	}

	const resolvedSource = new URL(source, document.baseURI).href;
	element.style.setProperty('--lazy-bg-image', `url('${resolvedSource}')`);
	element.classList.add('is-loaded');
	element.removeAttribute('data-bg');
}

if ('IntersectionObserver' in window) {
	const backgroundObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			}

			loadBackground(entry.target);
			observer.unobserve(entry.target);
		});
	}, {
		rootMargin: '200px 0px'
	});

	lazyBackgrounds.forEach((element) => {
		const rect = element.getBoundingClientRect();
		const shouldLoadNow = rect.top < (window.innerHeight + 200);

		if (shouldLoadNow) {
			loadBackground(element);
			return;
		}

		backgroundObserver.observe(element);
	});

	const revealObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			}

			entry.target.classList.add('in-view');
			observer.unobserve(entry.target);
		});
	}, {
		threshold: 0,
		rootMargin: '0px 0px -5% 0px',
	});

	revealTargets.forEach((element) => {
		revealObserver.observe(element);
	});
} else {
	// Fallback for older browsers: show content and load backgrounds immediately.
	lazyBackgrounds.forEach(loadBackground);
	revealTargets.forEach((element) => {
		element.classList.add('in-view');
	});
}
