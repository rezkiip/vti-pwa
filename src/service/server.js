import axios from 'axios';
import FunctionService from '../tools/FunctionService';
// import FunctionService from '../tools/FunctionService';

const baseURL = 'https://ideo.id/api/v1';

const AXIOS = axios.create({
  baseURL
});

AXIOS.interceptors.response.use(function (response) {
  return response
}, function (error) {
  error.status = error.response.status;
  error.statusText = error.response.data.message || error.response.data.error || error.response.statusText;

  return error
})

export default AXIOS;