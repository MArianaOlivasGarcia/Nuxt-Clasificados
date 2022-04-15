<template>

  <div class="container">

    <div class="card-columns">

      <CarCard v-for="car in [1,2,3,4,5,6]" :key="car" />
    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>