import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Контакты");
  }

  async getHtml() {
    return `
      <h1>Контакты</h1>

      <p>Здесь вы найдете мои контактные данные!</p>
      <p>
        <a href="/" data-link>Перейти на главную страницу</a>
      </p>
      `;
  }
}
