import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit'
import { message } from 'antd'

interface ErrorResponse {
  status?: number
  message?: string
  data?: any
}

export const errorMiddleware: Middleware = (_store) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const error = action.payload as ErrorResponse
    const status = error?.status
    const errorMessage = error?.message || '请求失败'

    switch (status) {
      case 401:
        message.error('登录已失效，请重新登录')
        localStorage.removeItem('token')
        if (window.location.pathname !== '/login') {
          window.location.href = '/login'
        }
        break
      case 403:
        message.error('您的账号已在其他设备登录，请重新登录')
        localStorage.removeItem('token')
        if (window.location.pathname !== '/login') {
          window.location.href = '/login'
        }
        break
      case 400:
        message.error(errorMessage || '请求参数错误')
        break
      case 404:
        message.error('请求资源不存在')
        break
      case 500:
        message.error('服务器内部错误')
        break
      case 502:
      case 503:
      case 504:
        message.error('网络连接失败，请检查网络')
        break
      default:
        if (errorMessage && status !== undefined) {
          message.error(errorMessage)
        }
    }
  }

  return next(action)
}
