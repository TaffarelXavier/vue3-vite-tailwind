import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Pedidos from './views/Pedidos.vue'
import Users from './views/Users.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import('@/views/Dashboard/Index.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component:  () => import('@/views/ParentComponent.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/users/:id?',
    name: 'Users',
    component: Users,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos,
    meta: {
      requiresAuth: true,
    }
  },
  {
    'path': '/protected',
    name: "Protected",
    component: () => import('@/views/Protected.vue'),
    meta: {
      requiresAuth: true,
      age: 29,
      roles: ['admin', 'editor'],
      permissions: ['create', 'edit']
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Auth/Register.vue')
  },
  {
    path: '/posts/:id',
    name: 'Posts',
    component: () => import('@/views/Posts.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/invoices',
    name: 'Invoices',
    component: () => import('@/views/Invoices.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/telefonar',
    name: 'telefonar',
    component: () => import('@/views/Telefonar/Index.vue'),
    meta: {
      requiresAuth: true,
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return savedPosition || new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({ top: 50, behavior: 'smooth' })
  //     }, 300)
  //   })
  // }
})

router.beforeEach((to, from) => {

  if ((to.meta.requiresAuth && !window.localStorage.getItem('user'))) {
    return { name: 'Login' }
  }

  if(to.name == 'Login' && window.localStorage.getItem('user')){
    return { name: 'Home' }
  }
});


export default router;
