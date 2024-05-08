<template>
  <div class="index-page h-full">
    <indexLayout>
      <template #header>
        <div class="mt-16">
          <DateTime></DateTime>
        </div>
      </template>
      <template #default>
        <div class="">
          <Search></Search>
        </div>
      </template>
      <template #footer> OneStep 2024 </template>
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
