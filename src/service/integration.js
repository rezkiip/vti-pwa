import AXIOS from "./server"

export default {
  getCompanyIntegrations(company_id, type, page = 0, size = 9999) {
    return AXIOS.post('/parameter/integration', {
      company_id, type, page, size
    })
  }
}