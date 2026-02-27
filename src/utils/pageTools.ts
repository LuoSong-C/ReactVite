/**
 * @description: 判断字符串非undefined,null,''
 * @param {any} value
 * @return {boolean}
 */
export const isNotNull = (value: any): boolean => {
  if (value !== undefined && value !== null && value !== '') {
    value = value.toString()
    if (value.trim() !== '') {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
