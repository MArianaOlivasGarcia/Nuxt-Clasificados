<template>
  <div
    class="
      col-xl-3
      col-lg-4
      col-md-6
      col-sm-12
      d-flex
      align-self-stretch
      ftco-animate
      cardgeneral
      mb-3
      pb-3
      pt-3
      states-img
    "
  >
    <div class="card box"
        @click="goToProperty()">
      <a class="card-thumb">
        <img
          id="propImg"
          :src="state.image"
          :alt="state.name"
          class="card-img-top "
        />
        <h4 class="card-title text">{{ state.name }} </h4>  
      </a>
    </div>
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
    methods: {
      goToProperty() {
        this.$router.push({
          name: `state-folio`,
          params: { folio: this.state.folio },
          query: { name: this.state.name },
        })
      }
    }
    
}
</script>



<style scoped>
.states-img .card{
  border: inherit;
}
.states-img #propImg {
  width: 100vw;
  height: 200px;
  cursor: pointer;
  transition: .3s all ease;
}
.states-img #propImg:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,.35);
    transform: scale(1.05);
}
.states-img .card-thumb{
  overflow: hidden;
  position: relative;
  display: block;
}

@media (max-width: 767px) {
  .states-img #contain_tarjet_property {
    width: 65%;
  }
  .states-img #propImg {

    height: auto;
  }
}

.states-img .card-img-top {
  width: 100%;
  border-radius: 15px;
  border: none;
  object-fit: cover;
}
.states-img .box {
    position: relative;
}
.states-img .box .text {
    position: absolute;
    z-index: 1;
    text-align: center;
    bottom: 18px;
    left: 0;
    background: rgba(0,0,0,.7);
    color: #fff;
    width: 100%;
    height: -1%;
    padding: 15px;
    font-weight: 300;
    transition: all .4s ease-out;
}
</style>