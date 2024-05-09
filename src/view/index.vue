<template>
  <div class="index-page h-full">
    <indexLayout>
      <template #header>
        <div class="mt-8">
          <DateTime></DateTime>
        </div>
        <div class="mt-4 w-1/2">
          <Search></Search>
        </div>
      </template>
      <template #default> </template>
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
</script>

<style lang="scss">
.index-page {
}
</style>
