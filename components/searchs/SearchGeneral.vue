
<template>
    <div >

    <div class="search-container" v-on:click="close()">
    </div>

         <form v-on:submit.prevent="goToResults">
           <!-- <label>¿No tiene seleccionado un municipio?</label> -->
           <div class="input-container">
            <input type="text" 
              autocomplete="off"
              v-model="keyword"
              id="input-search" 
              placeholder="¿Que deseas buscar?" 
              class="form-control">
              <button
                type="submit"
                value="Search"
                class="btn btn-search">
                BUSCAR 
              <i class="fas fa-search"></i>
          </button>
         </div>
        </form>
      </div>

</template>

<script>
export default {
  data(){
    return {
      keyword: ''
    }
  },
  methods: {
    close(){
      this.$store.commit('setShowSearchGeneral', false)
    },
    goToResults() {
      this.$store.commit('setShowSearchGeneral', false)

      if ( this.keyword.trim() == '' ) {
        return;
      }

      this.$router.push({
        name: 'category',
        query: {
            keyword: this.keyword.trim(),
            page: 1
        }
      });

    }
  }
}
</script>

<style scoped>
.search-container {
    z-index: 97;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5); 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}


#input-search {
  height: 55px !important;
  border: none;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;

  border-top-left-radius: 25px !important;
  border-bottom-left-radius: 25px !important;
}

.btn-search {
  color: white !important;
  transition: 0.2s all ease-in;
  background-color: #00569d !important;

  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}


.btn-search:hover{
  background-color: #043a68 !important;
  transition: 0.2s all ease-in;
  color: #F3E22B !important;
}

.input-container {
  z-index: 99;
  top: 50%;
  left: 22.5%;
  position: fixed;
  width: 55%; 
  display: flex; 
  box-shadow: rgba(0, 0, 0, .5) 0px 7px 29px 0px;
  border-radius: 30px;
}

</style>