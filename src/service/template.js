import AXIOS from "./server"

export default {
  getCompanyTemplates(company_id, type, page = 0, size = 999) {
    return AXIOS.post('template/byCompanyType', {
      company_id,
      template_type: type,
      page, size
    });
  },
  submitFormRegistration(reqBody) {
    return AXIOS.post('participant/createTemplate', reqBody)
  },
  checkRegistrationStatus(reqBody) {
    return AXIOS.post('participant/statusTemplate', reqBody)
  }
}