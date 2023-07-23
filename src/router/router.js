import { createRouter, createWebHistory } from 'vue-router'
import Video from '../views/Video.vue'
import Chat from '../views/Chat.vue'
import Principal from '../views/Principal.vue'

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/Video',
    name: 'Video',
    component: Video
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
