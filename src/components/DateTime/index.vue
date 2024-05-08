<template>
  <div class="component-date-time">
    <n-gradient-text class="gradient-text font-bold" :size="112">
      {{ curTime }}
    </n-gradient-text>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'

const curTime = ref(dayjs().format('HH:mm'))
</script>

<style lang="scss" scoped>
.component-date-time {
  .gradient-text {
    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
    background-blend-mode: normal, color-burn;
    -webkit-background-clip: text; /*将设置的背景颜色限制在文字中*/
    -webkit-text-fill-color: transparent; /*给文字设置成透明*/
  }
}
</style>
