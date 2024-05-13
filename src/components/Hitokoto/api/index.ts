import { jsonp, get } from '@/api/axios'
import { iHitokotoP } from '../interface'

// 获取一言信息
export function getHitokoto(params: iHitokotoP) {
  return get('https://v1.hitokoto.cn/', params)
}
