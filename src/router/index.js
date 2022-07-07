import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'BasicLayout',
    redirect: '',
    component: () => import('@/layouts/BasicLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: '/domains',
        name: 'Domains',
        component: () => import('@/views/domains/Domains.vue')
      }
      // {
      //   path: '/chain',
      //   name: 'Chain',
      //   component: () => import('@/views/chain/Chain.vue')
      // },
      // {
      //   path: '/topdomain',
      //   name: 'Topdomain',
      //   component: () => import('@/views/topdomain/Topdomain.vue')
      // },
      // {
      //   path: '/ecosystem',
      //   name: 'Ecosystem',
      //   component: () => import('@/views/ecosystem/Ecosystem.vue')
      // },
      // {
      //   path: '/developer',
      //   name: 'Developer',
      //   component: () => import('@/views/developer/Developer.vue')
      // },
      // {
      //   path: 'nft',
      //   name: 'Nft',
      //   component: () => import('@/views/nft/Nft.vue')
      // }
      // {
      //   path: '/integrityProtocol',
      //   component: () => import('@/views/home/protocol/Protocol.vue')
      // },
      // {
      //   path: '/community',
      //   component: () => import('@/views/home/community/Community.vue')
      // },
      // {
      //   path: '/trade',
      //   component: () => import('@/views/home/trade/Trade.vue')
      // },
      // {
      //   path: '/document',
      //   component: () => import('@/views/home/document/Document.vue')
      // },
      // {
      //   path: '/administer',
      //   component: () => import('@/views/home/administer/Administer.vue')
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
