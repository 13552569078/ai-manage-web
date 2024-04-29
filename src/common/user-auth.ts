// 用户授权验证
import { defaultCacheObj } from './cache';
import { GlobalAPI } from '@/common';

const cacheTools = {
  save: (token: string) => {
    defaultCacheObj.set('token', token);
  },
  get: () => defaultCacheObj.get('token')
};

// 获取路径token存储
const searchParams = new URLSearchParams(window.location.search);
const token = searchParams.get('token');
token && cacheTools.save(token as string);

/**
 * 用户授权操作
 */
export default {
  // 验证登录状态
  checkLogin: () => !!cacheTools.get(),
  // 退出登录，清除token
  logoff: (tokens:string, redirectUrl:string) => {
    try {
      defaultCacheObj.remove('token');
      document.location.href = `${GlobalAPI.config.LOGIN_OUT}?token=${tokens}&post_logout_redirect_uri=${redirectUrl || ''}`;
    } catch (err) {
      console.log(err);
    }
  },
  saveToken: cacheTools.save,
  getToken: cacheTools.get
};
