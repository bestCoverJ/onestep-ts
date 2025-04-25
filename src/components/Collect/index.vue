<template>
  <div
    class="component-collect bg-black/30 hover:bg-black/40 transition-colors duration-200"
    grid
    grid-cols-3
    grid-rows-3
    box-border
    w-full
    h-full
    p-4
    backdrop-blur-xl
    rounded-lg
    @click="onOpenCollect"
  >
    <div></div>
    <n-modal v-model:show="isOpen">
      <n-card style="width: 600px" :bordered="false" size="huge">
        <n-tabs type="line" animated>
          <n-tab-pane name="list" tab="链接列表">
            <div class="grid grid-cols-3 gap-4 p-4">
              <div
                v-for="(link, index) in links"
                :key="index"
                class="flex flex-col items-center cursor-pointer hover:bg-gray-100/20 rounded p-2 transition-colors duration-200"
                @click="onOpenWindow(link)"
              >
                <n-icon size="24">
                  <component :is="link.icon || Link" />
                </n-icon>
                <span class="mt-2 text-sm">{{ link.name }}</span>
              </div>
            </div>
          </n-tab-pane>
          <n-tab-pane name="add" tab="添加链接">
            <n-form :model="formValue">
              <n-form-item label="链接名称" path="name">
                <n-input
                  v-model:value="formValue.name"
                  placeholder="输入链接名称"
                />
              </n-form-item>
              <n-form-item label="链接URL" path="url">
                <n-input
                  v-model:value="formValue.url"
                  placeholder="输入链接URL"
                />
              </n-form-item>
              <n-form-item label="图标" path="icon">
                <n-input
                  v-model:value="formValue.icon"
                  placeholder="输入图标名称或URL"
                />
              </n-form-item>
              <n-button @click="addLink">添加</n-button>
            </n-form>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Link } from 'lucide-vue-next'

type iLink = {
  name: string
  url: string
  icon?: string
}

const isOpen = ref(false)
const formValue = ref({
  name: '',
  url: '',
  icon: '',
})
const links = ref<Array<iLink>>(JSON.parse(localStorage.getItem('links') || "[]") || [])

const onOpenCollect = () => {
  isOpen.value = true
}

const addLink = () => {
  if (formValue.value.name && formValue.value.url) {
    links.value.push({
      name: formValue.value.name,
      url: formValue.value.url,
      icon: formValue.value.icon,
    })
    formValue.value = { name: '', url: '', icon: '' }
    localStorage.setItem('links', JSON.stringify(links.value))
  }
}

const onOpenWindow = (link: iLink) => {
  window.open(link.url, '_blank')
}
</script>

<style lang="scss" scoped>
.component-collect {
}
</style>
