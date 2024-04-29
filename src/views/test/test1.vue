<template>
    <hl-group class="empty" align="items-center items-middle" dir="vertical" gap="var(--md)">
      {{ JSON.stringify(user) }}
    </hl-group>
  </template>

<script lang="ts" setup>
import { useUserInfoStore } from '@/store/use-user';
import { storeToRefs } from 'pinia';

const userInfoStore = useUserInfoStore();

const { user } = storeToRefs(userInfoStore);
</script>
