

<template>
    <div class="col-md-6 p-0 pr-3">
      <NuxtLink :to="route">
          <div class="card my-2">
            <div class="imageContent">
              <img v-if="prototype.image" :src="'https://clasificadoscontacto.com/' + prototype.image" :alt="prototype.name">
              <img v-else src="@/static/images/property-placeholder.jpeg" :alt="prototype.name">
              <span class="type">{{ prototype.totalunit }} unidades</span>
            </div>
            <div class="bodyContainer p-3">
              <h5 class="card-title pricecard m-0">Venta $ {{ prototype.price && Number(prototype.price).toLocaleString() }} {{ prototype.currency }}</h5>
              <h5 class="card-title pricecard m-0 mt-2">Renta $ {{ prototype.pricer && Number(prototype.pricer).toLocaleString() }} {{ prototype.currencyr }}</h5>
              <div class="postcard-bar"></div>

              <h2 class="card-text m-0">{{ prototype.name }}</h2>
              <p class="mt-2">{{ prototype.description.length > 65 ? prototype.description.substring(0,65) + '...' : prototype.description }}</p>
            </div>
          </div>
      </NuxtLink>
    </div>
</template>

<script>

import helpers from '@/helpers/helpers'

export default {
    props: {
        prototype: {
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
        const { fullPath } = this.$route;
        this.route = fullPath.split('.')[0] + '/' + helpers.normalize( this.prototype.name ) + '_'  + this.prototype.prototypeid + '.html';
    }
}
</script>



<style scoped>
  .card {
      height: 375px;
      border-radius: 0px;
  }
  .card:hover {
    cursor: pointer;
  }
  .imageContent {
    height: 220px !important;
  }
  img {
      height: 100%;
      object-fit: cover;
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

  h5 {
    font-size: 1rem;
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
    span.type {
        position: absolute;
        right: 1.25rem;
        top: 1rem;
        padding: 0px 10px;
        background-color: #f2e115;
        font-size: 14px;
    }
</style>