export default class Category {
  constructor(data) {
    this._data = data;
  }

  get id() {
    return this._data.id;
  }
  get name() {
    return this._data.name;
  }

  get data() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
