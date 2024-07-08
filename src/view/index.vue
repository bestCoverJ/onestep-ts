<template>
  <div class="index-page h-full">
    <indexLayout>
      <template #default>
        <Search class="col-span-3 md:col-span-4 lg:col-span-5"></Search>
        <Hitokoto v-if="isLargeScreen"></Hitokoto>
        <Weather2 v-if="isLargeScreen"></Weather2>
        <Collect v-if="isLargeScreen"></Collect>
        <Link v-if="isLargeScreen"></Link>
      </template>
      <template #footer>
        <span class="footer-text text-stone-900"> OneStep 2024 </span>
      </template>
      <template #topRight>
        <Setting v-if="isLargeScreen"></Setting>
      </template>
    </indexLayout>
  </div>
</template>

<script lang="ts" setup>
import indexLayout from '@/layout/indexLayout.vue'

import Search from '@/components/Search/index.vue'
import Hitokoto from '@/components/Hitokoto/index.vue'
import Weather2 from '@/components/Weather2/index.vue'
import Collect from '@/components/Collect/index.vue'
import Link from '@/components/Link/index.vue'
import Setting from '@/components/Setting/index.vue'

import { useMediaQuery } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
// const isLargeScreen = false
</script>

<style lang="scss">
.index-page {
}
</style>
