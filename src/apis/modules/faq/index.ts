import { requestHelper } from "@/apis/base/mapper-helper";
import { IdeleteFSpace, IpostSaveSpace, IpostPageSpace, IpostUpdateSpace } from './model';
import { GlobalAPI } from '@/common';

const API_PREFIX = GlobalAPI.config.API_PREFIX_CENTRE_CONFIG;

interface ISaveprarams  {
    'id': string,
    "code": string,
    "content": string,
    "department": string,
    "title": string
}

interface IListprarams  {
    "code"?: string,
    "content"?: string,
    "department"?: string,
    "title"?: string
    pageNum:number;
    pageSize: number
}


/**
 * 数据访问，此类代码生成器生成
 */
class Faq_typeApi {
    data2Mock: boolean = false;

    // 删除Faq类型|删除Faq类型-FAQ-Type相关接口
    deleteF(id: string) {
        const url = `${API_PREFIX}/api/faqType/delete/${id}`;
        return requestHelper.postRequestData<IdeleteFSpace.Model>(url, 'fc480b83-1b61-4338-8203-6cb20aba731b', this.data2Mock);
    }
    // 保存Faq类型|保存Faq类型-FAQ-Type相关接口
    postSave(params:ISaveprarams) {
        const url = `${API_PREFIX}/api/faqType/save`;
        return requestHelper.postRequestData<IpostSaveSpace.Model>(url, 'ec2da250-87a9-47eb-9b65-48f3c5f9bc49', this.data2Mock, params);
    }
    // Faq类型分页查询|Faq类型分页查询-FAQ-Type相关接口
    postPage(params: IListprarams) {
        const url = `${API_PREFIX}/api/faqType/page`;
        return requestHelper.postRequestData<IpostPageSpace.Model>(url, 'ddb12184-1c85-49d2-b380-01f037da4842', this.data2Mock, params);
    }
    // 修改Faq类型|修改Faq类型-FAQ-Type相关接口
    postUpdate(params:ISaveprarams) {
        const url = `${API_PREFIX}/api/faqType/update`;
        return requestHelper.postRequestData<IpostUpdateSpace.Model>(url, '61d3f958-638f-4687-9b47-9777b7899560', this.data2Mock, params);
    }
}
export const apiFaqTypeObj = new Faq_typeApi();