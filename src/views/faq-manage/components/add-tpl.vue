<template>
  <hl-dialog :model-value="true" class="md-dialog" width="460px" :title="`${id ? '编辑' : '添加'}类型`"
    @close="$emit('cancel')" borderless>
    <hl-form ref="formRef" :model="formData" :rules="rules" :label-position="['items-left', 'items-middle']">
      <hl-form-item label="编号" prop="code">
        <hl-input v-model.trim="formData.code" placeholder="请输入编号" maxlength="20" show-word-limit block />
      </hl-form-item>
      <hl-form-item label="标题名称" prop="title">
        <hl-input v-model.trim="formData.title" placeholder="请输入标题名称" maxlength="50" show-word-limit block />
      </hl-form-item>
      <hl-form-item label="主管部门" prop="department">
        <hl-input v-model.trim="formData.department" placeholder="请输入主管部门" maxlength="50" show-word-limit block />
      </hl-form-item>
      <hl-form-item label="内容" prop="content">
        <hl-input native-type="textarea" :rows="3" v-model.trim="formData.content" placeholder="请输入内容" maxlength="200" show-word-limit block />
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
import { apiFaqTypeObj } from '@/apis/modules/faq';

const props = defineProps({
  id: String,
  detail: {
    type: Object,
    default: () => ({}),
  }
});
const emit = defineEmits(['cancel', 'ok']);

const formRef = ref<FormInstance>();
const formData = reactive({
  id: '',
  code: '',
  title: '',
  content: '',
  department: ''
});

const rules = {
  code: [
    { required: true, message: '编号不能为空' },
  ],
  title: [
    { required: true, message: '标题不能为空' },
  ],
  content: [
    { required: true, message: '内容不能为空' },
  ],
  department: [
    { required: true, message: '主管部门不能为空' },
  ]
};

const ok = async () => {
  const isValid = await formRef.value?.validate();
  if (isValid) {
    if (props.id) {
      await apiFaqTypeObj.postUpdate(Object.assign({ id: props.id }, formData));
    } else {
      await apiFaqTypeObj.postSave(formData);
    }
    emit('ok');
  }
};

onMounted(async () => {
  props.id && Object.assign(formData, props.detail);
});

</script>
