import AXIOS from "./server"

export default {
  getBrandProducts(brand_id, company_id, page = 0, size = 999) {
    return AXIOS.post('product/byBrand', {
      company_id, brand_id, page, size
    })
  },
  createUniqueCode() {
    return AXIOS.post('/parameter/unique-code', {
      "type": "unique_code",
      "page": 0,
      "size": 100
  })
  },
  createInvoice(reqBody) {
    return AXIOS.post('transaction/create', reqBody)
  }
}