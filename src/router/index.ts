import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { GlobalAPI } from '@/common/global-api';
import Layout from '@/layout/layout.vue';
// import TestRoutes from '@/views/test/routes';
import FAQRoutes from '@/views/faq-manage/routes';

const TITLE = GlobalAPI.config.TITLE_CENTRE_CONFIG;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: Layout,
    children: [...FAQRoutes],
    meta: {
      sort: 1,
      icon: 'FillSet',
      title: 'FAQ管理',
      menu: true
    }
  }
];
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(`/${process.env.PROD_PREFIX}`),
  routes
});

router.beforeEach((to: any, from, next) => {
  next();
});

export default router;
