import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrashView from '../views/TrashView.vue'
import Signin from '../views/SignInView.vue'
import SignUp from '../components/SIgnUp.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/trash',
    name: 'trash',
    component : TrashView
     

},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component : Signin
  },
  {
    path: '/signup',
    name: 'SignUp',
    component : SignUp
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
