import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Мой блог");
  }

  async fetchText() {
    let response = await fetch("/static/texts/" + this.params.id + ".html");
    let data = await response.text();
    // console.log(response);
    // console.log(data);
    return data;
  }

  async getHtml() {
    console.log(this.params.id);
    // this.fetchText();

    let text = await this.fetchText();
    text += "<p><a href='/posts' data-link>Смотреть другие посты</a></p>";

    text = "<div class='post'>" + text + "</div>";

    return text;

    // return `
    //   <h1>Пост</h1>

    //   <p>Вы смотрите пост ${this.params.id}</p>
    //   <p>
    //     <a href="/posts" data-link>Назад к недавним постам</a>
    //   </p>
    //   `;
  }
}
