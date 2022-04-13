
<template>
  <NuxtLink :to="route" class="card">
    <div class="imageContent">
      <img class="card-img-top" :src="`https://clasificadoscontacto.com${property.largephoto}`" :alt="property.alt">
      <span class="type">{{ property.tipo }}</span>
    </div>
    <div class="card-body">
        <!-- <h5 class="card-title pricecard">$ 220,000,000 MXN</h5> -->
        <!-- <div class="postcard-bar"></div> -->
        <!-- <p class="card-text"><small class="text-muted" style="font-size: 14px">Querétaro, Querétaro</small></p> -->
        <p class="card-text">{{ property.description }}</p>
        <!-- <div class="text-center">
            <span ><i class="icon-big-bed-with-one-pillow pl-2 pr-1"></i>8</span>
            <span><i class="icon-bath pl-2 pr-1"></i>2</span>
            <span><i class="icon-ruler pl-2 pr-1"></i>199 m<sup>2</sup></span>
            <span><i class="icon-text  pl-2 pr-1"></i>209 m<sup>2</sup></span>
        </div> -->
    </div>

    <span class="operation">{{ 'Desarrollo' }}</span>
  </NuxtLink>
</template>

<script>
export default {
    props:{
        property: {
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
        this.route = this.property.url
        console.log(this.property)
    }

}
</script>

<style scoped>
    .card {
        /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important; */
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
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
    }
    img {
        height: 100%;
        object-fit: fill;
    }
    h5 {
        margin-top: 0px !important;
    }
    p {
        /* text-align: justify; */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
           line-clamp: 5; 
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


</style>