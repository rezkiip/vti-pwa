import AXIOS from "./server"

export default {
  register(reqBody) {
    return AXIOS.post('customer/create', reqBody)
  },
  login(reqBody) {
    return AXIOS.post('customer/login', reqBody)
  },
  addParticipant(reqBody) {
    return AXIOS.post('participant/create', reqBody)
  }
}