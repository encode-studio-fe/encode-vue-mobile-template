<script setup lang="ts">
import { queryProse } from '@/api'

const messages = ref<string>('')

function pull() {
  queryProse().then((res) => {
    messages.value = res.prose
  })
}

const reset = () => messages.value = ''

const onClickLeft = () => history.back()
</script>

<template>
  <VanNavBar title="Mock数据" left-arrow fixed @click-left="onClickLeft" />

  <div class="container">
    <div class="data-label">
      来自异步请求的数据
    </div>
    <div class="data-content">
      <div v-if="messages">
        {{ messages }}
      </div>
      <VanEmpty v-else description="暂无数据" />
    </div>

    <VanButton round block type="primary" @click="pull">
      请求
    </VanButton>
    <VanButton round block type="default" @click="reset">
      清空
    </VanButton>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 74px 30px;

  .data-label {
    color: #969799;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  .data-content {
    height: 300px;
    padding: 20px;
    line-height: 30px;
    background: #fff;
    margin-top: 20px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

[data-theme='dark'] {
  .data-content {
    background: #222;
    color: #fff;
  }
}

.van-button--block {
  margin-top: 15px;
}
</style>
