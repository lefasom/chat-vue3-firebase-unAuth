import { createRouter, createWebHistory } from 'vue-router'
import Nube from '../views/Nube.vue'
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
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
