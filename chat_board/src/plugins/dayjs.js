import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('ja');
dayjs.extend(relativeTime);

export default class Dayjs {
  static getLocale(timestamp) {
    if (timestamp === 0) return timestamp;
    const formatedDate = this.timeStampFormatToDate(timestamp);
    return dayjs(formatedDate).format('YYYY年MM月DD月');
  }
  static timeStampFormatToDate(timestamp) {
    const formatedDate = new Date(timestamp * 1000);
    return formatedDate;
  }
}
