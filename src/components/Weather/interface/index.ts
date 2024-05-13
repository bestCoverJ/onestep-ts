export interface iCityP {
  location: string // 需要查询地区的名称，支持文字、以英文逗号分隔的经度,纬度坐标
  key: string // 用户认证key
  adm?: string // 用户认证key
  range?: string // 搜索范围
  number?: number // 搜索数量
  lang?: string // 多语言设置
}

export interface iLocation {
  name: string // 地区/城市名称
  id: string // 地区/城市ID
  lat: string // 地区/城市纬度
  lon: string // 地区/城市经度
  adm2: string // 地区/城市的上级行政区划名称
  adm1: string // 地区/城市所属一级行政区域
  country: string // 地区/城市所属国家名称
  tz: string // 地区/城市所在时区
  utcOffset: string // 地区/城市目前与UTC时间偏移的小时数
  isDst: string // 地区/城市是否当前处于夏令时
  type: string // 地区/城市的属性
  rank: string // 地区评分
  fxLink: string //  该地区的天气预报网页链接
}
interface iRefer {
  sources?: Array<string> // 原始数据来源
  license?: Array<string> // 数据许可或版权声明
}
export interface iCity {
  code: number // 状态码
  location: Array<iLocation>
  refer?: iRefer
}

export interface iWeatherP {
  location: string // 用户认证key
  key: string // 需要查询地区的LocationID或以英文逗号分隔的经度,纬度坐标
  lang?: string // 多语言设置
  unit?: string // 数据单位设置
}
interface iNowWeather {
  obsTime: string // 数据观测时间
  temp: string // 温度，默认单位：摄氏度
  feelsLike: string // 体感温度，默认单位：摄氏度
  icon: string // 天气状况的图标代码
  text: string // 天气状况的文字描述，包括阴晴雨雪等天气状态的描述
  wind360: string // 风向360角度
  windDir: string // 风向
  windScale: string // 风力等级
  windSpeed: string // 风速
  humidity: string // 相对湿度，百分比数值
  precip: string // 当前小时累计降水量，默认单位：毫米
  pressure: string // 大气压强，默认单位：百帕
  vis: string // 能见度，默认单位：公里
  cloud?: string // 云量，百分比数值
  dew?: string // 露点温度
}
export interface iWeather {
  code: number // 状态码
  updateTime: string // 当前API的最近更新时间
  fxLink: string // 当前数据的响应式页面，便于嵌入网站或应用
  now: iNowWeather
  refer?: iRefer
}
