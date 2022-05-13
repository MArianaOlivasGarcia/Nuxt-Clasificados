<template>
  
  <NuxtLink :to="category.url" class="card" style="">
    <div class="content">
      <img :src="category.image" :alt="category.title">

      <h1>{{ category.title }}</h1>
    </div>
  </NuxtLink>

</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  

}
</script>

<style scoped>
  h1 {
    font-size: 16px;
    color: #01569d;
  }

  .card {
    height: 170px;
    width: 170px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }

  img {
    height: 70px;
    width: 70px;
  }

  .content {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1.23rem;
  }


  a:hover > .content img {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }


  @media (max-width: 576px){
 
    .card {
      height: 100px;
      width: 100px;
    }

    h1 {
      font-size: 16px;
      color: #01569d;
    }

    img {
      height: 100px;
      width: 100px;
    }

    .content {
      padding: 5px;
    }

  }

</style>