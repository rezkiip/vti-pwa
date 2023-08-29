import AXIOS from "./server"

export default {
  getBrandProducts(brand_id, company_id, page = 0, size = 999) {
    return AXIOS.post('product/byBrand', {
      company_id, brand_id, page, size
    })
  },
  createInvoice(reqBody) {
    return AXIOS.post('transaction/create', reqBody)
  }
}