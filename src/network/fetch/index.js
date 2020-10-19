import axios from 'axios'

export default function fetch(options) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:9001',
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.request.use(req =>{
    return req
  })

  instance.interceptors.response.use(resp =>{
    return resp.data
  })
  return instance(options)
}
