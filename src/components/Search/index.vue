<template>
  <div class="component-search">
    <n-auto-complete
      class="rounded-full"
      v-model:value="searchValue"
      size="large"
      placeholder=""
      clearable
      :options="searchOption"
      @update:value="updateValue"
      @select="onSelect"
    ></n-auto-complete>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getSearchSug } from '@/api/url'

const searchValue = ref('')
const searchOption = ref([])
const updateValue = () => {
  getSearchSug(searchValue.value).then((res) => {
    searchOption.value = res.s
  })
}

const onSelect = (value: string) => {
  window.open(`https://www.baidu.com/s?wd=${value}`)
}
</script>

<style lang="scss">
.component-search {
  .n-input {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
  }
}
</style>
