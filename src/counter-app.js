import { LitElement, html, css } from 'lit';

/**
 * Counter component with min/max limits and color changes
 */
export class CounterApp extends LitElement {
  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.counter = 0;
    this.min = 0;
    this.max = 10;
  }

  static get properties() {
    return {
      counter: { type: Number },
      min: { type: Number },
      max: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
        font-family: Arial, sans-serif;
        margin: 16px auto;
      }

      .counter-value {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 16px;
        transition: color 0.3s ease;
      }

      .counter-value.min {
        color: red;
      }

      .counter-value.mid {
        color: green;
      }

      .counter-value.high {
        color: orange;
      }

      .counter-value.max {
        color: blue;
      }

      .buttons {
        display: flex;
        justify-content: center;
        gap: 16px;
      }

      button {
        padding: 8px 16px;
        font-size: 1.2rem;
        border: 2px solid #ccc;
        border-radius: 8px;
        background-color: white;
        cursor: pointer;
        transition: background-color 0.3s ease, border-color 0.3s ease;
      }

      button:hover {
        background-color: #f4f4f4;
        border-color: #aaa;
      }

      button:focus {
        outline: none;
        border-color: #007bff;
      }

      button[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
      }
    `;
  }

  render() {
    const valueClass =
      this.counter === this.min
        ? 'min'
        : this.counter === this.max
        ? 'max'
        : this.counter >= 21
        ? 'high'
        : this.counter >= 18
        ? 'mid'
        : '';

    return html`
      <div>
        <div class="counter-value ${valueClass}">${this.counter}</div>
        <div class="buttons">
          <button
            @click="${this._decrement}"
            ?disabled="${this.counter <= this.min}"
          >
            -
          </button>
          <button
            @click="${this._increment}"
            ?disabled="${this.counter >= this.max}"
          >
            +
          </button>
        </div>
      </div>
    `;
  }

  _increment() {
    if (this.counter < this.max) {
      this.counter++;
    }
  }

  _decrement() {
    if (this.counter > this.min) {
      this.counter--;
    }
  }
}

customElements.define(CounterApp.tag, CounterApp);