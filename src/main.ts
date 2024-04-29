import { createApp } from 'vue';

import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router/index';
// 初始化token及更新
import '@/common/user-auth';

import './assets/styles/index.scss';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

echarts.use([
  BarChart,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  CanvasRenderer,
  PieChart,
  LineChart
]);

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
