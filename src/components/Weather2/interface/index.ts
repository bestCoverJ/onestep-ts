export interface iWeatherP {
  location: string // 用户认证key
  key: string // 需要查询地区的LocationID或以英文逗号分隔的经度,纬度坐标
  language?: string // 设置语言
  unit?: string // 单位
}

// 实时天气信息
export interface iNowWeather {
  code: string // 天气状况代码
  temperature: string // 温度，默认单位：摄氏度
  text: string // 天气状况的文字描述，包括阴晴雨雪等天气状态的描述
}

// 当前城市信息
export interface iCurCity {
  id: string // 城市id
  country: string // 国家
  name: string // 城市名称
  path: string // 城市层级
  timezone: string // 时区
  timezone_offset: string // 时区时差
}

// 天气数据
export interface iWeather {
  last_update: string // 数据更新时间
  location: iCurCity // 当前城市信息
  now: iNowWeather // 实时天气信息
}

// 天气接口返回数据
export interface iWeatherR {
  results: Array<iWeather>
}
