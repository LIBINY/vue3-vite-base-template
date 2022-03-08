import Axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { showMessage } from './status'

const service = Axios.create({
  baseURL: '',
  timeout: 1000,
})

// http request拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8', // 传参方式json
    }
    return config
  },
  (err: AxiosError) => {
    console.log(err)
    return Promise.reject(err)
  }
)

// http response拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response)
    const { data } = response
    if (data.code !== 0) {
      // notification.error({ message: '请求失败', description: data.info })
      console.error('请求出错了')
    }
    return data
  },
  (err: AxiosError) => {
    console.log(err)
    const { response } = err
    if (response) {
      // 请求已发出，但是不在2xx的范围
      const msg: string = showMessage(response.status) // 传入响应码，匹配响应码对应信息
      // console.log(showMessage(response.status))
      // notification.error({ message: response.status, description: msg })
      console.error(response.status, msg)
      return Promise.reject(response.data)
    } else {
      // notification.warning({ message: '网络连接异常,请稍后再试!' });
      console.warn('网络连接异常,请稍后再试!')
    }
  }
)

export default service
