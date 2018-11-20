<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    header {
      background: #3e4558;
      position: fixed;
      top: 0;
      width: 100%;
      left: 0;
      z-index: 99;
    }
    footer{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background: #3e4558;
      left: 180px;
      transition: left .28s;
      z-index: 99;
    }
  }
  .main-nav{
    height: 60px;
    a{
      display: inline-block;
      margin: 0 30px;
      color: #fff;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  .item{
    margin: 0 30px;
    a{
      margin: 0px;
    }
  }
  // 隐藏sidebar 设置left
  .hideSidebar footer{
    left: 36px !important;
  }
  .logo {
    height: 60px;
    overflow: hidden;
    line-height: 60px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;
    border-right-style: solid;
    img {
      display: inline-block;
      height: 50px;
      padding: 5px;
      margin: 0 auto;
    }
    .logo-text {
      font-size: 16px;
      display: inline-block;
      color: #fff;
    }
  }
  .main-container{
    // padding: 0 10px;
  }
  .content-info {
    text-align: right;
    .user-info{
      display: inline-block;
      line-height: 60px;
      padding-right: 35px;
      text-align: right;
      cursor: pointer;
      color: #fff;
      img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin: 10px 0px 10px 10px;
        float: right;
      }
    }
    // .userinfo-inner {
    //   color: #fff;
    //   line-height: 60px;
    //   img {
    //     width: 40px;
    //     height: 40px;
    //     border-radius: 20px;
    //     margin: 10px 0px 10px 10px;
    //     float: right;
    //   }
    // }
  }
  .app-el-menu {
    width: 200px;
  }
  .hamburger {
    padding: 0 18px;
    font-size: 24px;
    height: 60px;
    line-height: 60px;
    color: white;
    cursor: pointer;
    &.active{
      color: #409EFF;
    }
  }

  .app-main {
    overflow-y: scroll;
    background-color: #f3f7fa;
  }
  .index-li {
    padding: 0;
  }
  .index-a {
    display: inline-block;
    height: 100%;
    padding: 0 20px;
  }
</style>
<template>
  <div :class="classObj" class="layout" >
    <header>
      <div class="header-wrap">
        <el-row>
          <!-- logo -->
          <el-col class="logo hidden-md-and-down"  :xs="24" :sm="24" :md="4" :lg="4">
            <router-link to="/dashboard">
              <img :src="require('@/assets/images/admin/logo.png')" alt="">
              <p class="logo-text">公司口号公司口号公司口号</p>
            </router-link>
          </el-col>
          <!-- 控制sidebar -->
          <el-col class="collapse-btn" :xs="2" :sm="2" :md="2" :lg="2">
            <div class="hamburger" :class="{'active': sidebar.opened}" @click="toggleClick" >
              <i class="el-icon-tickets"></i>
            </div>
          </el-col>
          <!-- 主导航 -->
          <el-col class="content-info" :xs="22" :sm="22" :md="22" :lg="18">
            <!-- topbar 中的导航 -->
            <!-- <el-row>
              <el-col :xs="24" :sm="12" :md="16" :lg="16">
                <el-menu class="header-menu hidden-xs-only" :default-active="headerIndex" mode="horizontal" @select="handleSelect" background-color="#3e4558" text-color="#fff" active-text-color="#ffd04b">
                  <el-menu-item :index="index + ''" v-for="(item, index) in headerList" :key="index" class="index-li">
                    <router-link :to="item.path" class="index-a">
                      <i :class="item.icon"></i>{{item.name}}
                    </router-link>
                  </el-menu-item>
                </el-menu>
              </el-col>
              <el-col class="user-info" :xs="24" :sm="12" :md="8" :lg="8">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link userinfo-inner"><img :src="userPhoto"/>{{userName}}</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="loginout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row> -->
            <nav  class="main-nav">
              <span class="hidden-sm-and-down">
                <el-badge :value="200" :max="99" class="item">
                  <a href="">系统消息</a>
                  <!-- <el-button size="small">评论</el-button> -->
                </el-badge>
                <a href="">新手引导</a>
                <!-- <a href="">
                  <i class="iconfont icon-message_fill"></i>
                  商户管理员<span></span>
                </a> -->
                <a href="">余额 <span class="text-pink">55.00</span> 元</a>
                <a href="">修改密码</a>
                <a href="javascript:void(0);" @click.prevent="loginout">
                  <i class="iconfont icon-message_fill"></i>
                  退出
                </a>
              </span>
              <router-link class="user-info" to="/account/index"><img :src="userPhoto"/>{{userName}}</router-link>
              <!-- <el-dropdown trigger="click" class="user-info">
                <span class="el-dropdown-link userinfo-inner"><img :src="userPhoto"/>{{userName}}</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>我的消息</el-dropdown-item>
                  <el-dropdown-item>设置</el-dropdown-item>
                  <el-dropdown-item divided @click.native="loginout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown> -->
            </nav>
          </el-col>
        </el-row>
      </div>
    </header>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <!-- <navbar/> -->
      <!-- <tags-view/> -->
      <!-- <transition name="fade-transform" mode="out-in"> -->
      <breadcrumb class="breadcrumb-container" style="margin: 20px 20px 0;"/>
      <!-- </transition> -->
      <app-main/>
    </div>
    <footer>
      <p>@copyright</p>
    </footer>
  </div>
</template>

<script>
// import { storage } from '@/utils/common'
// import axios from 'axios'
// import { Navbar, Sidebar, AppMain, TagsView } from './components'
import { Sidebar, AppMain, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'Layout',
  components: {
    // Navbar,
    Sidebar,
    AppMain,
    TagsView,
    Breadcrumb
  },
  mixins: [ResizeMixin],
  data () {
    return {
      // headerIndex: storage.getSession('index') || '0',
      headerIndex: '0',
      // slideIndex: storage.getSession('slide_index') || '0-0',
      slideIndex: '0-0',
      menus: [],
      slideList: [],
      menuInfo: [],
      slideInfo: [],
      userName: '商户管理员: 刘先生',
      userPhoto: require('@/assets/images/admin/timg.jpg'),
      companyPhoto: require('@/assets/images/admin/timg.jpg'),
      collapsed: false,
      isCollapse: false,
      isSubMenu: false
    }
  },
  computed: {
    headerList () {
      let arr = []
      // this.menus.forEach((item, index) => {
      //   arr.push({ icon: item.icon, name: item.name, path: item.path })
      // })
      arr = [
        {
          icon: 'iconfont icon-message_fill',
          name: '首页',
          path: '/dashboard'
        },
        {
          icon: 'iconfont icon-message_fill',
          name: '订单页',
          path: '/dashboard'
        },
        {
          icon: 'iconfont icon-message_fill',
          name: '账户中心',
          path: '/dashboard'
        }
      ]
      return arr
    },
    sidebar () {
      return this.$store.state.app.sidebar
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    initLogin () {
      // this.$http({
      //   url: '/auth?func=login:checkLogin',
      //   data: {
      //     loginName: 'admin',
      //     password: '123456',
      //     userType: 'admin'
      //   }
      // }).then(res => {
      //   // console.log('登录成功')
      // }).catch(res => {
      //   console.log(res)
      // })
    },
    loginout () {
      this.$confirm('确认退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        // type: 'warning'
      }).then(() => {
        // storage.removeSession('index')
        // storage.removeSession('slide_index')
        this.$router.replace('login')
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '已取消删除'
        // })
      })
    },
    // 折叠导航栏
    toggleClick () {
      this.$store.dispatch('toggleSideBar')
    }
  },
  watch: {
    // '$route.path' (newval) {
    //   this.setIndex(newval)
    // }
  },
  mounted () {
    this.initLogin()
  }
}
</script>
