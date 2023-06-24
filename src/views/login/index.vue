<template>
  <div class="login_container">
    <el-row>
      <!-- 24分栏 -->
      <el-col :span="0" :lg="12"></el-col>
      <el-col :span="12" :lg="12" class="right_col">
        <el-form class="login_form" label-width="100px" size="large">
          <h1>欢迎来到Vue+Ts项目</h1>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名" :prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" :prefix-icon="Lock" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import {User, Lock} from "@element-plus/icons-vue"
  import {reactive} from "vue";
  let loginForm = reactive({
    username: 'admin',
    password: 'admin'
  })
</script>

<style lang="scss" scoped>
  .login_container {
    height: 100vh;
    background: url("@/assets/images/background.jpg");
    .right_col {
      margin: 0 auto;
      .login_form {
        width: 40vw;
        min-width: 500px;
        margin-top: 30vh;
        background: url("@/assets/images/login_form.png");
        padding: 40px;
        .el-form-item__label {
          color: white;
          font-size: 30px;
        }
        h1 {
          padding: 20px 0;
          font-size: 40px;
          color: white;
        }
      }
    }
  }
</style>