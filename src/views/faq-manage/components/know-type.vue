<template>
  <fx-page-table-v2 ref="tableRef" :cols="cols" :table-data="tableData" :table-props="{ rowKey: 'id' }"
    :data-fetcher="getData" selector-col-count="count-xl-2 count-lg-1 count-md-1" :show-search-bar="true"
    :search-items="searchItems">
    <template #toolbar-extra-after>
      <fx-action-button type="main" @click="addTag" label="新增QA" />
    </template>
    <template #typeId="{ row }">
      <span>{{ getTypeListName(row.typeId) }}</span>
    </template>
    <template #status="{ row }">
      <span v-if="row.status===1" class="text-success">上线</span>
      <span v-else class="text-danger">下线</span>
    </template>
    <template #action="{ row }">
      <hl-button type="link" @click="upline(row)" v-if="row.status===2" class="text-success">上线</hl-button>
      <hl-button type="link" @click="offline(row)" v-if="row.status===1" class="text-danger">下线</hl-button>
      <hl-button type="link" @click="editUnit(row)">编辑</hl-button>
      <hl-button type="link" @click="delUnit(row)" :disabled="row.isRefer" no-fill>删除</hl-button>
    </template>
  </fx-page-table-v2>
  <addTplDlg v-if="dlgVisible" :id="editintId" @cancel="dlgVisible = false" @ok="ok" :detail="editDetail"
    :typeList="typeList"></addTplDlg>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { FxPageTable, DataFetcherParams } from 'fx-front-framework';
import { HlMessage, HlMessageBox } from 'hongluan-ui';
import { apiFaqTypeObj } from '@/apis/modules/faq';
import { IpostPageSpace } from '@/apis/modules/faq/model';
import { apiFaqRecordObj } from '@/apis/modules/record';
import { IpostPageSpaceList } from '@/apis/modules/record/model';
import addTplDlg from './add-know-type.vue';

const tableRef = ref<InstanceType<typeof FxPageTable>>();
const tableData = ref<IpostPageSpaceList.List[]>([]);
const dlgVisible = ref(false);

const typeList = ref<IpostPageSpace.List[]>([]);
const editDetail = ref<IpostPageSpaceList.List>();
const editintId = ref<string>('');

const cols = ref([
  {
    title: '#',
    minWidth: '4em',
    align: 'center',
    slotName: 'tableIndex',
  },
  {
    title: '标题',
    prop: 'title',
    minWidth: '200px',
    showTooltip: true,
    tooltipProps: { maxWidth: '340px' }
  },
  {
    title: '类型',
    prop: 'typeId',
    minWidth: '200px',
    showTooltip: true,
    slotName: 'typeId',
    tooltipProps: { maxWidth: '340px' }
  },
  {
    title: '状态',
    prop: 'status',
    minWidth: '80px',
    showTooltip: true,
    slotName: 'status',
    tooltipProps: { maxWidth: '340px' }
  },
  {
    title: '来源',
    prop: 'source',
    minWidth: '200px',
    showTooltip: true,
    tooltipProps: { maxWidth: '340px' }
  },
  {
    title: '内容',
    prop: 'content',
    showTooltip: true,
    tooltipProps: { maxWidth: '340px' }
  },
  // {
  //   title: '创建时间',
  //   prop: 'createTime',
  //   minWidth: '160px',
  //   showTooltip: true,
  //   tooltipProps: { maxWidth: '340px' }
  // },
  {
    title: '操作',
    slotName: 'action',
    align: 'center',
    fixed: 'right',
    minWidth: '8em',
  },
]);

const searchItems = reactive([
  {
    type: 'input',
    maxlength: '20',
    showWordLimit: false,
    label: '分类名称',
    placeholder: '分类名称',
    value: '',
    name: 'title',
  },
  {
    type: 'select',
    label: '分类状态',
    placeholder: '请选择分类状态',
    value: '',
    filterable: true,
    name: 'status',
    prop: {
      label: 'dictName',
      value: 'dictCode',
    },
    options: [{ dictName: '开启', dictCode: 1 }, { dictName: '关闭', dictCode: 2 }],
  },
  {
    type: 'select',
    label: '分类类型',
    placeholder: '请选择分类类型',
    value: '',
    filterable: true,
    name: 'typeId',
    prop: {
      label: 'title',
      value: 'id',
    },
    options: [] as IpostPageSpace.List[],
  },
  {
    type: 'input',
    maxlength: '20',
    showWordLimit: false,
    label: '分类来源',
    placeholder: '分类来源',
    value: '',
    name: 'source',
  }
]);

const getData = async ({
  pageSize,
  currentPage,
  params,
  setTotal,
}: DataFetcherParams) => {
  const searchParams = {
    pageNum: currentPage,
    pageSize,
    ...params,
  };

  const { data } = await apiFaqRecordObj.postPage(searchParams);
  tableData.value = data.list;
  setTotal(+data.total);
};

const addTag = () => {
  editintId.value = '';
  dlgVisible.value = true;
};

const editUnit = (row: IpostPageSpaceList.List) => {
  editintId.value = row.id + '';
  editDetail.value = row;
  dlgVisible.value = true;
};

const delUnit = async (row: IpostPageSpaceList.List) => {
  await HlMessageBox.confirm('您确认删除此QA吗?', '删除提示', {
    confirmButtonText: '确定',
    confirmButtonType: 'danger',
    cancelButtonText: '取消',
  });
  await apiFaqRecordObj.deleteF(row.id);
  HlMessage.success('删除成功');
  tableRef.value?.refresh();
};

const ok = () => {
  dlgVisible.value = false;
  tableRef.value?.refresh();
};

// 上线
const upline = async (row: IpostPageSpaceList.List) => {
  await apiFaqRecordObj.getUpline(row.id);
  HlMessage.success('上线成功');
  tableRef.value?.refresh();
};
// 下线
const offline = async (row: IpostPageSpaceList.List) => {
  await apiFaqRecordObj.getDownline(row.id);
  HlMessage.success('下线成功');
  tableRef.value?.refresh();
};

// 类型列表
const getTypeList = async () => {
  const { data } = await apiFaqTypeObj.postPage({ 'pageNum': 1, 'pageSize': 9999 });
  searchItems[2].options = data.list;
  typeList.value = data.list;
};
// 类型名称
const getTypeListName = (id: string) => {
  return typeList.value.find(item => {
    return item.id === id;
  })?.title || '--';
};

// 获取类型列表
getTypeList();

</script>
