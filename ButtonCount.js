class ButtonCount extends HTMLElement {
    constructor() {
      super();
      this.count = 0;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
            button {
                color: #FFFFFF;
                background-image: linear-gradient(90deg, #455EB5 9%, #5643CC 40%, #673FD7 65%);
                border-radius: 8px;
                border-style: none;
                box-sizing: border-box;
                flex-shrink: 0;
                font-size: 16px;
                font-weight: 500;
                height: 3rem;
                padding: 0 2rem;
                text-align: center;
                text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
            }
        </style>
        <button>Times Clicked: ${this.count}</button>
      `;
      this.button = this.shadowRoot.querySelector('button');
      this.button.addEventListener('click', this.handleClick.bind(this));
    }
  
    handleClick() {
      this.count++;
      this.button.innerHTML = `Times Clicked: ${this.count}`;
    }
  }
  
  customElements.define('button-count', ButtonCount);