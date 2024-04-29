import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: 'tpl',
    name: 'tpl',
    component: () => import('@/views/faq-manage/index.vue'),
    meta: {
      title: '模板库管理'
    }
  },
  {
    path: 'knowType',
    name: 'knowType',
    component: () => import('@/views/faq-manage/components/know-type.vue'),
    meta: {
      title: 'QA管理'
    }
  }
];

export default routes;
