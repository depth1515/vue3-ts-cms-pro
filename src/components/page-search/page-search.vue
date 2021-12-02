<template>
  <div class="page-search">
    <div class="zz-form">
      <el-form ref="ruleForm" label-width="120">
        <el-row>
          <el-col :span="8">
            <el-form-item label="1232131">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="密码">
              <el-input show-password></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="爱好">
              <el-select>
                <el-option>篮球</el-option>
                <el-option>足球</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-select>
                <el-option>篮球</el-option>
                <el-option>足球</el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'page-search',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
