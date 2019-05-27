import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  { path: '/app', component: import('pages/App.vue') },
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

export default router