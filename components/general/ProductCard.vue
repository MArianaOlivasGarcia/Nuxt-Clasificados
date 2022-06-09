<template>
    <NuxtLink :to="route" class="card">
    <div class="imageContent">
      <img class="card-img-top" :src="item.image" alt="foto">
      <span class="category">{{ item.category ? item.category : 'Bienes Raíces'  }}</span>
      <span class="fav">
          <i class="fas fa-heart"></i>
          <i class="far fa-heart"></i>
        </span>
    </div>
        <div class="card-body">
            <h5 class="card-title pricecard m-0">$ {{ item.price }} {{ item.currency }}</h5>
            <div class="postcard-bar"></div>
            <p class="card-text"><small class="text-muted" style="font-size: 14px">{{ item.city }}, {{ item.state }}</small></p>
            <h1 class="card-text">{{ item.name }}</h1>
            
        </div>
    </NuxtLink>

</template>

<script>
import helpers from '@/helpers/helpers'

/*

data = [
    {
        id: '123'
        name: 'Nissan Platina',
        image: 'Nissan Platina',
        category: 'Vehiculos',
        price: '40,000.00',
        currency: 'MXN',
        state: 'Queretaro',
        city: 'Queretaro'
    }
]

*/
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            route: '',
            // TODO: QUITAR CUANDO YA TRAIGA CATEGORY
        }
    },
    created() {

        const hasCategory = this.item.category ?? 'Bienes Raíces' ;


        const category = hasCategory.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(' ', '');

        this.route = `/${ category }/${ category == 'bienesraices' ? 'propiedad' : 'detalle' }/${helpers.normalize( this.item.name )}_${ this.item.productoid }.html`
    }
}
</script>

<style scoped>
    .card {
        height: 360px !important;
    }

    h1 {
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3; 
        -webkit-box-orient: vertical;
        font-size: 16px;
    }
    a:hover {
        color: black !important;
    }
    .pricecard {
      color: #01569D;
      font-weight: 500;
    }

    .postcard-bar {
        width: 50px;
        height: 3px;
        margin: 10px 0;
        border-radius: 5px;
        background-color: #f2e115;
        transition: width 0.2s ease;
    }
    .card:hover .postcard-bar {
        width: 100px;
    }

    .imageContent {
        height: 180px !important;
    }

    img {
        height: 100%;
        object-fit: cover;
    }

    span.category {
        position: absolute;
        right: 1.25rem;
        top: 1.25rem;
        padding: 0px 10px;
        background-color: #f2e115;
        font-size: 14px;
    }


    span.fav {
        position: absolute;
        right: 1.25rem;
        top: 9rem;
        padding: 8px 10px 5px 10px;
        /* background-color: #f2e115; */
        font-size: 14px;
    }

    i.fas {
        display: none;
    }


    span.fav:hover > i.fas {
        display: contents;
        
    }
    span.fav:hover > i.far {
        display: none;
    }


    i {
        font-size: 24px;
        /* color: #01569D; */
        color: #f2e115;
    }

</style>