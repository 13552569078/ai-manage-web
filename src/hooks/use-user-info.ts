import userAuth from '@/common/user-auth';
import { useRouter } from 'vue-router';
import { useUserInfoStore } from '@/store/use-user';
import { userApIObject } from '@/apis/modules/user';

function useUserInfo() {

    const router = useRouter();
    const userInfoStore = useUserInfoStore();

    // 获取userinfo
    const setUserInfo = async () => {
        const { data } = await userApIObject.postUserApi();
        userInfoStore.setUserInfo({
            name: data.USER_NAME
        });
        // 登录页面来的默认跳转
        window.location.href.includes('/login') && router.push({ name: 'tpl' });
    };
    // 退出登录
    const userLogout = async () => {
        const token = userAuth.getToken() as string;
        const redirectUrl = `${document.location.origin}/ai-manage-web/login`;
        userAuth.logoff(token, redirectUrl);
    };

    return {
        setUserInfo,
        userLogout
    };
}

export { useUserInfo };
