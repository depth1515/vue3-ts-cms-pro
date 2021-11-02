import zRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from '@/service/config'

export const request = new zRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      console.log('config', config)
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('err', err)
      return err
    },
    responseInterceptor: (response) => {
      console.log('config', response.data)
      return response
    },
    responseInterceptorCatch: (err) => {
      console.log('err', err)
      return err
    }
  }
})
