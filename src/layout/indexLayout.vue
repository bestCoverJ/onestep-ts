<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :theme="theme"
    :locale="locale"
    :date-locale="dateLocale"
  >
    <n-message-provider>
      <div
        class="index-layout h-screen box-border flex flex-col justify-center p-8 md:py10 md:px-14 xl:p16"
      >
        <div
          class="index-content grid-rows-[240px_240px] grid-cols-3 xl:grid-cols-4 2xl:grid-rows-[240px_240px_240px] 2xl:grid-cols-5"
          box-border
          w-full
          grid
          justify-items-center
          py-8
          gap-8
          lg:gap-16
          lg:p-16
        >
          <slot name="default"></slot>
        </div>

        <div
          class="index-footer flex-shrink-0 flex flex-row items-center justify-center"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  useOsTheme,
  darkTheme,
  zhCN,
  dateZhCN,
  NConfigProvider,
  GlobalThemeOverrides,
} from 'naive-ui'
import type { NLocale, NDateLocale } from 'naive-ui'

// 配置主题
const themeOverrides: GlobalThemeOverrides = {
  common: {},
}

const osThemeRef = useOsTheme()
// 设置颜色主题
const theme = computed(() => {
  return osThemeRef.value === 'dark' ? darkTheme : null
})

// 设置语言
const locale = ref<NLocale | null>(zhCN)

// 设置时区
const dateLocale = ref<NDateLocale | null>(dateZhCN)
</script>
<style lang="scss">
.index-layout {
  // background: url('@/assets/images/base_21.png') no-repeat;
  // background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}
</style>
