import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: 'test1',
    name: 'test1',
    component: () => import('@/views/test/test1.vue'),
    meta: {
      title: '测试1'
    }
  },
  {
    path: 'test2',
    name: 'test2',
    component: () => import('@/views/test/test2.vue'),
    meta: {
      title: '测试2'
    }
  }
];

export default routes;
