<template>
  <div>
    <el-form
      ref="loginFormRef"
      :model="loginFormValue"
      :rules="loginFormRules"
      label-width="70px"
      class="demo-loginForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="loginFormValue.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginFormValue.password" />
      </el-form-item>
    </el-form>
    <el-checkbox
      label="记住密码"
      v-model="loginFormValue.isRememberPassword"
      size="large"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from '@vue/reactivity'
import type { FormRules, ElForm } from 'element-plus'
import localCache from '@/utils/localCache'
import store from '@/store'

const formSize = ref('default')
const loginFormRef = ref<InstanceType<typeof ElForm>>()

const loginFormValue = reactive({
  name: localCache.get('name') ?? '',
  password: localCache.get('password') ?? '',
  isRememberPassword: localCache.get('isRemember') ?? false
})
const loginTabArr = reactive([
  {
    title: '账号',
    labelName: '账号'
  },
  { title: '手机号', labelName: '手机号' }
])
const loginFormRules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' }
  ]
})

const submitForm = async () => {
  if (!loginFormRef) return
  await loginFormRef.value?.validate((valid, fields) => {
    if (valid) {
      const isRemember = loginFormValue.isRememberPassword
      if (isRemember) {
        localCache.set('isRemember', true)
        localCache.set('name', loginFormValue.name)
        localCache.set('password', loginFormValue.password)
      } else {
        localCache.remove('isRemember')
        localCache.remove('name')
        localCache.remove('password')
      }
      store.dispatch('login/loginAction', { ...loginFormValue })
    } else {
      return fields
    }
  })
}

const resetForm = async () => {
  if (!loginFormRef) return
  loginFormRef.value?.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`
}))
defineExpose({ submitForm, resetForm, loginFormValue })
</script>

<style scoped></style>
