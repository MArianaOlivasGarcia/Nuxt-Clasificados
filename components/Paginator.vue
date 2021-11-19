
<template>
    <div class="pagination">
      <a  v-if="currentPage != 1"
        @click="changePage( currentPage - 1)"><i class="fas fa-chevron-left"></i></a>
      <a  v-for="page in  (currentPage <= 2) ? pages.slice( 0, currentPage+4 ) : pages.slice( currentPage-3, currentPage+2 )" 
        :key="page"
        :class="(currentPage == page ) ? 'active' : null"
        @click="changePage( page )"><span>{{ page }}</span></a>
      <a  v-if="currentPage != lastPage"
        @click="changePage( currentPage + 1 )"><i class="fas fa-chevron-right"></i></a>
    </div>
</template>

<script>

export default {
    props: {
      totalResults: {
        type: Number,
        required: true
      }
    },
    data(){
        return {
            currentPage: 1,
            totalPages: 0,
            lastPage: 0, // Puede ser el totalPages tambien
            /* Arreglo de paginas */
            pages: []
        }
    },
    created(){
        const { page } = this.$route.query;
        this.totalPages = Math.trunc(this.totalResults / 20) + 1
        this.lastPage = this.totalPages
        
        if ( page ) {
            this.currentPage = Number( page )
        }

        for (let i = 1; i <= this.totalPages; i++) {
            this.pages.push(i)
        }
    },
    methods: {
        changePage( page ){
            this.currentPage = page

            this.$router.push({
                name: 'category',
                query: {
                    ...this.$route.query,
                    page: this.currentPage
                }
            })
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
  color: #232323;
}

.pagination a:hover:not(.active) {background-color: #ddd;}

</style>