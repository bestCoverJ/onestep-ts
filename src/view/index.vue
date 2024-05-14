<template>
  <div class="index-page h-full">
    <indexLayout>
      <template #default>
        <Search class="col-span-3 md:col-span-4 lg:col-span-5"></Search>
        <Hitokoto></Hitokoto>
        <Weather2></Weather2>
        <Collect></Collect>
      </template>
      <template #footer>
        <span class="text-stone-900">OneStep 2024</span>
      </template>
      <template #topRight>
        <!-- <Setting></Setting> -->
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
// import Setting from '@/components/Setting/index.vue'
</script>

<style lang="scss">
.index-page {
}
</style>
