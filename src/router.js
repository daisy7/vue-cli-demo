import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      // component: () => import('./views/Index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: { auth: true }
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import('./components/Table.vue'),
      meta: { auth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/Register.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (store.getters.userInfo) {
      next()
    } else if (to.path !== '/') {
      next({ path: '/login' })
      console.log('检测到您还未登录,请登录后操作！')
    }
  } else {
    next()
  }
})

export default router