<template>
  <div class="component-search flex flex-col gap-4 items-center justify-center  w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
    <DateTime class="col-span-3 md:col-span-4 lg:col-span-5"></DateTime>
    <n-auto-complete
      v-model:value="searchValue"
      size="large"
      placeholder=""
      clearable
      :loading="searchLoading"
      :options="searchOption"
      @update:value="updateValue"
      @select="onSelect"
      @keyup="onKeyup"
    ></n-auto-complete>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getSearchSug } from '@/api/url'
import DateTime from '@/components/DateTime/index.vue'

const searchValue = ref<string>('')
const searchOption = ref<Array<string>>([])
const searchLoading = ref<boolean>(false)
const updateValue = () => {
  if (searchValue.value) {
    searchLoading.value = true
    getSearchSug(searchValue.value).then((res) => {
      searchOption.value = [searchValue.value, ...res.s]
      setTimeout(() => {
        searchLoading.value = false
      }, 200)
    })
  }
}

const onKeyup = (e: KeyboardEvent) => {
  if (e.key == 'Enter') {
    updateValue()
  }
}

const onSelect = (value: string) => {
  window.open(`https://www.baidu.com/s?wd=${value}`)
}
</script>

<style lang="scss">
.component-search {
  .n-input {
    height: 3rem;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);

    .n-input__input {
      .n-input__input-el {
        font-size: 20px;
        height: 3rem;
      }
    }
  }
}
</style>
