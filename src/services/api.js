import axios from 'axios'
const BASE_URL = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'


const API = axios.create({
  baseURL: BASE_URL
});

export default API