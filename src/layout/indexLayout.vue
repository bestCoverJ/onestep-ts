<template>
  <div
    class="index-layout h-screen box-border flex flex-col justify-between items-center p-20"
  >
    <n-config-provider
      :theme-overrides="themeOverrides"
      :theme="theme"
      :locale="locale"
      :date-locale="dateLocale"
    >
      <div class="index-header">
        <slot name="header"></slot>
      </div>
      <NThemeEditor></NThemeEditor>
      <div class="index-content">
        <slot name="default"></slot>
      </div>

      <div class="index-footer">
        <slot name="footer"></slot>
      </div>
      
    </n-config-provider>
  </div>
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
import { NThemeEditor } from 'naive-ui'

// 配置主题
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#14C9C9',
  },
}

// 设置颜色主题
const theme = computed(() => {
  const osThemeRef = useOsTheme()
  return osThemeRef.value === 'dark' ? darkTheme : null
})

// 设置语言
const locale = ref<NLocale | null>(zhCN)

// 设置时区
const dateLocale = ref<NDateLocale | null>(dateZhCN)
</script>
<style lang="scss">
.index-layout {
  background: url('@/assets/images/base_21.png') no-repeat;
}
</style>
