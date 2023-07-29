import { createRouter, createWebHistory } from 'vue-router'
import Setting from '../views/Setting.vue'
import Nube from '../views/Nube.vue'
import Login from '../views/Login.vue'
import CreateUser from '../views/CreateUser.vue'
import Chat from '../views/Chat.vue'
import Principal from '../views/Principal.vue'

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/Nube',
    name: 'Nube',
    component: Nube
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/CreateUser',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: Setting
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
