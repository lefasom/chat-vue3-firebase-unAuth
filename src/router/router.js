import { createRouter, createWebHistory } from 'vue-router'
import PerfilConfig from '../views/PerfilConfig.vue'
import CreateChat from '../views/CreateChat.vue'
import Descubre from '../views/Descubre.vue'
import Amigos from '../views/Amigos.vue'
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
    path: '/Descubre',
    name: 'Descubre',
    component: Descubre
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
    path: '/CreateChat',
    name: 'CreateChat',
    component: CreateChat
  },
  {
    path: '/CreateUser',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/PerfilConfig',
    name: 'PerfilConfig',
    component: PerfilConfig
  },
  {
    path: '/Amigos',
    name: 'Amigos',
    component: Amigos
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
