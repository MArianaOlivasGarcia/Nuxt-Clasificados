<template>

  <div class="card">
      <NuxtLink  to="/" class="imageContent">
        <img src="https://www.clasificadoscontacto.com/views/users/3570/products/49777/images/WhatsApp%20Image%202022-03-17%20at%2012.32.58%20PM%20(1).jpeg" :alt="'dasd'">
      </NuxtLink>
    <NuxtLink to="/" class="card-body">

      <h5 class="pricecard m-0">$ {{ '250,000,000' }} {{ 'MXN' }}</h5>
      <div class="postcard-bar"></div>
      <p class="card-text"><small class="text-muted" style="font-size: 14px">{{ 'Quéretaro' }}, {{ 'Quéretaro' }}</small></p>
      <p class="card-text">{{ 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque necessitatibus dolores tenetur, adipisci eos, veritatis, deleniti provident soluta tempore enim similique iste. Quidem animi dignissimos molestias? Maiores, explicabo! Velit, repellat!' }}</p>
      <div class="text-center">
            <span><i class="icon-big-bed-with-one-pillow pl-2 pr-1"></i>{{ '5' }}</span>
            <span><i class="icon-bath pl-2 pr-1"></i>{{ '2' }}</span>
            <span><i class="icon-ruler pl-2 pr-1"></i>{{ '699' }} m<sup>2</sup></span>
            <span><i class="icon-text  pl-2 pr-1"></i>{{ '900' }} m<sup>2</sup></span>
      </div>

      <div style="width: 100%; height: 20px;"></div>
    

    
    </NuxtLink>
    <span class="operation">{{ 'Venta' }}</span>
    <span class="type">{{ 'Casa' }}</span>
    <span class="destacado">Destacado <i style="color: #e7b211 !important" class="fas fa-star"></i></span>
    <div class="whats-contact"><span>Contactar al asesor</span><i class="fab fa-whatsapp ml-2"></i></div>
    <div class="user-info"><img class="user-image" src="@/static/images/no-image.jpg" alt=""> <span>NOMBRE INMOBILIARIA</span></div>
  </div>
</template>

<script>
export default {

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

</style>
