import { Ref } from 'vue';
import { Indexable } from 'fx-front-utils';
import { HlMessage } from 'hongluan-ui';
import dayjs from 'dayjs';
import { GlobalAPI } from '@/common';

function isInt(val: number) {
  return val % 1 === 0;
}

function isPositiveInt(val: number) {
  return val % 1 === 0 && val > 0;
}

// 正整数 且 包含0
function isPositiveIntAndZero(val: number) {
  return val % 1 === 0 && val >= 0;
}

// function isValidName(rule: any, value: string, callback: any) {
//   const reg = /[%--`~!@#$^&*()={}':;,[\].<>/?~！@#￥……&*（）——|｜{}【】‘；：”“。，、？_]+/g;
//   if (reg.test(value)) {
//     callback(new Error('仅可输入中文、字符、数字'));
//   } else {
//     callback();
//   }
// }

function isValidFunc({ value, callback, reg, msg }: { value: string; callback: (errorMsg?: any) => void; reg: RegExp; msg: string | undefined }) {
  if (!reg.test(value)) {
    callback(new Error(msg));
  } else {
    callback();
  }
}

function isValidPhoneNumber(rule: any, value: string, callback: (errorMsg?: any) => void) {
  const reg = /^$|^[0-9]{11}$/;
  const msg = '请输入合法的手机号码';
  isValidFunc({ value, callback, reg, msg });
}

// 判断当前页面是否「报警页面」」
function funcIsMonitorPage() {
  return document.location.href.indexOf('/monitoring-config/') > -1;
}

// 在树中找某一个结点
const findNode = (value: string | number, key: string, tree: Indexable<any>[], childrenKey: string = 'children'): Indexable<any> | undefined => {
  if (tree && tree.length) {
    let node = tree.find((item: Indexable<any>) => item[key] === value);
    if (node) {
      return node;
    } else {
      for (let i = 0; i < tree.length; i++) {
        const found = findNode(value, key, tree[i][childrenKey], childrenKey);
        if (found) {
          node = found;
          break;
        }
      }
    }
    return node;
  }
};

// 操作成功msg
const HlMessageSuccess = (msg = '操作成功') => {
  HlMessage.success(msg);
};

// 下载文件
const downloadByUrl = ({ url, originalName }: { url: string; originalName: string }) => {
  const x = new XMLHttpRequest();
  x.open('GET', url, true);
  x.responseType = 'blob';
  x.onload = () => {
    const fileurl = window.URL.createObjectURL(x.response);
    const a = document.createElement('a');
    a.href = fileurl;
    a.download = originalName;
    a.click();
  };
  x.send();
};

/**
 * 获取近多少天，至当天结束（23:59:59）
 * @param number
 */
const getDaysBetween = (number: number) => {
  let day1 = '';
  let day2 = '';
  const oneDay = 24 * 60 * 60 * 1000;
  const endTime = new Date(new Date().toLocaleDateString()).getTime() + oneDay - 1;
  day1 = dayjs(endTime).format('YYYY-MM-DD HH:mm:ss');
  const startTime = new Date(new Date().toLocaleDateString()).getTime() + oneDay - number * oneDay;
  day2 = dayjs(startTime).format('YYYY-MM-DD HH:mm:ss');
  return { startTime: day2, endTime: day1 };
};

//  await wait(1000)
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// upload FILE_VIEW dirUrl
const getFileDirUrl = (file: { dirUrl: string; name: string; url: string; id: string; attachmentType: string; percentage: number }) => {
  const { dirUrl } = file;
  return `${GlobalAPI.config.FILE_VIEW}/${dirUrl}`;
};

// 监测主体、监测点批量启用、停止按钮状态判断 start: 启用 stop: 停用
const isMuiltipleOprationDisabled = (type: string, rowKeys: Ref<string[]>, tableData: Ref<any[]>) => {
  const typeCode = type === 'start' ? 0 : 1;
  if (rowKeys.value.length === 0) {
    return true;
  } else {
    const items = tableData.value.filter(item => rowKeys.value.includes(item.id));
    if (items.every(item => item.useState === typeCode)) {
      return false;
    } else {
      return true;
    }
  }
};

export { isInt, isPositiveInt, funcIsMonitorPage, isValidPhoneNumber, findNode, HlMessageSuccess, downloadByUrl, getDaysBetween, wait, getFileDirUrl, isMuiltipleOprationDisabled, isPositiveIntAndZero };
