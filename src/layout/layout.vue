<template>
  <hl-layout class="hl-layout boxed1 fixed-header full-header fixed-aside fixed-sub-header full-sub-header1 fixed-footer1 full-footer1" style="height: 100vh">
    <layout-header />
    <hl-sub-header class="border-top items-between">
      <hl-group dir="horizontal" align="items-middle" indent="var(--xl)">
        <div :class="['page-title', meta.hiddenSubTitle ? 'display-none' : 'page-main']">
          <hl-button class="go-back" equal no-fill v-if="meta.showBack" @click="router.go(-1)">
            <template #icon>
              <hl-icon>
                <TwoArrowLeft />
              </hl-icon>
            </template>
          </hl-button>
          <h5>{{ pageTitle}}</h5>
          <h6 class="text-secondary m-l-sm">{{ pageSubTitle }}</h6>
        </div>
        <div class="sub-header-left" id="pageBreadcrumb"></div>
      </hl-group>
      <div class="sub-header-right" id="pageAction"></div>
    </hl-sub-header>
    <hl-container style="background: #eaf1f7">
      <layout-menu :readRoute="true" @selectedMenu="selectedMenu" />
      <hl-main v-if="state.showRouter">
        <LayoutBlank></LayoutBlank>
      </hl-main>
    </hl-container>
  </hl-layout>
</template>

<script lang="ts" setup>
import { computed, toRefs, reactive, nextTick, provide, ref } from 'vue';
import { template } from 'lodash-es';
import LayoutHeader from './header.vue';
import LayoutMenu from './menu.vue';
import { useRoute, useRouter } from 'vue-router'; // /*RouteRecordRaw*/
import { GlobalAPI } from '@/common/global-api';
import LayoutBlank from './layout-blank.vue';

const route = useRoute();
const router = useRouter();

const layoutConfig = reactive({
  boxed: ['boxed1'],
  header: ['fixed-header'],
  fullHeader: ['full-header'],
  aside: ['fixed-aside'],
  subHeader: ['fixed-sub-header'],
  fullSubHeader: ['full-sub-header1'],
  footer: ['fixed-footer1'],
  fullFooter: ['full-footer1']
});

const meta = computed(() => route.meta);
const pageTitle = computed(() => template((meta?.value.title as string) || '')(Object.assign({}, route.params, route.query)));
const pageSubTitle = computed(() => template((meta?.value.subTitle as string) || '')(Object.assign({}, route.params, route.query)));

const selectedMenu = (item: any) => {
  if (item.meta) {
    meta.value.title = item.meta.title;
    meta.value.subTitle = item.meta.subTitle;
  }
};

const state = reactive({
  showRouter: true
});

const reload = () => {
  state.showRouter = false;
  nextTick(() => {
    state.showRouter = true;
  });
};

provide('reload', reload);

router.beforeEach((to, from, next) => {
  if (!from.meta.isGotoKeepAlive && to.meta.keepAlive) {
    console.log('更新缓存');
    reload();
  }
  next();
});
</script>
<style lang="scss" scoped>
.iframe-container {
  min-height: 100vh !important;
}
</style>
