<template>
  <hl-dialog :model-value="true" class="md-dialog" width="460px" :title="`${id ? '编辑' : '添加'}QA`"
    @close="$emit('cancel')" borderless>
    <hl-form ref="formRef" :model="formData" :rules="rules" :label-position="['items-left', 'items-middle']">
      <hl-form-item label="标题名称" prop="title">
        <hl-input v-model.trim="formData.title" placeholder="请输入标题名称" maxlength="20" show-word-limit block />
      </hl-form-item>
      <hl-form-item label="类型" prop="typeId">
        <hl-select v-model="formData.typeId" class="w-full" placeholder="请选择类型" filterable clearable>
          <hl-option v-for="item in $props.typeList" :key="item.id" :label="item.title" :value="item.id" />
        </hl-select>
      </hl-form-item>
      <hl-form-item label="状态">
        <hl-group gap="var(--md)">
          <hl-radio v-model="formData.status" :value="1">开启</hl-radio>
          <hl-radio v-model="formData.status" :value="2">关闭</hl-radio>
        </hl-group>
      </hl-form-item>
      <hl-form-item label="来源" prop="source">
        <hl-input v-model.trim="formData.source" placeholder="请输入来源" maxlength="20" show-word-limit block />
      </hl-form-item>
      <hl-form-item label="内容" prop="content">
        <hl-input native-type="textarea" :rows="3" v-model.trim="formData.content" placeholder="请输入内容" maxlength="200"
          show-word-limit block />
      </hl-form-item>
    </hl-form>
    <template #footer>
      <span class="dialog-footer">
        <hl-button @click="$emit('cancel')">取消</hl-button>
        <hl-button type="primary" class="m-l-md" @click="ok">{{ id ? '保存' : '确定' }}</hl-button>
      </span>
    </template>
  </hl-dialog>
</template>
<script lang="ts" setup>
import { onMounted, PropType, reactive, ref } from 'vue';
import { FormInstance } from 'hongluan-ui';
import { apiFaqRecordObj } from '@/apis/modules/record';
import { IpostPageSpace } from '@/apis/modules/faq/model';

const props = defineProps({
  id: String,
  detail: {
    type: Object,
    default: () => ({}),
  },
  typeList: {
    type: Array as PropType<IpostPageSpace.List[]>,
    default: () => ([]),
  }
});
const emit = defineEmits(['cancel', 'ok']);

const formRef = ref<FormInstance>();
const formData = reactive({
  id: '',
  title: '',
  typeId: '',
  content: '',
  status: 1,
  source: ''
});

const rules = {
  title: [
    { required: true, message: '标题名称不能为空' },
  ],
  typeId: [
    { required: true, message: '类型不能为空' },
  ],
  source: [
    { required: true, message: '来源不能为空' },
  ],
  content: [
    { required: true, message: '内容不能为空' },
  ]
};

const ok = async () => {
  const isValid = await formRef.value?.validate();
  if (isValid) {
    if (props.id) {
      await apiFaqRecordObj.postUpdate(Object.assign({ id: props.id }, formData));
    } else {
      await apiFaqRecordObj.postSave(formData);
    }
    emit('ok');
  }
};

onMounted(async () => {
  props.id && Object.assign(formData, props.detail);
});

</script>
