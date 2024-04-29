<template show-source>
  <hl-header>
    <div class="logo">
      <img :src="logoFXUrl" alt="hongluan.ui" />
      <h1>{{ TITLE }}</h1>
    </div>
    <hl-group class="header-left" gap="var(--xs)">
    </hl-group>
    <div class="header-right">
      <hl-group gap="var(--xs)" class="m-r-xxl"> </hl-group>
      <div class="userinfo">
        <span class="name">您好，{{user.name}}</span>
        <hl-dropdown class="m-l-xs">
          <hl-thumb round type="primary" size="md" light class="face" :src="userHead" fit="cover">
          </hl-thumb>
          <template #dropdown>
            <hl-dropdown-menu>
              <hl-dropdown-item @click="userLogout">退出</hl-dropdown-item>
            </hl-dropdown-menu>
          </template>
        </hl-dropdown>
      </div>
    </div>
  </hl-header>
</template>

<script lang="ts" setup>
import { useUserInfoStore } from '@/store/use-user';
import { GlobalAPI } from '@/common';
import { storeToRefs } from 'pinia';
import { useUserInfo } from '@/hooks';
import logoFXUrl from '../assets/images/logo-fx.png';
import userHead from '../assets/images/user-head.jpeg';

const userInfoStore = useUserInfoStore();

const { userLogout } = useUserInfo();

const { user } = storeToRefs(userInfoStore);

const TITLE = GlobalAPI.config.TITLE_CENTRE_CONFIG;
</script>
<style lang="scss">
div[id='themeDialog'] {
  width: 850px;
  height: 500px;
  left: 50%;
  transform: translate(-50%, 0);
  .panel-body {
    height: 100%;
    padding: 0;
  }
}
.hl-layout.fixed-header .hl-header {
  background-image: url('@/assets/images/navbar.png') !important;
}
</style>
