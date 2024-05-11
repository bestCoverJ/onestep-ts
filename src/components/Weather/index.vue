<template>
  <div
    flex
    flex-col
    justify-between
    box-border
    w-full
    rounded
    px-4
    py-8
    bg-white
    text-black
    class="component-weather"
    :class="status"
  >
    <div flex flex-col text-xl lg:text-2xl>
      <span>武汉</span>
      <div class="text-4xl md:text-5xl lg:text-6xl">21°</div>
    </div>

    <div flex flex-col text-xl lg:text-2xl>
      <img class="w-8 -ml-1" src="./assets/images/sunny.png" />
      <span>晴</span>
      <span>17° - 25°</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useMessage } from 'naive-ui'
const NMessage = useMessage()

const lat = ref<number>(0)
const long = ref<number>(0)
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        lat.value = position.coords.latitude
        long.value = position.coords.longitude
        console.log(`当前位置信息${lat.value}, ${long.value}`)
      },
      () => {
        NMessage.warning('获取位置信息失败')
      },
    )
  }
}

const status = ref('sunny')

onMounted(() => {
  getLocation()
})
</script>

<style lang="scss" scoped>
.component-weather {
  @import url('./assets/styles/index.scss');

  &.sunny {
    background-image: linear-gradient(0deg, #a1c4fd 0%, #c2e9fb 100%);
  }
  &.partly-cloudy {
    background-color: #dcd9d4;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      radial-gradient(
        at 50% 0%,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(0, 0, 0, 0.5) 50%
      );
    background-blend-mode: soft-light, screen;
  }
  &.snowy {
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  }
  &.rainy {
    background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
  }
  &.rainthunder {
    background-image: linear-gradient(
      to top,
      #a7a6cb 0%,
      #8989ba 52%,
      #8989ba 100%
    );
  }
}
</style>
