

<template>
  <section class="mt-5">
        <div class="container">
            <div class="row justify-content-center mb-2 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4">CATEGORÍAS</h2>
                </div>
            </div>

            <!-- <SectionLoader v-if="outstanding.length == 0"/> -->
            
            <div class="card-columns">
              <CategoryCard 
                v-for="category in categories"
                :key="category.id"
                :category="category" />
            </div>

        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {
            categories: [{
                id: '1',
                title: 'Inmuebles',
                image: 'https://img.icons8.com/carbon-copy/344/01569d/home.png',
                url: '/bienesraices'
            },
            {
                id: '2',
                title: 'Vehículos',
                image: 'https://img.icons8.com/dotty/344/01569d/fiat-500.png',
                url: '/vehiculos'
            },
            // {
            //     id: '3',
            //     title: 'Empleos',
            //     image: 'https://img.icons8.com/dotty/344/01569d/briefcase.png',
            //     url: ''
            // },
            // {
            //     id: '4',
            //     title: 'Tecnología',
            //     image: 'https://img.icons8.com/external-icongeek26-outline-icongeek26/344/01569d/external-laptop-lifestyle-icongeek26-outline-icongeek26.png',
            //     url: ''
            // },
            // {
            //     id: '5',
            //     title: 'Casa y Hogar',
            //     image: 'https://img.icons8.com/carbon-copy/344/01569d/home-page.png',
            //     url: ''
            // },
            // {
            //     id: '6',
            //     title: 'Mascotas',
            //     image: 'https://img.icons8.com/dotty/2x/01569d/pets.png',
            //     url: ''
            // },
            // {
            //     id: '7',
            //     title: 'Viajes',
            //     image: 'https://img.icons8.com/external-outline-satawat-anukul/344/01569d/external-travel-travel-outline-outline-satawat-anukul-49.png',
            //     url: ''
            // },
            // {
            //     id: '8',
            //     title: 'Educación',
            //     image: 'https://img.icons8.com/dotty/2x/01569d/education.png',
            //     url: ''
            // },
            // {
            //     id: '9',
            //     title: 'Inversiones',
            //     image: 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/344/01569d/external-dollar-finance-kiranshastry-lineal-kiranshastry.png',
            //     url: ''
            // },
            // {
            //     id: '10',
            //     title: '¿No encontraste lo que buscabas?',
            //     image: 'https://img.icons8.com/dotty/2x/01569d/question-mark.png',
            //     url: ''
            // }
            ]
        }
    }

}
</script>

<style scoped>

    /* DESCOMENTAR CUANDO HAYA MÁS CATEGORIAS */
    .card-columns {
        display: flex !important;
        justify-content: center !important;
    }

    @media (min-width: 768px){
 
        .card-columns{
            column-count: 5 !important;
           
        }
    }

    @media (max-width: 576px){
 
        .card-columns{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        a {
            width: 80% !important;
            height: 200px !important;
        }

    }

</style>