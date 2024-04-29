// src/stores/counter.ts
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useUserInfoStore = defineStore(
  'userInfo',
  () => {
    const user = reactive({
      name: '',
    });

    const setUserInfo = (data: { name: string }) => {
      Object.assign(user, data);
    };

    return { user, setUserInfo };
  },
  {
    persist: true,
  }
);
