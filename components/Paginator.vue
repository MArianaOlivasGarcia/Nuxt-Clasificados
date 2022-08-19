
<template>
    <!-- <div class="pagination"> -->
      <div>

      <a :href="urlTo" v-if="currentPage != 1"><i class="fas fa-chevron-left"></i></a>
      <!-- <a  v-if="currentPage != 1"
        @click="changePage( currentPage - 1)"><i class="fas fa-chevron-left"></i></a> -->
      <!-- <a  v-for="page in  (currentPage <= 2) ? pages.slice( 0, currentPage+4 ) : pages.slice( currentPage-3, currentPage+2 )" 
        :key="page"
        :class="(currentPage == page ) ? 'active' : null"
        @click="changePage( page )"><span>{{ page }}</span></a> -->
        <select class="paginatorSelect mx-3" v-model="currentPage"  @change="onChange($event)">
          <option v-for="page in pages" :key="page" :value="page">Página {{ page }} de {{ lastPage }}</option>
        </select>
      <!-- <a  v-if="currentPage != lastPage"
        @click="changePage( currentPage + 1 )"><i class="fas fa-chevron-right"></i></a> -->
        <a v-if="currentPage != lastPage" :href="urlTo"><i class="fas fa-chevron-right"></i></a>
      </div>

    <!-- </div> -->
</template>

<script>

export default {
    props: {
      totalResults: {
        type: Number,
        required: true
      },
      // ids: {
      //   type: String
      // }
    },
    data(){
        return {
            currentPage: 1,
            totalPages: 0,
            lastPage: 0, // Puede ser el totalPages tambien
            /* Arreglo de paginas */
            pages: [],
    
            nameRoute: '',

            urlTo: '',
            urlBack: '',
        }
    },
    created(){
        const page = this.$route.query.pagina;
        this.totalPages = Math.trunc(this.totalResults / 20) + 1
        this.lastPage = this.totalPages
        
        if ( page ) {
            this.currentPage = Number( page )
        }

        for (let i = 1; i <= this.totalPages; i++) {
            this.pages.push(i)
        }

        this.nameRoute = this.$route.name;

        this.urlTo = `/bienesraices/${this.$route.params.search}?pagina=${this.currentPage + 1}`;
        this.urlBack = `/bienesraices/${this.$route.params.search}?pagina=${this.currentPage - 1}`;

    },
    methods: {
        changePage( page ){
          this.currentPage = page
          const urlTo = `/bienesraices/${this.$route.params.search}?pagina=${this.currentPage}`;
          console.log(urlTo)

          return;
          
          // this.$router.push({
          //     name: this.nameRoute,
          //     params: this.$route.params,
          //     query: {
          //         pagina: this.currentPage,
          //     }
          // })
    
          window.scroll(0,0)

        },
        onChange( event ) {
          // console.log(event.target.value)
          this.$router.push({
              name: this.nameRoute,
              params: this.$route.params,
              query: {
                  pagina: this.currentPage,
              }
          })
          window.scroll(0,0)

        }

    }
    
}

</script>

<style scoped>

.pagination {
  display: inline-block;
}

.pagination a {
  border-radius: 100%;
  color: black;
  cursor: pointer;
  float: left;
  height: 48px;
  padding: 8px 17px;
  text-align: center;
  text-decoration: none;
  transition: background-color .3s;
  width: 48px;
}

.pagination a.active {
  background-color: #0B5DA3;
  border: 2px solid #FFD80B;
  color: white;
}

.pagination i{
  color: #0B5DA3;
}

.pagination a:hover:not(.active) {background-color: #ddd;}


select.paginatorSelect {
  border: 0px;
  background: transparent;
}

</style>