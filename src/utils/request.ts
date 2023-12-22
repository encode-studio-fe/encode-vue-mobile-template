/* eslint-disable node/prefer-global/process */
import axios from 'axios'
import { showNotify } from 'vant'

import type { AxiosError, InternalAxiosRequestConfig } from 'axios'

import { STORAGE_TOKEN_KEY } from '@/stores/mutation-type'
import { localStorage } from '@/utils/local-storage'

export const REQUEST_TOKEN_KEY = 'Access-Token'

const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000, // 请求超时时间
})

export type RequestError = AxiosError<{
  message?: string
  result?: any
  errorMessage?: string
}>

function errorHandler(error: RequestError): Promise<any> {
  if (error.response) {
    const { data = {}, status, statusText } = error.response
    if (status === 403) {
      showNotify({
        type: 'danger',
        message: (data && data.message) || statusText,
      })
    }
    if (status === 401 && data.result && data.result.isLogin) {
      showNotify({
        type: 'danger',
        message: 'Authorization verification failed',
      })
      // 如果你需要直接跳转登录页面
      // location.replace(loginRoutePath)
    }
  }
  return Promise.reject(error)
}

function requestHandler(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
  const savedToken = localStorage.get(STORAGE_TOKEN_KEY)
  if (savedToken)
    config.headers[REQUEST_TOKEN_KEY] = savedToken

  return config
}

request.interceptors.request.use(requestHandler, errorHandler)

function responseHandler(response: { data: any }) {
  return response.data
}

request.interceptors.response.use(responseHandler, errorHandler)

export default request
