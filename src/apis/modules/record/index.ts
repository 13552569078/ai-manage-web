import { requestHelper } from "@/apis/base/mapper-helper";
import { IpostUpdateSpace, IpostPageSpaceList, IdeleteFSpace, IpostSaveSpace } from './model';
import { GlobalAPI } from '@/common';

const API_PREFIX = GlobalAPI.config.API_PREFIX_CENTRE_CONFIG;

interface ISaveprarams {
    'id': string,
    "title": string,
    "typeId": string,
    "content": string,
    "status": number,
    source: string,
}

interface IListprarams {
    "typeId": string,
    "content": string,
    "source": string,
    "title": string,
    "status": number,
    pageNum: number;
    pageSize: number
}


/**
 * 数据访问，此类代码生成器生成
 */
class Faq_recordApi {
    data2Mock: boolean = false;

    // 修改FaqRecord|修改FaqRecord-FAQ-record相关接口
    postUpdate(data: ISaveprarams) {
        const url = `${API_PREFIX}/api/faqRecord/update`;
        return requestHelper.postRequestData<IpostUpdateSpace.Model>(url, 'ceeb2ee0-1334-40b2-863b-1eaf57757046', this.data2Mock, data);
    }
    // FaqRecord分页查询|FaqRecord分页查询-FAQ-record相关接口
    postPage(data: IListprarams) {
        const url = `${API_PREFIX}/api/faqRecord/page`;
        return requestHelper.postRequestData<IpostPageSpaceList.Model>(url, '066bb804-7c2d-4331-9d73-ba45dfcbf1e9', this.data2Mock, data);
    }
    // 删除FaqRecord|删除FaqRecord-FAQ-record相关接口
    deleteF(id: string) {
        const url = `${API_PREFIX}/api/faqRecord/delete/${id}`;
        return requestHelper.postRequestData<IdeleteFSpace.Model>(url, 'ebc1b64e-34dd-47f3-980b-60910f99ac7b', this.data2Mock);
    }
    // 保存FaqRecord|保存FaqRecord-FAQ-record相关接口
    postSave(data: ISaveprarams) {
        const url = `${API_PREFIX}/api/faqRecord/save`;
        return requestHelper.postRequestData<IpostSaveSpace.Model>(url, '4ce25713-54ff-439d-86df-2442440c1b11', this.data2Mock, data);
    }

    getDownline(id: string) {
        const url = `${API_PREFIX}/api/faqRecord/offline/${id}`;
        return requestHelper.getRequestData<IpostSaveSpace.Model>(url, 'dc4b9bce-3247-4ca1-a36b-3b8b2e4db9f0', this.data2Mock);
    }
    getUpline(id: string) {
        const url = `${API_PREFIX}/api/faqRecord/online/${id}`;
        return requestHelper.getRequestData<IpostSaveSpace.Model>(url, 'dc4b9bce-3247-4ca1-a36b-3b8b2e4db9f0', this.data2Mock);
    }

}
export const apiFaqRecordObj = new Faq_recordApi();