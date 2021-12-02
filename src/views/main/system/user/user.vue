<template>
  <div class="user">
    <!--    <PageSearch />-->
    <div class="search">
      <!--      <z-form-->
      <!--        :form-items="fromConfig.formItems"-->
      <!--        :labelWidth="fromConfig.labelWidth"-->
      <!--        :col-layout="fromConfig.colLayout"-->
      <!--      ></z-form>-->
      <z-form v-bind="fromConfig"></z-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ZForm from '@/base-ui/form'
import { IForm } from '@/base-ui/form/types'
// import PageSearch from '@/components/page-search'

export default defineComponent({
  name: 'user',
  components: { ZForm },
  setup() {
    const fromConfig: IForm = {
      formItems: [
        {
          type: 'input',
          label: '用户名',
          rules: [],
          placeholder: '请输入用户名'
        },
        {
          type: 'password',
          label: '密码',
          rules: [],
          placeholder: '请输入密码'
        },
        {
          type: 'select',
          label: '喜欢的',
          rules: [],
          placeholder: '请选择',
          options: [
            {
              label: '篮球',
              value: 'basket'
            },
            {
              label: '足球',
              value: 'foot'
            }
          ]
        },
        {
          type: 'datepicker',
          label: '创建时间',
          rules: [],
          otherOptions: {
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间',
            type: 'daterange'
          }
        }
      ],
      labelWidth: '120px',
      colLayout: {
        span: 8
      }
    }

    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData,
      fromConfig
    }
  }
})
</script>

<style scoped>
.zz-form {
  padding: 20px;
}
</style>
