<template>
  <div
    flex
    flex-col
    box-border
    w-full
    rounded
    p-4
    bg-white
    text-black
    class="component-weather"
    :class="status"
  >
    <n-spin :show="loading" flex flex-1>
      <div flex flex-col flex-1 w-full h-full justify-center>
        <div v-if="city.name" flex flex-col flex-1 justify-between>
          <div flex flex-col text-base lg:text-xl xl:text-2xl>
            <div class="flex flex-row items-center gap-1">
              <span>{{ city.name }}</span>
              <n-icon>
                <LocationOnSharp></LocationOnSharp>
              </n-icon>
            </div>
            <div class="text-3xl lg:text-4xl">{{ weather?.now.temp }}°C</div>
          </div>

          <div flex flex-col text-base lg:text-xl xl:text-2xl>
            <img class="w-6 xl:w-8 -ml-1" :src="weatherIcon" />
            <span>{{ weather?.now.text }}</span>
            <span>{{ dayjs().format('YYYY/MM/DD HH:mm') }}</span>
          </div>
        </div>
        <div v-else flex flex-col flex-1 items-center justify-center>
          <div flex flex-row items-center gap-2 text-gray-600>
            <span>暂无天气数据</span>
            <n-icon cursor-pointer @click="getLocation">
              <RefreshSharp></RefreshSharp>
            </n-icon>
          </div>
        </div>
      </div>
    </n-spin>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { LocationOnSharp, RefreshSharp } from '@vicons/material'
import Sunny from './assets/images/sunny.png'
import Snowy from './assets/images/Snowy.png'
import Rainy from './assets/images/Rainy.png'
import RainThunder from './assets/images/RainThunder.png'
import PartlyCloudy from './assets/images/PartlyCloudy.png'

import { getCity, getWeather } from './api'
import { iCityP, iWeatherP, iLocation, iCity, iWeather } from './interface'
import dayjs from 'dayjs'
import { useMessage } from 'naive-ui'
const NMessage = useMessage()

const weather = ref<iWeather | null>(null)
const weatherP = computed<iWeatherP>(() => {
  if (location.value?.location?.length) {
    return {
      location: location.value?.location[0].id,
      key: '30eaa2640ae14ed69162532a94d32610',
    }
  }
  return {
    location: '',
    key: '',
  }
})
const getCityWeather = () => {
  const nowWeather = JSON.parse(localStorage.getItem('weather') || '{}')

  if (
    nowWeather.code !== '200' ||
    dayjs().diff(dayjs(nowWeather?.tm, 'hour')) >= 2
  ) {
    getWeatherByLocation()
  } else {
    weather.value = nowWeather
  }
}
const getWeatherByLocation = () => {
  getWeather(weatherP.value).then((res: iWeather) => {
    const result = {
      ...res,
      tm: dayjs().format('YYYY:MM:DD HH'),
    }
    weather.value = result
    localStorage.setItem('weather', JSON.stringify(result))
  })
}

const location = ref<iCity | null>(null)
const city = computed<iLocation>(() => {
  if (location.value?.location?.length) {
    return location.value.location[0]
  }
  return {
    id: '',
    name: '',
    lat: '',
    lon: '',
    adm2: '',
    adm1: '',
    country: '',
    tz: '',
    utcOffset: '',
    isDst: '',
    type: '',
    rank: '',
    fxLink: '',
  }
})
const locationP = computed<iCityP>(() => {
  return {
    location: `${long.value.toFixed(2)},${lat.value.toFixed(2)}`,
    key: '30eaa2640ae14ed69162532a94d32610',
  }
})

// 城市信息缓存
const getCurCity = () => {
  const curLocation = JSON.parse(localStorage.getItem('location') || '{}')

  if (curLocation?.code !== '200') {
    getCityByLocation()
  } else {
    location.value = curLocation
    getCityWeather()
  }
}
const getCityByLocation = () => {
  getCity(locationP.value).then((res: iCity) => {
    const result = {
      ...res,
      tm: dayjs().format('YYYY:MM:DD HH'),
    }
    location.value = result
    localStorage.setItem('location', JSON.stringify(result))

    getCityWeather()
  })
}

const long = ref<number>(0)
const lat = ref<number>(0)

const loading = ref(false)
const getLocation = () => {
  loading.value = true
  if (navigator.geolocation) {
    const p = JSON.parse(sessionStorage.getItem('position') || '{}')

    if (p.long && p.lat) {
      long.value = p.longitude
      lat.value = p.latitude

      console.log(`当前位置信息${lat.value}, ${long.value}`)
      getCurCity()
      loading.value = false
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          long.value = position.coords.longitude
          lat.value = position.coords.latitude
          sessionStorage.setItem(
            'position',
            JSON.stringify({
              long: position.coords.longitude,
              lat: position.coords.latitude,
            }),
          )

          console.log(`当前位置信息${lat.value}, ${long.value}`)
          getCurCity()
          loading.value = false
        },
        () => {
          NMessage.warning('获取位置信息失败')
          loading.value = false
        },
      )
    }
  }
}
getLocation()

const status = ref('sunny')
const weatherIcon = computed(() => {
  switch (status.value) {
    case 'sunny':
      return Sunny
    case 'partly-cloudy':
      return PartlyCloudy
    case 'snowy':
      return Snowy
    case 'rainy':
      return Rainy
    case 'rainthunder':
      return RainThunder
    default:
      return Sunny
  }
})
</script>

<style lang="scss" scoped>
.component-weather {
  @import url('./assets/styles/index.scss');

  &.sunny {
    background-image: linear-gradient(0deg, #a1c4fd 0%, #c2e9fb 100%);
  }
  &.partly-cloudy {
    background-color: #dcd9d4;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      radial-gradient(
        at 50% 0%,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(0, 0, 0, 0.5) 50%
      );
    background-blend-mode: soft-light, screen;
  }
  &.snowy {
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  }
  &.rainy {
    background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
  }
  &.rainthunder {
    background-image: linear-gradient(
      to top,
      #a7a6cb 0%,
      #8989ba 52%,
      #8989ba 100%
    );
  }
}
</style>
