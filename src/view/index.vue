<template>
  <div
    class="index-page flex flex-col absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div class="flex">
      <n-button text href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </n-button>
      <n-button text href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </n-button>
    </div>
    <div class="flex flex-col">
      <n-gradient-text :size="48">Vue3 Quick Fast</n-gradient-text>
      <n-gradient-text :size="24" class="mt-12"
        >Quick startup framework based on vue,</n-gradient-text
      >
      <n-gradient-text :size="24">
        Includes
        <n-button
          text
          class="mx-1 text-lg"
          size="large"
          v-for="(plugin, pIndex) in pluginList"
          :key="pIndex"
          :href="plugin.value"
          >{{ plugin.label }}</n-button
        >,
      </n-gradient-text>
      <n-gradient-text :size="24">
        Use
        <n-button
          text
          class="mx-1 text-lg"
          size="large"
          v-for="(lang, lIndex) in langList"
          :key="lIndex"
          :href="lang.value"
        >
          {{ lang.label }}</n-button
        >.
      </n-gradient-text>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface option {
  label: string
  value: string
}
const pluginList: Array<option> = [
  {
    label: 'Axios',
    value: 'https://axios-http.com/',
  },
  {
    label: 'Pinia',
    value: 'https://pinia.vuejs.org/',
  },
  {
    label: 'Element Plus',
    value: 'https://element-plus.org/zh-CN/',
  },
  {
    label: 'Vue Router',
    value: 'https://router.vuejs.org/',
  },
]

const langList: Array<option> = [
  {
    label: 'TypeScript',
    value: 'https://developer.mozilla.org/',
  },
  {
    label: 'Sass',
    value: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwind CSS',
    value: 'https://tailwindcss.com/',
  },
]
</script>

<style lang="scss">
.index-page {
}
</style>
