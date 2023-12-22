<script setup lang="ts">
import { useStore } from '@/stores'
import { localStorage } from '@/utils/local-storage'

const store = useStore()
const themeStore = localStorage.get('theme')
const checked = ref<boolean>(themeStore === 'dark')

watch(checked, (val) => {
  if (val) {
    store.mode = 'dark'
    localStorage.set('theme', 'dark')
  }
  else {
    store.mode = 'light'
    localStorage.set('theme', 'light')
  }
})
</script>

<template>
  <div class="container">
    <VanCellGroup title="印客学院 Vue 移动端项目模板" inset>
      <VanCell center title="🌗 暗黑模式">
        <template #right-icon>
          <VanSwitch v-model="checked" size="23px" />
        </template>
      </VanCell>

      <VanCell title="Mock数据" to="mock" is-link />
      <VanCell title="Echarts" to="charts" is-link />
    </VanCellGroup>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  position: relative;

  .logo {
    width: 150px;
    height: 150px;
    background-image: url('@/assets/logo.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }

  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }
}
</style>
