import axios from 'axios'

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  responseEncoding: 'utf8'
})

/** TODO uncomment if it is needed */
// API.interceptors.request.use(function (config) {
//     return config;
// });

export { API }
