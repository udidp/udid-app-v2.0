import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'BasicLayout',
    redirect: '/domains',
    component: () => import('@/layouts/BasicLayout.vue'),
    meta: {
      keepAlive: true // 需要缓存
    },
    children: [
      {
        path: '/domains',
        name: 'Domains',
        component: () => import('@/views/domains/Domains.vue'),
        meta: {
          keepAlive: true // 需要缓存
        }
      },
      {
        path: '/account',
        name: 'Account',
        component: () => import('@/views/account/Account.vue')
      },
      {
        path: '/favourites',
        name: 'Favourites',
        component: () => import('@/views/favourites/Favourites.vue')
      }
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

router.beforeEach((to, from, next) => {
  if (to.path === 'domains') {
    from.meta.keepAlive = true
  } else {
    from.meta.keepAlive = false
  }
  next()
})

export default router
