export interface ResponseBody<T = any> {
  message?: string
  code?: number
  data?: T
  success: boolean
}

export interface PageResult<T = any> {
  data: T[]
  current?: number
  pageSize?: number
  total?: number
  success: boolean
}
