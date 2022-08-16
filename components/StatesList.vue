


<template>
  <div class="container">
            <div class="col-md-12 heading-section text-center mb-2">
                <h5 class="mb-4">ESTADOS</h5>
            </div>
            <div class="row d-flex wow slideInUp states-container" style="    justify-content: center;">
                <StateSmall
                    v-for="state in states"
                    :key="state.id"
                    :state="state"
                />
            </div>
        </div>
</template>

<script>



export default {
    props: {
        states: {
            type: Array,
            required: true,
        }
    },
  created(){
  },
  mounted(){
  },
}
</script>

<style scoped>
h5 {
    font-size: 2rem;
    font-weight: 700;
    position: relative;
}
h5:after, h5:before {
    width: 100px;
    height: 4px;
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: #00569f;
    content: '';
}
</style>