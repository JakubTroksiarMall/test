import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/some',
      name: 'My',
      component: My
    }
  ]
})
