import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.component'
import BookPage from '@/components/BookPage/BookPage.component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/book/:slug',
      name: 'BookPage',
      component: BookPage
    }
  ]
})
