import Router from './Router';
import StringUtils from './StringUtils';
import QRCode from 'qrcode-generator';
import * as EmailValidator from 'email-validator';

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
  },
  generateQrCode(str) {
    const qrcode = QRCode(0, 'H');
    qrcode.addData(str);
    qrcode.make();

    const canvas = document.createElement('canvas');
    canvas.width = qrcode.getModuleCount() * 10;
    canvas.height = qrcode.getModuleCount() * 10;

    const context = canvas.getContext('2d');
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < qrcode.getModuleCount(); y++) {
      for (let x = 0; x < qrcode.getModuleCount(); x++) {
        if (qrcode.isDark(y, x)) {
          context.fillStyle = '#000000';
          context.fillRect(y*10, x*10, 10, 10);
        }
      }   
    }

    return canvas.toDataURL('image/png');
  },
  validEmail(email) {
    return EmailValidator.validate(email);
  }
}