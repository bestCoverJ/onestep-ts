<template>
  <div class="index-page h-full">
    <indexLayout>
      <template #default>
        <DateTime class="col-span-3 md:col-span-4 lg:col-span-5"></DateTime>
        <Search class="col-span-3 md:col-span-4 lg:col-span-5"></Search>
        <Hitokoto></Hitokoto>
      </template>
      <template #footer>
        <span class="text-stone-700">OneStep 2024</span>
      </template>
    </indexLayout>
  </div>
</template>

<script lang="ts" setup>
import indexLayout from '@/layout/indexLayout.vue'
import DateTime from '@/components/DateTime/index.vue'
import Search from '@/components/Search/index.vue'
import Hitokoto from '@/components/Hitokoto/index.vue'
</script>

<style lang="scss">
.index-page {
}
</style>
