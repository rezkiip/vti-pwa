import AXIOS from "./server"

export default {
  getCompanyShippingAddress(company_id, page = 0, size = 999) {
    return AXIOS.post('shippingCompany/byCompany', {
      company_id,
      page, size
    });
  },
}