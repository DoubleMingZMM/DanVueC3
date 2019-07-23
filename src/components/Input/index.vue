<template>
  <div>
    <input
      :value="currentValue"
      @input="handleClick"
    >
  </div>
</template>

<script>
export default {
    name: 'DanInput',

    props: {
        value: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            currentValue: ''
        };
    },

    methods: {
        handleClick(e) {
            const value = e.target.value;
            this.currentValue = value;
            // this.$emit('')
            this.dispatch('danFormItem', 'on-form-change', value);
        }
    }
};
</script>
