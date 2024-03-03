import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/admin/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/admin/DashBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/ProductsView.vue')
      },
      {
        path: 'order',
        component: () => import('../views/admin/OrdersView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
