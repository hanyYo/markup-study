import Vue from 'vue'
import VueRouter from 'vue-router'
import markup from '@/router/markup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'markupIndex',
    component: () => import('@/views/markupIndex'),
    children: markup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
