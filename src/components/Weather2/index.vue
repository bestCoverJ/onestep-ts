<template>
  <div
    flex
    flex-col
    box-border
    w-full
    rounded-lg
    p-4
    bg-white
    text-black
    class="component-weather"
    :class="status"
  >
    <n-spin :show="loading" flex flex-1>
      <div flex flex-col flex-1 w-full h-full justify-center>
        <div v-if="weather?.location.name" flex flex-col flex-1 justify-between>
          <div flex flex-col text-base lg:text-base xl:text-lg>
            <div class="flex flex-row items-center gap-1">
              <span>{{ weather?.location.name }}</span>
              <n-icon>
                <LocationOnSharp></LocationOnSharp>
              </n-icon>
            </div>
            <div class="text-2xl lg:text-3xl">
              {{ weather?.now.temperature }}°C
            </div>
          </div>

          <div flex flex-col text-base gap-1 lg:text-base xl:text-xl>
            <img class="weather-icon w-4 xl:w-6" :src="weatherIcon" />
            <span>{{ weather?.now.text }}</span>
            <div flex flex-row justify-between items-center>
              <span>
                {{ dayjs(weather?.last_update).format('MM/DD HH:mm') }}
              </span>
              <n-button quaternary circle @click="getWeatherByLocation">
                <template #icon>
                  <n-icon cursor-pointer text-gray-600>
                    <RefreshSharp></RefreshSharp>
                  </n-icon>
                </template>
              </n-button>
            </div>
            <div flex flex-row justify-center gap-1 text-stone-600 text-xs>
              数据来源
              <n-button text @click="onClickWeather" text-stone-600 text-xs>
                心知天气
              </n-button>
            </div>
          </div>
        </div>
        <div v-else flex flex-col flex-1 items-center justify-center>
          <div flex flex-row items-center gap-2 text-gray-600>
            <span>获取定位信息失败</span>
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

import { getWeather } from './api'
import {
  iWeatherP,
  iCurCity,
  iNowWeather,
  iWeather,
  iWeatherR,
} from './interface'
import dayjs from 'dayjs'
import { useMessage } from 'naive-ui'
const NMessage = useMessage()

const long = ref<number>(0)
const lat = ref<number>(0)
const weatherP = computed<iWeatherP>(() => {
  return {
    key: 'SiCd8SlHi0m6zasEP',
    location: `${lat.value.toFixed(2)}:${long.value.toFixed(2)}`,
  }
})

const weather = ref<iWeather | null>(null)
const loading = ref(false)
const getLocation = () => {
  if (navigator.geolocation) {
    loading.value = true

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        long.value = position.coords.longitude
        lat.value = position.coords.latitude

        getWeatherByLocation()
      },
      () => {
        NMessage.warning('获取位置信息失败')
        loading.value = false
      },
    )
  }
}
const getWeatherByLocation = () => {
  loading.value = true
  getWeather(weatherP.value)
    .then((res: iWeatherR) => {
      weather.value = res.results[0]
    })
    .finally(() => {
      loading.value = false
    })
}
getLocation()

const status = ref('sunny')
const weatherIcon = computed(() => {
  return new URL(
    `./assets/images/${weather.value?.now.code}@1x.png`,
    import.meta.url,
  ).href
})

const onClickWeather = () => {
  window.open('https://www.seniverse.com/')
}
</script>

<style lang="scss" scoped>
.component-weather {
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
