import Constants from './Constants';
import CryptoJS from 'crypto-js';

export default {
  encryptAES(str) {
    try {
      if (!str) {
        return "";
      }

      return CryptoJS.AES.encrypt(str, Constants.ENCRYPTION_ACCESS_KEY).toString();
    } catch (err) {
      console.error(err.toString());
      
      return "";
    }
  },
  decryptAES(str) {
    try {
      if (!str) {
        return "";
      }

      const bytes = CryptoJS.AES.decrypt(str, Constants.ENCRYPTION_ACCESS_KEY)
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (err) {
      console.error(err.toString());
      
      return "";
    }
  },
  formatAmount(amount, countryCode) {
    return Intl.NumberFormat(countryCode).format(amount)
  },
}