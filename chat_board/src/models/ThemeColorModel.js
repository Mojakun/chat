export default class ThemeColorModel {

  static colorMap = ['blue', 'pink', 'teal', 'orange'];

  static getThemeColor(id) {
    return this.colorMap[`${id}`]
  }

}
