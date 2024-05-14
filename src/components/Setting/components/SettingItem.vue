<template>
  <div class="component-setting-item">
    <n-form ref="formRef" :model="model" :rules="rules" label-placement="left">
      <n-form-item
        v-for="item in formItems"
        :key="item.value"
        :label="item.label"
        :path="item.value"
      >
        <n-input
          v-if="item.type === 'input'"
          v-model:value="model[item.value]"
        />
        <n-select
          v-if="item.type === 'select'"
          v-model="model[item.value]"
          :options="formOptions[item.value]"
        ></n-select>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { iLabel, iOption, iValues } from '../interface/index'
import SearchSetting from '@/components/Search/setting/index.json'

const formItems = computed<iLabel>(() => {
  return SearchSetting.label
})
const formOptions = computed(() => {
  return SearchSetting.options
})
// const formValues = computed(() => {
//   return SearchSetting.values
// })

const model = ref({})
const rules = ref({})

watchEffect(() => {
  console.log(model.value)
})
</script>

<style lang="scss" scoped></style>
