import AXIOS from "./server"

export default {
  getCompanyTemplates(company_id, type, page = 0, size = 999) {
    return AXIOS.post('template/byCompanyType', {
      company_id,
      template_type: type,
      page, size
    });
  },
}