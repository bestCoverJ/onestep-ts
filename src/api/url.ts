import { jsonp, get } from './axios'
import { iHitokotoP } from './interface'

// 获取搜索联想
export function getSearchSug(params: string) {
  return jsonp(`https://suggestion.baidu.com/su?wd=${params}`)
}

// 获取一言信息
export function getHitokoto(params: iHitokotoP) {
  return get('https://v1.hitokoto.cn/', params)
}
