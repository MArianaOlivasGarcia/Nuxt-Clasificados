

<template>
  <div class="card">
      <p>hola</p>
  </div>
</template>

<script>
export default {
    props: {
        product: {}
    },
    created() {
        console.log(this.product)
    }
}
</script>

<style>

</style>