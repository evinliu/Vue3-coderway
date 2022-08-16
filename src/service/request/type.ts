import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface vRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: any) => AxiosRequestConfig
  requestInterceptorCatch?: (error: AxiosError) => AxiosError
  responseInterceptor?: (response: T) => T
  responseInterceptorCatch?: (error: AxiosError) => AxiosError
}

export interface vRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: vRequestInterceptors<T>
}
