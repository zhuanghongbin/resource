<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="top">
      <div class="title-container">
        <h3 class="title">欢迎登录商户管理系统</h3>
      </div>

      <el-form-item prop="username">
        <span class="iconfont-container">
          <i class="iconfont icon-message_fill"></i>
        </span>
        <el-input
          v-model="loginForm.username"
          :placeholder="'用户名'"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="iconfont-container">
          <i class="iconfont icon-message_fill"></i>
        </span>
        <el-input
          :type="passwordType"
          v-model="loginForm.password"
          :placeholder="'登录密码'"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <i class="iconfont icon-message_fill"></i>
        </span>
      </el-form-item>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登 录</el-button>
    </el-form>
  </div>
</template>

<script>
import {phone, password} from '@/utils/validate'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '1111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: phone }],
        password: [{ required: true, trigger: 'blur', validator: password }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }

  },
  created () {
  },
  destroyed () {
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg:#283443;
  $cursor: #fff;

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: #fff;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: #a8a8a8;
        height: 47px;
        // caret-color: $cursor;
        // &:-webkit-autofill {
        //   -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        //   -webkit-text-fill-color: $cursor !important;
        // }
      }
    }
    .el-form-item {
      border: 1px solid #cccccc;
      background: #fff;
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  background: url('/static/images/login-bg.png') no-repeat left top;
  background-size: cover;
  height: 100%;
  min-height: 500px;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 385px;
    max-width: 100%;
    padding: 70px 40px 50px 40px;
    margin: 160px auto 0;
    background-color: #f9fbfa;
  }
  .iconfont-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 23px;
      color: #4a4a4a;
      margin: 0px auto 30px auto;
      text-align: center;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
