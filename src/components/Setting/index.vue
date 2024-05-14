<template>
  <div class="component-setting">
    <n-button quaternary circle @click="onClickSetting">
      <template #icon>
        <n-icon text-gray-600>
          <SettingsFilled></SettingsFilled>
        </n-icon>
      </template>
    </n-button>
    <n-modal v-model:show="showModal">
      <n-card
        title="设置"
        style="width: 600px"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
        header-style="padding: 16px;"
        content-style="padding: 8px;"
      >
        <n-tabs type="line" placement="left" animated>
          <n-tab-pane
            v-for="item in settingList"
            :key="item.tab"
            :name="item.name"
            :tab="item.tab"
          >
            <component :is="item.component" />
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { SettingsFilled } from '@vicons/material'

import Setting from './components/SettingItem.vue'

const settingList = shallowRef([
  {
    name: 'Setting',
    tab: '系统设置',
    component: Setting,
  },
  {
    name: 'DateTime',
    tab: '搜索时钟',
  },
  {
    name: 'Hitokoto',
    tab: '每日一言',
  },
  {
    name: 'Weather2',
    tab: '天气 Lite',
  },
  {
    name: 'Collect',
    tab: '收藏夹 Plus',
  },
])

const showModal = ref<boolean>(false)
const onClickSetting = () => {
  showModal.value = true
}
</script>
<style lang="scss" scoped>
.component-setting {
}
</style>
<style lang="scss">
.n-modal-mask {
  backdrop-filter: blur(16px);
}
</style>
