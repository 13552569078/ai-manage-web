import { requestHelper } from "@/apis/base/mapper-helper";
import { IpostUser} from './model';
import { GlobalAPI } from '@/common';

const API_PREFIX = GlobalAPI.config.API_PREFIX_CENTRE_CONFIG;


/**
 * 数据访问，此类代码生成器生成
 */
class user_api_object {
    data2Mock: boolean = false;
    // 修改Faq类型|修改Faq类型-FAQ-Type相关接口
    postUserApi() {
        const url = `${API_PREFIX}/api/user/getUserInfo`;
        return requestHelper.postRequestData<IpostUser.Model>(url, '61d3f958-638f-4687-9b47-9777b7899560', this.data2Mock, {});
    }
}
export const userApIObject = new user_api_object();