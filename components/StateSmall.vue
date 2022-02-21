


<template>
  <div class="p-0 col-lg-2 col-md-3 col-sm-3 col-6 state-container">
    <NuxtLink :to="`/estado/${ state.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-').toLowerCase() }_${ state.folio }.html`" class="card m-2">
      <img :src="state.image" :alt="state.image">
      <h4>{{ state.name }}</h4>
    </NuxtLink>
  </div>
</template>

<script>

export default {
  props: {
      state: {
        type: Object,
        required: true
      }
  },
}
</script>

<style scoped>

a.card {
  height: 130px;
  border-radius: 10px;
  border: none;
  overflow: hidden;
  position: relative;
  display: block;
}



img {
  width: 100%;
  height: 130px;
  overflow: hidden;
  position: relative;
  display: block;
  border-radius: 10px;
  cursor: pointer;
  transition: .3s all ease;
}


img:hover {
    transform: scale(1.05);
}


.state-container:hover > a.card {
    box-shadow: 0 5px 15px rgba(0,0,0,.35) !important;
}


h4 { 
    position: absolute;
    z-index: 1;
    text-align: center;
    bottom: 8px;
    left: 0;
    background: rgba(0,0,0,.7);
    color: #fff;
    width: 100%;
    height: -1%;
    font-weight: 300;
    padding: 10px 0px;
    font-size: 15px;
    transition: all .4s ease-out;
    cursor: pointer;
}

</style>