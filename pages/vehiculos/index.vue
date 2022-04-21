<template>
    <main class="clean">


        <SliderAdds :adds="adds" />
    
    <section class="searchContainer container mt-5 mb-5" >
        
        <div class="col-md-7">
            <CarsSearch />
        </div>

        <div class="titleContainer col-md-5">
            <h3>¿Qué deseas buscar?</h3>
            <h4 class="text-justify">En <b>Clasificados contacto</b>, lo buscas lo encuentras, lo anuncias lo <b>vendes</b>. </h4>
        </div>

    </section>



    <CarsList />



    <IconScroll /> 


    </main>
</template>

<script>

export default {
    head: {
      titleTemplate: 'Clasificados Contacto | Vehículos',
    },
    async created(){

       
    },
    data() {
        return {
            adds: [{
                image: 'https://www.seminuevosalonso.com.mx/sites/default/files/styles/destacada/public/destacada/2018-07/slide_comonuevos.png?itok=RnRizcWV',
                url: 'https://www.seminuevosalonso.com.mx/sites/default/files/styles/destacada/public/destacada/2018-07/slide_comonuevos.png?itok=RnRizcWV'
            },
            {
                image: 'https://mye.cl/upload/paginas/archivos/22-09-2020-07-38-37_banner2.jpg',
                url: 'https://mye.cl/upload/paginas/archivos/22-09-2020-07-38-37_banner2.jpg'
            }]
        }
    }
  
} 

</script>


<style scoped>

    .clean{
        background: #ebebeb !important;
    }

    .img-home{
    width: 100% !important;
    }


    .states-container {
        justify-content: center;
    }

    video {
        width: 100%;
    }


    .searchContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }



    @media (min-width: 576px){
        .card-columns.dev{
            column-count: 4 !important;
        }
    }


    @media (max-width: 576px) {
        .searchContainer{
            flex-direction: column;
        }

        .titleContainer {
            text-align: center;
            margin-bottom: 10px;
        }
    }

</style>