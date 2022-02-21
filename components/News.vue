


<template>
    <div class="pt-4 pb-5">
        <div class="m-5">
            <div class="text-center m-5 m-md-0" >
                    <h5>NOTICIAS</h5>
            </div>
            <div class="container mt-5 pt-3">

            <div class="row" style="justify-content: center; align-items: center;" >
                    <div v-if="isLoading" class="mt-5 spinner-border text-warning" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="col-md-3"  
                        v-else
                        v-for="article in articles"
                        :key="article._id">

                    <NewCard 
                        :article="article"
                         />
                        
                    </div>
                    
            </div>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
            articles: []
        }
    },
    async  created(){
    
        const articles  = await this.$store.dispatch("getNews");
        
        if ( !articles ) {
            return;
        }
        
        this.articles = articles;
        this.isLoading = false;
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

.logo-empresa {
    height: 90px;
}

</style>