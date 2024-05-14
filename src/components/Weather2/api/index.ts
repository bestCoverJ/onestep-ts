import { jsonp, get } from '@/api/axios'
import { iWeatherP } from '../interface'

export function getWeather(params: iWeatherP) {
  return get('https://api.seniverse.com/v3/weather/now.json', params)
}
