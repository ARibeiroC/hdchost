# HDCHost 🌐

> Site de hospedagem web responsivo, desenvolvido como um projeto prático para consolidação de habilidades essenciais e aplicação de recursos modernos no desenvolvimento Front-End.

O **HDCHost** é uma aplicação web focada no segmento de hospedagem de sites, criada com o objetivo de aplicar e dominar os pilares fundamentais do desenvolvimento web. O projeto prioriza a escrita de um código limpo, tipado, semântico e com recursos nativos atualizados, servindo como uma excelente base de portfólio para a carreira profissional.

🌍 **Acesse o projeto rodando ao vivo:** [HDCHost na Netlify](https://hdchosti.netlify.app/)

---

## 🎯 Objetivos de Aprendizado & Funcionalidades

* **HTML5 Semântico:** Estruturação robusta focada em SEO e leitura limpa por motores de busca.
* **Acessibilidade Nativa:** Implementação de tags semânticas corretas para garantir que leitores de tela e ferramentas de acessibilidade funcionem perfeitamente por padrão, reduzindo a necessidade de atributos ARIA complexos.
* **Tipagem Estática e Segurança:** Uso de TypeScript para garantir um código mais seguro, auto-documentado e livre de erros comuns de runtime.
* **Animações na Viewport:** Sistema dinâmico que ativa animações de entrada nos elementos à medida que o usuário faz o scroll e eles aparecem na tela, tornando a experiência de navegação muito mais fluida e atraente.
* **Performance com Lazy Loading:** Otimização no carregamento de recursos pesados (como imagens), que só são carregados quando estão próximos de entrar na área visível da tela, poupando dados e acelerando o carregamento inicial do site.

---

## 🛠️ Tecnologias Utilizadas (Stack)

O projeto explora o máximo do potencial nativo dos navegadores combinado com a robustez da tipagem moderna:

* **HTML5 (Semântico):** Uso estratégico de tags como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>` para uma arquitetura de informação acessível.
* **CSS3 Moderno (com Nesting Nativo):** Estilização utilizando a nova especificação de **Nesting (Encadeamento) nativo do CSS**. Isso elimina a necessidade de pré-processadores (como Sass/Less) para criar estruturas aninhadas, trazendo muito mais clareza visual, organização e facilidade na leitura dos estilos.
* **TypeScript (Vanilla):** Lógica robusta com definição de tipos e interfaces, compilada diretamente para JavaScript puro para manter a aplicação leve e performática.
* **Intersection Observer API:** API nativa do navegador utilizada para monitorar a viewport e gerenciar de forma eficiente tanto o disparo das animações quanto o comportamento de *Lazy Loading*.

---

## 📐 Destaques de Código: CSS Nesting Nativo

Uma das principais características de estilo deste projeto é o uso do encadeamento nativo no CSS, permitindo organizar seletores de forma hierárquica diretamente no navegador:

```css
/* Exemplo da abordagem utilizada no projeto */
.hero-section {
  background-color: #f5f5f5;
  padding: 40px;

  & .hero-title {
    font-size: 2rem;
    color: #333;
  }

  & .hero-button {
    background-color: #0070f3;
    
    &:hover {
      background-color: #0051a8;
    }
  }
}
```

💻 Como Executar o Projeto Localmente
Por ser um projeto com TypeScript, você precisará apenas compilar os arquivos de script (ou rodar em modo watch) se decidir fazer alterações no código fonte.

Pré-requisitos
Antes de começar, certifique-se de ter o Node.js e o TypeScript instalados globalmente ou as dependências do projeto inicializadas.

1. Clone o repositório:
```
git clone [https://github.com/seu-usuario/hdchost.git](https://github.com/seu-usuario/hdchost.git)
```

2. Acesse a pasta do projeto:
```
cd hdchost
```

3. Compilar o TypeScript:
Se houver um script de build configurado:
```
npm run build
# ou para monitorar alterações em tempo real
tsc -w
```

4. Abrir a aplicação:
Basta utilizar a extensão Live Server no seu VS Code para abrir o arquivo index.html em seu navegador local (http://127.0.0.1:5500).

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Desenvolvido por Anderson Ferreira RIbeiro Campos
