import axios from 'axios'
import { API_URL } from '../environments'

const service = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
service.interceptors.response.use(
  (response) => {
    console.log(response.data)
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
