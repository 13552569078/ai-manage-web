<template>
  <hl-button
    type="primary"
    class="gradual-button"
    :class="disabled ? 'disabled' : null"
    icon-position="left"
    style="
      --button-height: calc(var(--xs) * 6);
      --button-padding-x: calc(var(--xs) * 2);
      --form-icon-size: var(--xl);
      min-width: calc(var(--xs) * 18);
    "
    :disabled="disabled"

    @click="$emit('click')"
  >
    <hl-group class="w-full" align="items-center">
      {{ label }}
    </hl-group>
    <template #icon>
      <hl-icon v-if="!disabled">
        <svg viewBox="0 0 32 32">
          <defs>
            <linearGradient
              id="linearGradient-1"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="99.889147%"
            >
              <stop stop-color="#FFFFFF" offset="0%" />
              <stop stop-color="#BAE0FF" offset="100%" />
            </linearGradient>
          </defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <rect
              fill-opacity="0.01"
              fill="#FFFFFF"
              x="0"
              y="0"
              width="32"
              height="32"
            />
            <path
              d="M26,3 L26,30 L6,30 L6,3 L26,3 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z"
              fill-opacity="0.5"
              fill="#FFFFFF"
            />
            <path
              d="M29,9 L29,28 L3,28 L3,9 L29,9 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z"
              fill-opacity="0.3"
              fill="#FFFFFF"
            />
            <path
              d="M27,2 L27,30 L5,30 L5,11.991862 L13.0142796,2 L27,2 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z"
              fill="url(#linearGradient-1)"
            />
          </g>
        </svg>
      </hl-icon>
      <hl-icon v-else>
        <svg viewBox="0 0 32 32">
          <defs>
            <linearGradient
              id="linearGradient-1"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="99.889147%"
            >
              <stop stop-color="#dddddd" offset="0%" />
              <stop stop-color="#b8b8b8" offset="100%" />
            </linearGradient>
          </defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <rect
              fill-opacity="0.01"
              fill="#FFFFFF"
              x="0"
              y="0"
              width="32"
              height="32"
            />
            <path
              d="M26,3 L26,30 L6,30 L6,3 L26,3 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z"
              fill-opacity="0.5"
              fill="#FFFFFF"
            />
            <path
              d="M29,9 L29,28 L3,28 L3,9 L29,9 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z"
              fill-opacity="0.3"
              fill="#FFFFFF"
            />
            <path
              d="M27,2 L27,30 L5,30 L5,11.991862 L13.0142796,2 L27,2 Z M17.5,12 L15.5,12 L15.5,15.5 L12,15.5 L12,17.5 L15.5,17.5 L15.5,21 L17.5,21 L17.5,17.5 L21,17.5 L21,15.5 L17.5,15.5 L17.5,12 Z"
              fill="url(#linearGradient-1)"
            />
          </g>
        </svg>
      </hl-icon>
    </template>
  </hl-button>
</template>
<script lang="ts" setup>
defineProps({
  label: String,
  disabled: Boolean,
});
defineEmits(['click']);
</script>
<style lang="scss">
  .gradual-button {
    &.disabled {
      background: #f1f3f8 !important;
      color: #b8b8b8 !important;
      border: 1px solid #e7e7e7;
    }
    >span {
      width: 100%;
    }
  }
</style>
