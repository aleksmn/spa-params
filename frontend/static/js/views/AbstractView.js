export default class {
  constructor(params) {
    // Работа с параметрами
    this.params = params;

    // console.log(this.params);
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}