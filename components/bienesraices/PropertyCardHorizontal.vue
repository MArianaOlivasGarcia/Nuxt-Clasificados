<template>

  <div class="card">
    <NuxtLink :to="route" class="imageContent">
      <img v-if="!noImage" :src="property.image" :alt="property.name" @error="imageLoadError">
      <img v-else src="@/static/images/property-placeholder.jpeg" :alt="property.name">
    </NuxtLink>
    <NuxtLink :to="route" class="card-body">

      <h5 class="pricecard m-0">$ {{ property.price }} {{ property.currency }}</h5>
      <div class="postcard-bar"></div>
      <p class="card-text"><small class="text-muted" style="font-size: 14px">{{ property.city }}, {{ property.state }}</small></p>
      <p class="card-text">{{ property.name }}</p>
      <div class="text-center">
        <span v-if="property.bedrooms > 0"><i class="icon-big-bed-with-one-pillow pl-2 pr-1"></i>{{ property.bedrooms }}</span>
        <span v-if="property.bathrooms > 0"><i class="icon-bath pl-2 pr-1"></i>{{ property.bathrooms }}</span>
        <span v-if="property.m2c > 0"><i class="icon-ruler pl-2 pr-1"></i>{{ property.m2c }} m<sup>2</sup></span>
        <span v-if="property.mlot > 0"><i class="icon-text  pl-2 pr-1"></i>{{ property.mlot }} m<sup>2</sup></span>
      </div>

      <div style="width: 100%; height: 20px;"></div>
    

    
    </NuxtLink>
    <span class="operation">{{ property.operation }}</span>
    <span class="type">{{ property.tipo }}</span>
    <span v-if="property.destacado == '1'" class="destacado">Destacado <i style="color: #e7b211 !important" class="fas fa-star"></i></span>
    <div v-if="whatsNumber" @click="sendWhats()" class="whats-contact"><span>Contactar al asesor</span><i class="fab fa-whatsapp ml-2"></i></div>
    <div class="user-info">
      <img v-if="!property.userdata[0].image || property.userdata[0].image == '0'" class="user-image" src="@/static/images/property-placeholder.jpeg" alt="">
      <img v-else class="user-image" :src="property.userdata[0].image" :alt="property.userdata[0].name.trim()">
      <span>{{ nameInmo }}</span></div>
  </div>
</template>

<script>

import helpers from '@/helpers/helpers'


export default {
  props:{
      property: {
          type: Object,
          required: true
      }
  },
  data() {
      return {
        noImage: false,
        whatsNumber: '',
        nameInmo: '',
      }
  },
   created() {
    console.log(this.property)
    this.route = `/bienesraices/propiedad/${helpers.normalize( this.property.name )}_${ this.property.productoid }.html`;

    if ( !this.property.userdata  ) {
      this.whatsNumber = null;
      this.nameInmo = null;
      return;
    }

    if ( !this.property.userdata[0]?.cellphone ) {
      this.whatsNumber = null;
    } else {
        this.whatsNumber = this.property.userdata[0]?.cellphone.replace('(', '')
          .replace(' ', '')
          .replace(')', '')
          .replace('-', '') 
    }

    if ( !this.property.userdata[0]?.name ){
      this.nameInmo = null;
    } else {
      this.nameInmo = this.property.userdata[0]?.name.trim();
    }

  },
  methods: {
    imageLoadError() {
        this.noImage = true;
    },
    sendWhats() {
      this.$store.commit('setWhatsContactValues', {
        whatsappInmo: this.whatsNumber,
        nameInmo: this.nameInmo,
        propertyId: this.property.productoid
      })

       this.$store.commit('setShowWhatsForm', !this.showWhatsForm)
    },
  }
}
</script>

<style scoped>
    .card {
      /* box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px; */
      height: 280px !important;
      border-radius: 0px !important;
      border: none !important;
      display: flex;
      flex-direction: row;
      margin-bottom: 15px
    }
    .imageContent {
      height: 280px;
      width: 240px;
    }

     .imageContent > img{
      height: 280px;
      width: 240px;
      object-fit: fill;
    }

    .card:hover {
        cursor: pointer;
    }
    a:hover {
        color: black;
    }

    span.operation {
        position: absolute;
        left: 1.25rem;
        top: 1.25rem;
        padding: 0px 10px;
        background-color: #f2e115;
    }
    span.type {
        position: absolute;
        bottom: 1.25rem;
        left: 1.25rem;
        padding: 0px 10px;
        background-color: #f2e115;
        font-size: 14px;
    }

    span.destacado {
        position: absolute;
        right: 1.25rem;
        top: 1.25rem;
        padding: 0px 10px;
        border-radius: 10px;
        /* background-color: #01569D; */
        border: 1px solid black;
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

    p {
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4; 
        -webkit-box-orient: vertical;
    }
    i {
        color: #01569D;
    }


    .card-body {
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
    }


    .pricecard {
      color: #01569D;
      font-weight: 500;
    }


    i.fa-whatsapp{
      font-size: 20px !important;
      color: #fff;
    }

    img.user-image {
      height: 40px;
      width: 40px;
      border-radius: 100%;
    }


    div.whats-contact {
        position: absolute;
        bottom: 0px;
        right:  0px;
        padding: 5px 10px;
        background-color: #3FC250; 
        font-size: 14px;
    }


    div.whats-contact:hover {
        background-color: #fff; 
        border: 1px solid #3FC250;
    }

    
    div.whats-contact:hover > i.fa-whatsapp {
      color: #3FC250;
    }


    div.whats-contact > span {
      color: white;
      font-size: 12px;
    }

    div.whats-contact:hover > span {
      color: #3FC250;
      font-size: 12px;
    }


    div.user-info {
        position: absolute;
        bottom: 0px;
        left:  240px;
        padding: 5px 10px;
        font-size: 12px;
    }



    @media (max-width: 768px) {
      .card {
        flex-direction: column;
        height: 480px !important;
      }

      .imageContent {
        height: 210px;
        width: 100%;
      }

      .imageContent > img{
        height: 210px;
        width: 100%;
        object-fit: fill;
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

      span.type {
        top: 12.25rem;
        bottom: auto;
      }

      div.user-info {
        left: auto;
      }

      span.destacado {
        top: 14rem;
      }

      span.destacado > i {
        font-size: 14px;
      }

    }



</style>
