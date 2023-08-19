import Router from './Router';
import StringUtils from './StringUtils';

export default {
  goTo(page) {
    Router.redirect(page);
  },
  back() {
    Router.back()
  },
  saveToLocalStorage(key, value) {
    localStorage.setItem(key, StringUtils.encryptAES(value));
  },
  getFromLocalStorage(key) {
    return StringUtils.decryptAES(localStorage.getItem(key));
  },
  clearLocalStorage() {
    localStorage.clear();
  },
  formatAmount(amount, countryCode = 'ID') {
    return StringUtils.formatAmount(amount, countryCode)
  },
}