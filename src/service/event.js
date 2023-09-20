import AXIOS from "./server"

export default {
  getEventList() {
    return AXIOS.post('event/byTypeMB', {
      type_event: "UPCOMING|EVALUATION REGISTRATION|REGISTRATION|SUBMISSION|ONGOING|EVALUATION EVENT|CLOSED",
      type_account: "",
      type_location: "offline",
      page: 0,
      size: 100
    });
  },
  getBannerByEventId(event_id, page = 0, size = 999) {
    return AXIOS.post('banner/byEvent', {
      event_id, page, size
    });
  },
  getEventInsight(eventPublicId) {
    return AXIOS.post('event/eventListByLink', {
      page: 0,
      size: 1,
      permanent_link: `https://ideo.id/${eventPublicId}` //hardcode
    })
  },
}