import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { request } from '@/service/index'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
import { ElLoading } from 'element-plus'
// types.ts
interface zRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface zRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: zRequestInterceptors<T>
  showLoading?: boolean
}

const IS_LOADING = true

class zRequest {
  instance: AxiosInstance
  interceptors?: zRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance
  constructor(config: zRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    // ?? undefined null 判断
    this.showLoading = config.showLoading ?? IS_LOADING
    this.interceptors = config.interceptors

    // 使用拦截器

    //* 从 config 中取出的拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //* 添加所有的实例有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局request res')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0, .3)'
          })
        }

        return config
      },
      (err) => {
        console.log('全局request err')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log(res)
        console.log('全局response res', res.data)
        // const data = res.data
        // if (data.returnCode === '1001') {
        //   console.log('cuowu')
        // } else return res.data
        this.loading?.close()
        return res.data
      },
      (err) => {
        console.log('全局response err')
        // switch
        if (err.response.status === 404) {
          console.log('not found')
        }
        return err
      }
    )
  }

  request<T>(config: zRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 返回 showLoading 为默认状态,不影响下次请求
          this.showLoading = IS_LOADING

          resolve(res)
        })
        .catch((err) => {
          this.showLoading = IS_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: zRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: zRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: zRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: zRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default zRequest
