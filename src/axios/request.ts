import service from './index'
import { AxiosError, AxiosResponse } from 'axios'

// get请求
export function get(url: string, params = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    const promise = service({
      url,
      params,
    })
    //处理返回
    promise
      .then((res: AxiosResponse) => {
        resolve(res)
      })
      .catch((err: AxiosError) => {
        reject(err)
      })
  })
}

// post请求
export function post(url: string, params = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    const promise = service({
      method: 'POST',
      url,
      data: params,
    })
    //处理返回
    promise
      .then((res: AxiosResponse) => {
        console.log('res', res)
        resolve(res)
      })
      .catch((err: AxiosError) => {
        reject(err)
      })
  })
}

// upload请求
export function upload(url: string, params = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    const formData = new FormData()
    Object.keys(params).forEach((key) => {
      formData.append(key, params[key])
    })
    const promise = service({
      method: 'POST',
      url,
      data: formData,
    })
    //处理返回
    promise
      .then((res: AxiosResponse) => {
        resolve(res)
      })
      .catch((err: AxiosError) => {
        reject(err)
      })
  })
}
