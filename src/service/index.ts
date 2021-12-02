import zRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from '@/service/config'
import cache from '@/utils/cache'

export const request = new zRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = cache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      console.log('config', config)
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
