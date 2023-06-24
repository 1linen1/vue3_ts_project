<template>
  <el-button type="primary" @click="login">点我发送登录请求</el-button>
  <el-button type="primary" @click="getUserInfo">点我发送获取用户信息请求</el-button>
</template>

<script setup lang="ts">
  import {reqLogin, reqUserInfo} from "@/api/user";

  const login = () => {
    reqLogin({
      username: "admin",
      password: "admin"
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  const getUserInfo = () => {
    reqUserInfo().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
</script>

<style lang="less" scoped>

</style>