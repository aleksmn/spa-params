import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Мой блог");
  }

  async getHtml() {
    return `
      <h1>Мой блог</h1>

      <p>Свежие публикации</p>

      <ul>
        <li><a href="/posts/1" data-link>Первый пост</a></li>
        <li><a href="/posts/2" data-link>Пост номер два</a></li>
        <li><a href="/posts/2022-05-06" data-link>Третий пост</a></li>
      </ul>


      <p>
        <a href="/" data-link>Перейти на главную страницу</a>
      </p>
      `;
  }
}
