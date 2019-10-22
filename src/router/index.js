import Vue from 'vue'
import VueRouter from 'vue-router'
import Myindex from '../components/Myindex'
import In from "../components/In"
import last from "../components/last"
import Over from "../components/Over";


Vue.use(VueRouter)

const routes =
    [
  {
    path:'/',
    name:'myindex',
    component: Myindex
  },
  {
    path:'/In',
    name:'In',
    component: In
  },
      {
        path:'/last',
        name:'last',
        component: last
      },
      {
        path:'/Over',
        name:'Over',
        component: Over
      }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
