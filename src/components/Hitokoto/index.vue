<template>
  <div
    class="component-hitokoto flex flex-col justify-between w-full h-full box-border rounded-lg bg-white py-2 px-4 lg:p-4"
  >
    <n-spin :show="loading" flex flex-1>
      <div flex flex-col justify-between flex-1 w-full h-full>
        <h2 class="text-lg m-0 lg:text-xl 2xl:text-2xl">
          {{ hitokoto?.hitokoto }}
        </h2>
        <div>
          <div
            class="flex flex-row justify-end items-center gap-2 text-base lg:text-xl"
          >
          <span>
           {{ hitokoto?.from_who }}
          </span>
            <span class="px-1 bg-red-400 text-white rounded">
              {{ hitokoto?.from }}
          </span>
            <n-button quaternary circle @click="getData">
              <template #icon>
                <n-icon cursor-pointer text-gray-600>
                  <RefreshSharp></RefreshSharp>
                </n-icon>
              </template>
            </n-button>

          </div>
          <div mt-2 flex flex-row justify-center gap-1 text-stone-600 text-xs>
            数据来源
            <n-button text @click="onClickWeather" text-stone-600 text-xs>
              一言
            </n-button>
          </div>
        </div>

      </div>
    </n-spin>
  </div>
</template>

<script setup lang="ts">
import { getHitokoto } from './api'
import { onMounted, computed, ref } from 'vue'
import { iHitokotoP, iHitokoto } from './interface'
import { RefreshSharp } from '@vicons/material'
import dayjs from 'dayjs'

const params = computed<iHitokotoP>(() => {
  return {
    c: 'i'
  }
})
const hitokoto = ref<iHitokoto | null>(null)

const loading = ref(false)
const getData = () => {
  loading.value = true
  getHitokoto(params.value).then((res: iHitokoto) => {
    const result = {
      ...res,
      tm: dayjs().format('YYYY:MM:DD HH')
    }
    hitokoto.value = result
    localStorage.setItem('hitokoto', JSON.stringify(result))
    setTimeout(() => {
      loading.value = false
    }, 200)
  })
}
// 一言数据缓存
const cacheHitokoto = () => {
  const caHitokoto = JSON.parse(localStorage.getItem('hitokoto') || '{}')
  if (
    !caHitokoto?.hitokoto ||
    dayjs().diff(dayjs(caHitokoto?.tm, 'hour')) >= 1
  ) {
    getData()
  } else {
    hitokoto.value = caHitokoto
  }
}

const onClickWeather = () => {
  window.open('https://hitokoto.cn/')
}

onMounted(() => {
  cacheHitokoto()
})
</script>

<style lang="scss" scoped>
.component-hitokoto {
  & * {
    font-family: 'ZhuqueFangsong';
  }

  background: url('@/assets/images/gradients/63.jpg') no-repeat;
  background-size: cover;
}
</style>
