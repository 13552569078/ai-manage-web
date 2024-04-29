<template>
  <div class="app-container">
    <router-view/>
  </div>
</template>
<script lang="ts" setup>
import { useUserInfo } from '@/hooks';
import { useRouter } from 'vue-router';

const router = useRouter();
const { setUserInfo } = useUserInfo();

// 获取用户信息
setUserInfo();

</script>

<style lang="scss">
  @import 'fx-front-framework/theme/index.scss';
</style>
