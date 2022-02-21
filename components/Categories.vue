


<template>
  <div class="contenedor shadow">
    <vue-horizontal-list :items="categories" :options="options">
      <template v-slot:default="{ item }">
          <NuxtLink :to="`/category?category=${ item.value }&state=${ userStateLocation.folio }`">
            <div class="item p-0">

                <!-- <img :src="require(`~/assets/images${ 1}.png`)" /> -->
                <img :src="`/images/categories/properties/${ item.value }.png`" alt="">
                <h2>{{ item.name }}</h2>
            </div>
          </NuxtLink>
      </template>
    </vue-horizontal-list>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
     
      options: {
          list: {
              padding: 0,
            },
        responsive: [
          { end: 576, size: 4 },
          { start: 576, end: 768, size: 6 },
          { start: 768, end: 992, size: 7 },
          { start: 992, end: 1200, size: 8},
          { start: 1200, size: 9 },
        ],
         item: {
          class: "item-custom-name",
          padding: 6,
        },
        navigation: {
          color: "#135DA3",
        },
      },
    };
  },
    computed: {
        ...mapGetters({
          categories: 'getPropertiesTypes',
          userStateLocation: 'getUserStateLocation'
        })
    }
};
</script>

<style scoped>
.item {
    text-align: center;
    border-radius: 3px;
    background-color: #135DA3;
    border-radius: 20px;
}


.item img {
    height: 38px;
    width: 38px;
    margin-bottom: 5px;
    margin-top: 15px;
}


.item:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
}

.item:hover > h2 {
    color: #f2e115 !important;
}


.item-custom-name h2 {
  color: white !important;
  margin: 0px;
  padding-bottom: 15px;
  font-size: 14px;
}


.contenedor {
    /* background-color: #FFE8AE; */
    padding: 0px  3.2%;
}

</style>



