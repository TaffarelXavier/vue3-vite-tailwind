import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import('@/views/DashboardIndex.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/telefonar',
    name: 'telefonar',
    component: () => import('@/views/Telefonar.vue'),
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/users/:id/atribuir-ligacoes',
    name: 'atribuicoes',
    component: () => import('@/views/SiligAtribuicoes.vue'),
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/users/:id/edit',
    name: 'usuarios_clientes',
    component: () => import('@/views/SiligUsuariosClientes.vue'),
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/settings/options',
    name: 'options',
    component: () => import('@/views/SiligOptions.vue'),
    meta: {
      requiresAuth: false,
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {

  if ((to.meta.requiresAuth && !window.localStorage.getItem('data'))) {
    return { name: 'Login' }
  }

  if(to.name == 'Login' && window.localStorage.getItem('data')){
    return { name: 'Telefonar' }
  }
});


export default router;
