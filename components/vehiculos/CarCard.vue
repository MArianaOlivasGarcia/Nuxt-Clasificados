
<template>
  <NuxtLink :to="route" class="card">
    <div class="imageContent">
      <img class="card-img-top" :src="'https://http2.mlstatic.com/D_NQ_NP_2X_720872-MLM49581896998_042022-F.webp'" :alt="'carro titulo'">
    </div>
    <div class="card-body">
        <div>
            <h5 class="card-title pricecard">$ {{ '100,000' }} {{ 'MXN' }}</h5>
            <div class="postcard-bar"></div>
            <p class="card-text"><small class="text-muted" style="font-size: 14px">{{ 'Cancún' }}, {{ 'Quintana Roo'}}</small></p>
            <p class="card-text">{{ 'ajsdkjasdas' }}</p>
        </div>
        
    </div>

  </NuxtLink>

</template>

<script>

import helpers from '@/helpers/helpers'


export default {
    
    data() {
        return {
            route: ''
        }
    },
     created() {
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
        object-fit: fill;
    }
    h5 {
        margin-top: 0px !important;
    }
    p {
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3; 
        -webkit-box-orient: vertical;
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

</style>