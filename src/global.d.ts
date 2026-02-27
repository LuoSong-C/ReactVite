export interface ResponseData<T = any> {
  status: number
  data: T
  message: string
}

export interface RouteItem {
  path: string
  component?: string
  name?: string
  icon?: string
  children?: RouteItem[]
  meta?: {
    title?: string
    requiresAuth?: boolean
    roles?: string[]
    hidden?: boolean
  }
}
