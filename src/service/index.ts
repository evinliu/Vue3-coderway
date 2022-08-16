import VRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import { useStore } from '@/store'

const vRequest = new VRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const store = useStore()
      //携带token的拦截
      const token = store.state.login.token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
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

export default vRequest
