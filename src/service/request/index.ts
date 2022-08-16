import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { vRequestConfig, vRequestInterceptors } from './type'

class VRequest {
  instance: AxiosInstance
  interceptors?: vRequestInterceptors

  constructor(config: vRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => err
    )
  }
  request<T>(config: vRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }
      this.instance
        .request<T, any>(config)
        .then(({ data }) => {
          if (config.interceptors?.responseInterceptor) {
            data = config.interceptors?.responseInterceptor(data)
          }
          resolve(data)
        })
        .catch((err) => reject(err))
    })
  }
  get<T>(config: vRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: vRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: vRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: vRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default VRequest
