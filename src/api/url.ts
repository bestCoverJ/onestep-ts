import { jsonp } from './axios'

// 获取搜索联想
export function getSearchSug(params: string) {
  return jsonp(
    `http://suggestion.baidu.com/su?wd=${params}`,
  )
}
