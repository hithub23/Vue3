import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/pages/Main')
  },
  {
    path: '/posts',
    component: () => import('@/pages/PostPage')
  },
  {
    path: '/posts/:id',
    component:  () => import('@/pages/PostIdPage')
  },
  {
    path: '/store',
    component:  () => import('@/pages/PostPageWithStore')
  },
  {
    path: '/composition',
    component: () => import('@/pages/PostPageCompositionApi')
  },
  {
    path: '/other',
    component: () => import('@/pages/otherPage')
  },
  {
    path: '/flexBox',
    component: () => import('@/assets/FlexBox')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;