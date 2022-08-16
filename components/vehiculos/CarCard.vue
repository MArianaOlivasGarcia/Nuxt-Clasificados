
<template>
  <NuxtLink :to="route" class="card">
    <div class="imageContent">
      <img class="card-img-top" :src="vehiculo.image" :alt="vehiculo.name">
      <span class="type">{{ vehiculo.category }}</span>
      <span class="fav">
          <i class="fas fa-heart"></i>
          <i class="far fa-heart"></i>
        </span>
    </div>
    <div class="card-body">
        <div>
            <div style="display: flex;
                justify-content: space-between;
                align-items: center;">
                <h5 class="card-title pricecard m-0">$ {{ vehiculo.price }} {{ vehiculo.currency }}</h5>
                <span class="year">{{ vehiculo.year }}</span>
            </div>
            <div class="postcard-bar"></div>
            <p class="card-text"><small class="text-muted" style="font-size: 14px">{{ vehiculo.city }}, {{ vehiculo.state }}</small></p>
            <h2 class="card-text">{{ vehiculo.name }}</h2>
        </div>
        <div class="text-center">
            <span ><i class="fas fa-car pl-2 pr-1"></i>{{vehiculo.usename ? Number(vehiculo.usename.split(' ')[0]).toLocaleString() : NaN}} {{ vehiculo.usename && vehiculo.usename.split(' ')[1] }}</span>
            <!-- <span ><i class="fas fa-motorcycle pl-2 pr-1"></i>{{ vehiculo.km }} km</span> -->
        </div>


        
    </div>
    <span class="operation">{{ vehiculo.operation }}</span>

  </NuxtLink>

</template>

<script>

import helpers from '@/helpers/helpers'


export default {
    props: {
        vehiculo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            route: ''
        }
    },
    created() {
        this.route = `/vehiculos/detalle/${helpers.normalize( this.vehiculo.name )}_${ this.vehiculo.productoid }.html`
    },

}
</script>

<style scoped>
    .card {
        /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; */
        height: 440px !important;
    }
    .card:hover {
        cursor: pointer;
    }
    .imageContent {
        height: 220px !important;
    }
    .card-body {
        height: 220px !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    img {
        height: 100%;
        object-fit: cover;
    }
    h5 {
        margin-top: 0px !important;
    }
    h2 {
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3; 
        -webkit-box-orient: vertical;
        font-size: 16px;

    }

    span.operation {
        position: absolute;
        right: 1.25rem;
        top: 1.25rem;
        padding: 0px 10px;
        background-color: #f2e115;
    }
    span.type {
        position: absolute;
        left: 1.25rem;
        top: 205px;
        padding: 0px 10px;
        background-color: #f2e115;
        font-size: 14px;
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
    i {
        color: #01569D;
    }
    a:hover {
        color: black;
    }
    .pricecard {
      color: #01569D;
      font-weight: 500;
    }

    span.year {
        border: 1px solid;
        padding: 0 10px;
        font-size: 13px;
        color: #6c757d;
    }




    span.fav {
        position: absolute;
        right: 1.25rem;
        top: 11rem;
        padding: 8px 10px 5px 10px;
        /* background-color: #f2e115; */
        font-size: 14px;
    }

    i.fas.fa-heart {
        display: none;
    }


    span.fav:hover > i.fas.fa-heart {
        display: contents;
        
    }
    span.fav:hover > i.far.fa-heart {
        display: none;
    }


    i.fa-heart {
        font-size: 24px;
        /* color: #01569D; */
        color: #f2e115;
    }

</style>