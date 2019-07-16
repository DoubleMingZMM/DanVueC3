<template>
  <div class="about">
    <h1>This is an about page1</h1>
    <button @click="handleClick">跳转到命名路由</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$router.push({ name: 'parameter', query: {aa: 22} } )
    }
  }
}
</script>

