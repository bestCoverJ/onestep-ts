import { jsonp, get } from '@/api/axios'
import { iCityP, iWeatherP } from '../interface'

export function getCity(params: iCityP) {
  return get('https://geoapi.qweather.com/v2/city/lookup', params)
}

export function getWeather(params: iWeatherP) {
  return get('https://devapi.qweather.com/v7/weather/now', params)
}
