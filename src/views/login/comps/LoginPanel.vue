<template>
  <h1>后台管理系统</h1>
  <el-tabs type="border-card" class="login-tabs" stretch>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <User />
          </el-icon>
          <span>{{ '账号登陆' }}</span>
        </span>
      </template>
      <LoginAccount ref="accountRef" />
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon>
            <User />
          </el-icon>
          <span>{{ '手机号登陆' }}</span>
        </span>
      </template>
      <LoginPhone />
    </el-tab-pane>
    <el-button type="primary" @click="loginButtonClick">登陆</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref, reactive } from '@vue/reactivity'
import { onMounted } from 'vue'
import LoginPhone from './LoginPhone.vue'
import LoginAccount from './LoginAccount.vue'

const accountRef = ref<InstanceType<typeof LoginAccount>>()
const loginButtonClick = () => {
  accountRef.value?.submitForm()
}

const resetForm = () => {
  accountRef.value?.resetForm()
}
</script>

<style scoped lang="scss">
.login-tabs {
  width: 320px;
}
.el-icon {
  top: 2px;
  right: 5px;
}
</style>
