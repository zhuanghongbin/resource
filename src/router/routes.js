/**
 * 如果是菜单级别的话，并且有多个子菜单，那么一个主菜单作为一个模块（单独起一个路由模块文件，例如：
 *  - 账户中心
 *    - 个人账号
 *    - 企业账号
 * 如果是单个页面，并且是同步路由，那么可以写在静态路由配置中
 */
/* Layout */
import Layout from '@/views/layout/Layout'

const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/Index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/Index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/Authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  }
  // {
  //   path: '/',
  //   redirect: '/index'
  // }, {
  //   path: '/index',
  //   name: 'HelloWorld',
  //   component: () => import('@/views/HelloWorld')
  // }, {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('@/views/About')
  // }
]

export default routes
