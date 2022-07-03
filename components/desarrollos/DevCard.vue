
<template>

  <NuxtLink :to="route" class="card">
    <div class="imageContent">
      <img class="card-img-top" :src="dev.image" :alt="dev.name">
      <!-- <span class="type">{{ property.tipo }}</span> -->
      
    </div>
    <div class="card-body">
        <div>
            <h6 class="card-title pricecard m-0">Desde $ {{ dev.precmin ? Number(dev.precmin).toLocaleString() : '-'  }} hasta {{ dev.precmax ? Number(dev.precmax).toLocaleString() : '-'  }}</h6>
            <div class="postcard-bar"></div>
            <p class="card-text"><small class="text-muted" style="font-size: 14px">{{ dev.state }}, {{ dev.city }}</small></p>
            <h1 class="card-text">{{ dev.name }}</h1>
            <!-- <p class="text-description">{{ dev.descriptionlong }}</p> -->
            <p class="text-description">{{ text.length > 90 ? text.substring(0, 90) + '...' : text  }}</p>
            <p class="text-description"></p>
        </div>
        <!-- <div class="text-center"> -->
            <!-- <span v-if="property.bedrooms > 0"><i class="icon-big-bed-with-one-pillow pl-2 pr-1"></i>{{ property.bedrooms }}</span>
            <span v-if="property.bathrooms > 0"><i class="icon-bath pl-2 pr-1"></i>{{ property.bathrooms }}</span>
            <span v-if="property.m2c > 0"><i class="icon-ruler pl-2 pr-1"></i>{{ property.m2c }} m<sup>2</sup></span>
            <span v-if="property.mlot > 0"><i class="icon-text  pl-2 pr-1"></i>{{ property.mlot }} m<sup>2</sup></span> -->
        <!-- </div> -->
    </div>

    <!-- <span class="operation">{{ property.operation }}</span> -->
    <!-- <span class="fav">
          <i class="fas fa-heart"></i>
          <i class="far fa-heart"></i>
    </span> -->
  </NuxtLink>

</template>

<script>

import helpers from '@/helpers/helpers'


export default {
    props:{
        dev: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            route: '',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, delectus quis hic magnam inventore excepturi maiores reiciendis temporibus quos. Expedita ullam quod aliquam enim veniam provident id reiciendis ea perferendis.'
        }
    },
     created() {
        // console.log(this.dev)
        this.route = `/desarrollos/detalle/${helpers.normalize( this.dev.name )}_${ this.dev.developmentid }.html`
        // console.log(this.route)
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

    .text-description{
        font-size: 14px;
        text-align: justify;
    }

</style>