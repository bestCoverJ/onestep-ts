import { jsonp, get } from './axios'

// 获取搜索联想
export function getSearchSug(params: string) {
  return jsonp(`https://suggestion.baidu.com/su?wd=${params}`)
}
