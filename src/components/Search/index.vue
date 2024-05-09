<template>
  <div class="component-search">
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
