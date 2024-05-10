<template>
  <div
    class="component-hitokoto flex flex-col justify-between w-full h-full rounded-lg bg-white py-2 px-4"
  >
    <h2>
      {{ hitokoto?.hitokoto }}
    </h2>
    <span class="text-end">
      {{ hitokoto?.from }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { getHitokoto } from '@/api/url'
import { onMounted, computed, ref } from 'vue'
import { iHitokotoP, iHitokoto } from '@/api/interface'

const params = computed<iHitokotoP>(() => {
  return {
    c: 'i',
  }
})
const hitokoto = ref<iHitokoto | null>(null)
onMounted(() => {
  getHitokoto(params.value).then((res: iHitokoto) => {
    hitokoto.value = res
  })
})
</script>

<style lang="scss" scoped>
@import url('./index.scss');

.component-hitokoto {
  & * {
    font-family: 'Slideqiuhong';
  }

  background: url('@/assets/images/gradients/63.jpg') no-repeat;
  background-size: cover;
}
</style>
