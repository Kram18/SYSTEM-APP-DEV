import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import 'vuetify/dist/vuetify.min.css';


const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
