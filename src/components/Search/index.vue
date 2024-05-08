<template>
  <div class="component-search">
    <n-auto-complete
      v-model="searchValue"
      size="large"
      clearable
    ></n-auto-complete>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchValue = ref('')
</script>

<style lang="scss">
.component-search {
  .n-input {
    background-color: transparent;
  }
}
</style>
