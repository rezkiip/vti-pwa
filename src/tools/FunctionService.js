import Router from './Router';
import StringUtils from './StringUtils';

export default {
  goTo(page) {
    Router.redirect(page);
  },
  encryptSha256(str) {
    return StringUtils.encryptSha256(str);
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
  isSuccessStatus(status) {
    const validationRegex = /^2\d{2}$/;
    
    return validationRegex.test(status.toString())
  },
  showErrorSnackbar(msg) {
    document.querySelector("#snackbar-popup").innerHTML = msg;
    document.querySelector("#snackbar-popup").classList.add("show");
    setTimeout(() => {
      document.querySelector("#snackbar-popup").classList.remove("show");
    }, 3000);
  },
  showSuccessSnackbar(msg) {
    document.querySelector("#snackbar-popup-success").innerHTML = msg;
    document.querySelector("#snackbar-popup-success").classList.add("show");
    setTimeout(() => {
      document.querySelector("#snackbar-popup-success").classList.remove("show");
    }, 3000);
  },
  loading() {
    document.querySelector("#application-loader").style.display = 'flex'
  },
  finishLoading() {
    document.querySelector("#application-loader").style.display = 'none'
  },
  getLoginData() {
    try {
      if (!localStorage.getItem('login-data')) {
        return null;
      }
  
      return JSON.parse(this.getFromLocalStorage('login-data'));
    } catch {
      return null
    }
  },
  generateRandomHexString(length = 12) {
    const hexChars = '0123456789ABCDEF';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * hexChars.length);
      result += hexChars.charAt(randomIndex);
    }

    return result;
  }
}