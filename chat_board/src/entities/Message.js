import ThemeColorModel from '../models/ThemeColorModel';
import Dayjs from '../plugins/dayjs';

export default class Message {
  constructor(data) {
    this._data = data;
  }

  get id() {
    return this._data.id;
  }

  get created_at() {
    return Dayjs.getLocale(this._data.created_at);
  }

  get updated_at() {
    return Dayjs.getLocale(this._data.updated_at);
  }

  get message() {
    return this._data.message;
  }

  get user_id() {
    return this._data.user_id;
  }
  get name() {
    return this._data.name;
  }

  get theme_color() {
    return ThemeColorModel.getThemeColor(this._data.theme_color);
  }

  get src() {
    return this._data.image_path;
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
