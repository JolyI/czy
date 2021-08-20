import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../Layout/index.vue'

/* Layout */

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [
    {
      path: 'dashboard',
      component: () =>
        import('@/views/dashboard/index'),
      name: 'Dashboard',
      hidden: false,
      meta: {
        title: '首页',
        icon: 'dashboard'
      }
    },
    {
      path: 'grgzt',
      component: () =>
        import('@/views/grgzt/index'),
      name: 'Grgzt',
      hidden: false,
      meta: { title: '个人工作台', icon: 'grgzt' }
    },
    {
      path: 'fybx',
      component: () =>
        import('@/views/fybx/index'),
      name: 'Fybx',
      hidden: false,
      meta: { title: '费用报销', icon: 'fybx' }
    },

    {
      path: 'ysyf',
      component: () =>
        import('@/views/ysyf/index'),
      name: 'Dashboard',
      hidden: false,
      meta: { title: '应收应付', icon: 'ysyf' }
    },
    {
      path: 'dycyfw',
      component: () =>
        import('@/views/dycyfw/index'),
      name: 'Dycyfw',
      hidden: false,
      meta: { title: '多元产业服务', icon: 'dycyfw' }
    },
    {
      path: 'gchtgl',
      component: () =>
        import('@/views/gchtgl/index'),
      name: 'Gchtgl',
      hidden: false,
      meta: { title: '工程合同管理', icon: 'gchtgl' }
    },
    {
      path: 'zjsf',
      component: () =>
        import('@/views/zjsf/index'),
      name: 'Zjsf',
      hidden: false,
      meta: { title: '资金收付', icon: 'zjsf' }
    },
    {
      path: 'qtxt',
      component: () =>
        import('@/views/qtxt/index'),
      name: 'Qtxt',
      hidden: false,
      meta: { title: '其他系统', icon: 'qtxt' }
    },
    {
      path: 'cygn',
      component: () =>
        import('@/views/cygn/index'),
      name: 'Cygn',
      hidden: false,
      meta: { title: '常用功能', icon: 'cygn' }
    },
    {
      path: 'bzzx',
      component: () =>
        import('@/views/bzzx/index'),
      name: 'Bzzx',
      hidden: false,
      meta: { title: '帮助中心', icon: 'bzzx' }
    }
  ]
}]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [...constantRoutes]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    // base: '/',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
