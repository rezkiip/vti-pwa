import axios from "axios"

const AXIOS_SHIPDEO = axios.create({
  baseURL: 'https://main-api-development.shipdeo.com/v1'
});

export default {
  getAccessToken() {
    return axios.get('https://dev.idigital.co.id/vti/_shipdeo-token.php');
  },
  searchMasterLocation(accessToken = '', name = '', type = '') {
    return AXIOS_SHIPDEO.post('master/locations', {
      name, type
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      }
    })
  },
  searchLocation(accessToken = '', name = '', city_code = '') {
    return AXIOS_SHIPDEO.post('master/locations/postalcode', {
      name, city_code
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      }
    })
  },
  getPricingList(accessToken = '', reqBody) {
    return AXIOS_SHIPDEO.post('couriers/pricing', reqBody, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      }
    });
  }
}