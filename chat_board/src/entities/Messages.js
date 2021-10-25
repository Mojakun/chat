export default class Messages {
  constructor(data) {
    this._data = data;
  }

  get id() {
    return this._data.id;
  }

  get created_at() {
    return this._data.created_at;
  }

  get updated_at() {
    return this._data.updated_at;
  }

  get message() {
    return this._data.message;
  }

  get user_id() {
    return this._data.user_id;
  }

  get category_id() {
    return this._data.category_id;
  }

  get category_name() {
    return this._data.category_name;
  }

  get data() {
    return {
      id: this.id,
      message: this.message,
      category_name: this.category_name,
    };
  }
}
