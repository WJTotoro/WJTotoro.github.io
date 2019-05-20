import Vue from 'vue'
import Router from 'vue-router'
import gameDivision from '@/components/gameDivision'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameDivision',
      component: gameDivision
    }
  ]
})
