import Vue from 'vue'
import Router from 'vue-router'
import Qualification from '@/components/Qualification'
import MakeAccount from '@/components/MakeAccount'
import Business from '@/components/Business'
import Ssch from '@/components/Ssch'
import CommonPage from '@/components/CommonPage'
import Gszc from '@/components/Gszc'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'CommonPage',
      redirect: '/gszc',
      component: CommonPage,
      children: [
        {
          path: '/',
          name: 'gszc',
          component: Gszc
        },
        {
          path: '/zzbl',
          name: 'Qualification',
          component: Qualification
        },
        {
          path: '/dljz',
          name: 'MakeAccount',
          component: MakeAccount
        },
        {
          path: '/gszc',
          name: 'Business',
          component: Business
        },
        {
          path: '/Ssch',
          name: 'Ssch',
          component: Ssch
        },
      ]
    },


  ]
})
