<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

import { rules } from '../config/account-config'
import cache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const account = reactive({
      name: cache.getCache('name') ?? '',
      password: cache.getCache('password') ?? ''
    })

    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            cache.setCache('name', account.name)
            cache.setCache('password', account.password)
          } else {
            cache.deleteCache('name')
            cache.deleteCache('password')
          }
          // console.log('真正执行登录逻辑')

          // 2.开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
