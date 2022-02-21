

<template>
  <div>
    <div class="text-center">
            <h3>{{ title }} {{ userStateLocation.name.toUpperCase() }}</h3>
    </div>

    <div  class="contenedor">

        <div v-if="isLoading" class="text-center">
          <div class="spinner-border text-warning" role="status">
            <span class="sr-only">Cargando...</span>
          </div>
        </div>

        <vue-horizontal-list v-else  :items="items" :options="options">

            <!-- <template v-slot:nav-prev>
              <div >👈</div>
            </template>

            <template v-slot:nav-next>
              <div>👉</div>
            </template> -->
            
          <template v-slot:default="{ item }">
              <PropertyCard :item="item"/> 
          
            
            <!-- <div style="background: red" class="p-1">
              <div class="image-container">
                <div class="image-content">
                  <img :src="item.image" />

                  <div class="image-text">
                    <h2>{{ item.title }}</h2>
                  </div>
                </div>
              </div>

              <div class="subtitle">SUBTITLE • FOCUS</div>

              <p>{{ item.content }}</p>
            </div> -->


          </template>
        </vue-horizontal-list>
    

    </div>


  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {

  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      items: [],
      options: {
        responsive: [
            { end: 576, size: 1 },
            { start: 576, end: 768, size: 2 },
            { start: 768, end: 992, size: 3 },
            { start: 992, end: 1200, size: 4 },
            { start: 1200, size: 5 },
        ],
        navigation: {
          start: 992,
          color: "#135DA3",
        },
      },
      isLoading: true  
    };
  },
   computed: {
    ...mapGetters({
        userStateLocation: 'getUserStateLocation',
    })
   },
  watch: {
    'userStateLocation': {
       async handler(newValue, oldValue) {
         this.getProperties()
       }}
  },
   async created() {
      this.getProperties()
   },
   methods: {
    async getProperties( ) {
        this.isLoading = true;
        const { data } = await this.$store.dispatch("searchProducts", {
            operation: 1, 
            page:1, 
            limit:10, 
            state: this.userStateLocation.folio
        })
        this.items = data 
        this.isLoading = false;
     }
   }
};
</script>

<style scoped>

p,
h2 {
  margin-top: 4px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.subtitle {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  color: black;
  margin-bottom: 8px;
}
.image-container {
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 120%;
}

.image-text {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 32px 24px;
  display: flex;
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.4);
}
.image-text h2 {
  margin: 0;
  color: white;
  text-align: center;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

h3 {
    font-size: 2.3rem;
    font-weight: 700;
        position: relative;
}
h3:after, h3:before {
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


.contenedor {
  padding: 10px 70px !important;
}
</style>



