import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Hello from '@/components/Hello'
import Protected from '@/components/Protected'
import Message from '@/components/Message'
import Signin from '@/components/Signin'
import Signout from '@/components/Signout'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/Signout',
      name: 'signout',
      component: Signout,
    },
    {
      path: '/Signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/Hello',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/Message',
      name: 'message',
      component: Message,
    },
    {
      path: '/Protected',
      name: 'protected',
      component: Protected,
    }
  ]
})


export default router;
