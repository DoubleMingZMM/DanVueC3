<template>
  <form>
    <slot />
  </form>
</template>

<script>
export default {
  name: 'DanForm',

  props: {
    model: {
      type: Object,
      default: {}
    },
    rules: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      fields: []
    };
  },

  created() {
    this.$on('on-form-item-add', field => {
      if (field) this.fields.push(field);
    });
    this.$on('on-form-item-remove', field => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  }
};
</script>
