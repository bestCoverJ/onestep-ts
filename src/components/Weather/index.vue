<template>
  <div class="component-weather">
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
onMounted(() => {
  getLocation()
})
</script>

<style lang="scss" scoped>
.component-weather {
}
</style>
