<template>
  <div class="component-date-time flex flex-col justify-center">
    <n-gradient-text class="gradient-text font-bold text-7xl md:text-7xl lg:text-8xl">
      {{ curTime }}
    </n-gradient-text>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { onUnmounted, ref } from 'vue'

const curTime = ref<string>(dayjs().format('HH:mm'))

const timer = setInterval(() => {
  curTime.value = dayjs().format('HH:mm')
}, 500)

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.component-date-time {
  .gradient-text {
    background-image: linear-gradient(to right, #868f96 0%, #596164 100%);

    // background-image: linear-gradient(to right, #434343 0%, black 100%);

    // background: #232526; /* fallback for old browsers */
    // background: -webkit-linear-gradient(
    //   to right,
    //   #414345,
    //   #232526
    // ); /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(
    //   to right,
    //   #414345,
    //   #232526
    // ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    //  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
    //     background-blend-mode: normal, color-burn;

    -webkit-background-clip: text; /*将设置的背景颜色限制在文字中*/
    -webkit-text-fill-color: transparent; /*给文字设置成透明*/
  }
}
</style>
