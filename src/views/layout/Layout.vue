<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  header {
    background: #3e4558;
    .collapse-icon {
      height: 60px;
      min-width: 960px;
    }
  }
  div.layout-aside {
    display: flex;
    flex: 1;
    top: 60px;
    overflow: hidden;
    > aside {
      width: 0;
    }
    > section {
      flex: 1;
      padding: 25px 25px 0 25px;
    }
    .aside-show {
      width: 200px;
      background: #3e4558;
    }
  }
}
.logo {
  height: 60px;
  overflow: hidden;
  border-color: rgba(238, 241, 146, 0.3);
  border-right-width: 1px;
  border-right-style: solid;
  img {
    display: inline-block;
    // width: 201px;
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
.content-info {
  text-align: right;
  .user-info{
    padding-right: 35px;
    text-align: right;
  }
  .userinfo-inner {
    cursor: pointer;
    color: #fff;
    line-height: 60px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin: 10px 0px 10px 10px;
      float: right;
    }
  }
}
.app-el-menu {
  width: 200px;
}
.tools {
  padding: 0 18px;
  font-size: 24px;
  height: 60px;
  line-height: 60px;
  color: white;
  cursor: pointer;
}
.logo-collapse-width {
  width: 66px;
  img {
    width: 0;
  }
}
.aside-collapse-width {
  width: 0 !important;
  .app-el-menu {
    width: 0;
  }
}
.aside-collapse-width.aside-show {
  width: 65px !important;
  .app-el-menu {
    width: 65px;
  }
}
.app-main {
  overflow-y: scroll;
  background-color: #f3f7fa;
}
.collapse-btn {
  // min-width: 60px;
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
  <div class="layout">
    <header>
      <el-row>
        <el-col class="logo hidden-md-and-down" :class="{'logo-collapse-width': isCollapse}" :xs="24" :sm="24" :md="4" :lg="4">
          <img :src="require('@/assets/images/admin/logo.png')" alt="">
          <p class="logo-text">公司口号公司口号公司口号</p>
        </el-col>

        <el-col class="collapse-btn" :xs="2" :sm="2" :md="2" :lg="2">
          <div class="tools" @click.prevent="collapse">
            <i class="el-icon-tickets"></i>
          </div>
        </el-col>

        <el-col class="content-info" :xs="22" :sm="22" :md="22" :lg="18">
          <el-row>
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
          </el-row>
        </el-col>
      </el-row>
    </header>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <!-- <navbar/> -->
      <!-- <tags-view/> -->
      <app-main/>
    </div>
    <!-- <div class="layout-aside">
      <aside :class="{'aside-collapse-width': isCollapse, 'aside-show': isSubMenu}">
        <el-row class="aside">
          <el-col>
            <el-menu
              :default-active="slideIndex"
              @select="handleSelect2"
              @open="handleOpen"
              @close="handleClose"
              :collapse="isCollapse"
              class="app-el-menu"
              background-color="#3e4558"
              text-color="#fff"
              active-text-color="#ffd04b"
              :default-openeds="defaultOpends"
              :collapse-transition="false"
            >
              <el-submenu :index="index + ''" v-for="(item, index) in slideList.slideMenu" :key="index">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>{{item.name}}</span>
                </template>
                <router-link :to="inItem.path" v-for="(inItem, inIndex) in item.childNode" :key="inIndex">
                  <el-menu-item :index="index + '-'+ inIndex">{{inItem.name}}</el-menu-item>
                </router-link>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </aside>
      <section class="app-main">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </section>
    </div> -->
  </div>
</template>

<script>
// import { storage } from '@/utils/common'
import axios from 'axios'
// import { Navbar, Sidebar, AppMain, TagsView } from './components'
import { Sidebar, AppMain, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    // Navbar,
    Sidebar,
    AppMain,
    TagsView
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
      userName: '智能工具智能工具智能工具',
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
    setIndex (path) {
      let routePath = path.split('?')[0]
      let firstPath = routePath.match(/^\/\w*/gi)[0]
      if (routePath === '/') {
        this.headerIndex = '0'
        this.slideList = this.menus[0]
      } else {
        this.menus.forEach((item, index) => {
          if (item.path === firstPath) {
            this.headerIndex = index + ''
            this.slideList = this.menus[index]
          }
        })
        this.menus[this.headerIndex].slideMenu.forEach((item, index) => {
          item.childNode.forEach((item2, index2) => {
            if (routePath.indexOf(item2.path) !== -1 && item.path !== '/') {
              this.slideIndex = item2.index
            }
          })
        })
      }
      if (this.slideList.slideMenu && this.slideList.slideMenu.length) {
        this.isSubMenu = true
      } else {
        this.isSubMenu = false
      }
      // storage.setSession('index', this.headerIndex)
      // storage.setSession('slide_index', this.slideIndex)
    },
    getMenus () {
      const self = this
      axios.get('/static/user.json').then(function (data) {
        // 处理返回回来的数据为其子菜单添加索引
        data.data.forEach((item, index) => {
          item.index = index + ''
          if (item.slideMenu && item.slideMenu.length) {
            item.slideMenu.forEach((item2, index2) => {
              item2.childNode.forEach((item3, index3) => {
                item3.index = index2 + '-' + index3
              })
            })
          }
        })
        self.menus = data.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    handleSelect (key, keyPath) {
      this.slideIndex = '0-0'
    },
    handleSelect2 (key, keyPath) {},
    handleOpen (key, keyPath) {},
    handleClose (key, keyPath) {},
    loginout () {
      this.$confirm('确认退出吗?', '提示', {}).then(() => {
        // storage.removeSession('index')
        // storage.removeSession('slide_index')
        location.href = './index.html'
      })
    },
    // 折叠导航栏
    collapse () {
      this.collapsed = !this.collapsed
      this.isCollapse = !this.isCollapse
    }
  },
  watch: {
    '$route.path' (newval) {
      this.setIndex(newval)
    }
  },
  mounted () {
    this.getMenus()
    this.initLogin()
  }
}
</script>
