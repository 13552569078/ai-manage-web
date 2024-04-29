<template>
  <fx-page-table-v2 ref="tableRef" :cols="cols" :table-data="tableData" :table-props="{ rowKey: 'id' }"
    :data-fetcher="getData" selector-col-count="count-xl-2 count-lg-1 count-md-1" :show-search-bar="true"
    :search-items="searchItems">
    <template #toolbar-extra-after>
      <fx-action-button type="main" @click="addTag" label="新增模板" />
    </template>
    <template #action="{ row }">
      <hl-button type="link" @click="editUnit(row)">编辑</hl-button>
      <hl-button type="link" @click="delUnit(row)" :disabled="row.isRefer" no-fill>删除</hl-button>
    </template>
  </fx-page-table-v2>
  <addTplDlg v-if="dlgVisible" :id="editintId" :detail="editDetail" @cancel="dlgVisible = false" @ok="ok"></addTplDlg>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { FxPageTable, DataFetcherParams } from 'fx-front-framework';
import { HlMessage, HlMessageBox } from 'hongluan-ui';
import { apiFaqTypeObj } from '@/apis/modules/faq';
import { IpostPageSpace } from '@/apis/modules/faq/model';
import addTplDlg from './components/add-tpl.vue';

const tableRef = ref<InstanceType<typeof FxPageTable>>();
const tableData = ref<IpostPageSpace.List[]>([]);
const editDetail = ref<IpostPageSpace.List>();
const dlgVisible = ref(false);
const editintId = ref<string>('');

const cols = ref([
  {
    title: '#',
    minWidth: '4em',
    align: 'center',
    slotName: 'tableIndex',
  },
  {
    title: '编号',
    prop: 'code',
    minWidth: '100px',
    showTooltip: true,
    tooltipProps: { maxWidth: '340px' }
  },
  {
    title: '标题名称',
    prop: 'title',
    minWidth: '200px',
    showTooltip: true,
    tooltipProps: { maxWidth: '340px' }
  },
  {
    title: '主管部门',
    prop: 'department',
    minWidth: '120px',
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
    maxlength: '50',
    showWordLimit: false,
    label: '模板编码',
    placeholder: '模板编码',
    value: '',
    name: 'code',
  },
  {
    type: 'input',
    maxlength: '20',
    showWordLimit: false,
    label: '模板名称',
    placeholder: '模板名称',
    value: '',
    name: 'title',
  },
  {
    type: 'input',
    maxlength: '50',
    showWordLimit: false,
    label: '主管部门',
    placeholder: '主管部门',
    value: '',
    name: 'department',
  },
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

  const result = await apiFaqTypeObj.postPage(searchParams);
  tableData.value = result.data.list;
  setTotal(+result.data.total);
};

const addTag = () => {
  editintId.value = '';
  dlgVisible.value = true;
};

const editUnit = (row: IpostPageSpace.List) => {
  editintId.value = row.id + '';
  editDetail.value = row;
  dlgVisible.value = true;
};

const delUnit = async (row: IpostPageSpace.List) => {
  await HlMessageBox.confirm('您确认删除此模板吗?', '删除提示', {
    confirmButtonText: '确定',
    confirmButtonType: 'danger',
    cancelButtonText: '取消',
  });
  await apiFaqTypeObj.deleteF(row.id);
  HlMessage.success('删除成功');
  tableRef.value?.refresh();
};

const ok = () => {
  dlgVisible.value = false;
  tableRef.value?.refresh();
};

</script>
