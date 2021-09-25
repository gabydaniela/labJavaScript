/* Código desarrollado por Daniela Quesada Aguilar carnet: B25247 
   CI 0137 Desarrollo de Aplicaciones Web   II2021
   Universidad de Costa Rica 
   
   Basado en el estudio y analisis de los ejemplos del repositorio https://github.com/mdn/web-components-examples facilitado por el profesor*/

customElements.define('hola-mundo',
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({mode: 'open'});
      const span = document.createElement('span');

      const style = document.createElement('style');
      style.textContent = 'span { background-color: lightblue; padding: 0 2px; color: blue}';

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(span);

      span.textContent = "¡Hola mundo!";
      span.style.display = 'inline-block';

      this.setAttribute('tabindex', '0');
      this.style.display = 'inline-block';
    }
  }
);