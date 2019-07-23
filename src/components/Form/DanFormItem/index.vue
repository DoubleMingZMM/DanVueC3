<template>
  <div>
    <label>{{ label }}</label>
    <slot />
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter.js';

export default {
  name: 'DanFormItem',

  mixins: [Emitter],

  props: {
    label: {
      type: String,
      default: 'LABEL'
    },
    prop: {
      type: String,
      default: 'PROP'
    }
  },

  data() {
    return {
      //
    };
  },

  mounted() {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch('danForm', 'on-form-item-add', this);
      this.setRules();
    }
  },

  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch('danForm', 'on-form-item-remove', this);
  },

  methods: {
    setRules() {
      this.$on('on-form-change', this.onFieldChange);
    }
  }
};
</script>
