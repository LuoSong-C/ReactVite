export const requestHeaders = (headers: Headers) => {
  const token = localStorage.getItem('token')
  const requestId = localStorage.getItem('requestId')
  if (token) {
    headers.set('token', `${token}`)
  }
  if (requestId) {
    headers.set('requestId', `${requestId}`)
  }
  return headers
}
