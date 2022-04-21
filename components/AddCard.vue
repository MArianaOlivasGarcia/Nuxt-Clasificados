
<template>
    <div class="card">
        <div class="content">

            <span class="category">{{ add.category }}</span>

            <div class="imageContent">
                <img :src="add.image" :alt="add.title">
            </div>
            <div class="d-flex justify-content-center descriptionContent">
                <p class="m-2">{{ add.subtitle }}</p>
                <h1 class="m-2">{{ add.title }}</h1>

                <button class="btn btn-primary m-2">Ver más...</button>
            </div>
        </div>
    </div>
</template>

<script>

/**
 * 
 * id
title
subtitle
image
url
category
 */
export default {
    props: {
        add: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .card {
        height: 250px !important;
        border-radius: 0px !important;
        border: none !important;
        margin-bottom: 15px
    }

    .content {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    h1{
        font-size: 24px;
    }
    .imageContent {
      height: 250px;
      /* width: 240px; */
    }
    
    .imageContent > img{
      height: 100%;
      width: 190px;
      /* object-fit: scale-down; */
    }

    p {
        color: #6c757d !important;
    }


    .descriptionContent {   
        flex-direction: column;
        align-items: start;
        padding: 1.25rem;
    }


    span.category {
        position: absolute;
        top: 1.25rem;
        right: 1.25rem;
        padding: 0px 10px;
        background-color: #f2e115;
        font-size: 14px;
    }

</style>