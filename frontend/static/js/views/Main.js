import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Главная страница");
  }

  async getHtml() {
    return `
      <h1>Добро пожаловать на главную страницу сайта!</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus quo nobis commodi tempora molestias obcaecati dolores consectetur id ut nemo cumque eum quasi ratione vero, facere, mollitia atque suscipit!</p>
      <p>Aperiam beatae repellendus qui! Eum nulla tempora nisi aperiam earum consectetur ipsa culpa, enim facilis dolores officia id ipsam mollitia praesentium officiis sed ullam pariatur incidunt quos veniam animi atque!</p>
      <p>Adipisci corporis magnam eius quod, nulla exercitationem doloremque incidunt, nesciunt aliquam eveniet temporibus. Ipsam alias doloribus, excepturi, tempora totam, temporibus delectus est natus facilis perspiciatis harum hic dicta ab placeat!</p>
     
      <p>
        <a href="/posts" data-link>Перейти к блогу</a>
      </p>
      `;
  }
}
