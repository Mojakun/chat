export default class Users {
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

  get name() {
    return this._data.name;
  }

  get kana() {
    return this._data.kana;
  }

  get mail() {
    return this._data.mail;
  }

  get theme_color() {
    return this._data.theme_color;
  }

  get is_mail_magazine() {
    return this._data.is_mail_magazine;
  }

  get password() {
    return this._data.password;
  }
  get image_path() {
    return this._data.image_path;
  }

  get data() {
    return {
      id: this.id,
      name: this.name,
      kana: this.kana,
      mail: this.mail,
      theme_color: this.theme_color,
      is_mail_magazine: this.is_mail_magazine,
      password: this.password,
      image_path: this.image_path,
    };
  }
}
