<template>
  <div
    class="component-hitokoto flex flex-col justify-between w-full h-full box-border rounded-lg bg-white py-2 px-4 lg:p-4"
  >
    <h2 class="text-xl lg:text-2xl 2xl:text-3xl">
      {{ hitokoto?.hitokoto }}
    </h2>
    <div class="flex flex-row justify-end gap-2 text-base lg:text-xl">
      <span>
        {{ hitokoto?.from }}
      </span>
      <span class="px-1 bg-red-400 text-white rounded">
        {{ hitokoto?.from_who }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getHitokoto } from './api'
import { onMounted, computed, ref } from 'vue'
import { iHitokotoP, iHitokoto } from './interface'
import dayjs from 'dayjs'

const params = computed<iHitokotoP>(() => {
  return {
    c: 'i',
  }
})
const hitokoto = ref<iHitokoto | null>(null)

const getData = () => {
  getHitokoto(params.value).then((res: iHitokoto) => {
    const result = {
      ...res,
      tm: dayjs().format('YYYY:MM:DD HH'),
    }
    hitokoto.value = result
    localStorage.setItem('hitokoto', JSON.stringify(result))
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

onMounted(() => {
  cacheHitokoto()
})
</script>

<style lang="scss" scoped>
@import url('./assets/styles/index.scss');

.component-hitokoto {
  & * {
    font-family: 'ZhuqueFangsong';
  }

  background: url('@/assets/images/gradients/63.jpg') no-repeat;
  background-size: cover;
}
</style>
