

<template>
  <div>
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>


    <div class="row">
      <!-- <div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div> -->
      <div v-for="(image, imageIndex) in items"
          :key="imageIndex"
          :class="
            items.length > 1 && items.length > totalPermit && imageIndex > totalPermit-1 
              ? 'd-none' : 'col-md-6 p-0' ">
          <div style="position: relative;" class="m-1">
          <img 
          class="image"
          @click="index = imageIndex"
          :src="image" :alt="image">
          <div class="image image-end" 
            v-if="items.length > totalPermit && imageIndex == items.length-(items.length-totalPermit+1)"
            @click="index = imageIndex">
            <span>{{(items.length - totalPermit)}}+</span>
          </div>
      </div>

    </div>
    </div>
  </div>
</template>

<script>

import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";


export default {
  components: {
    CoolLightBox,
  },
  props: {
    items: {
      require: true,
      type: Array
    }
  },
    data() {
      return {
        index: null,
        totalPermit: 0
      };
    },
    created() {

      if ( this.items.length > 4 ) {
        this.totalPermit = 4;
      } else if ( this.items.length <= 4 ) {
        this.totalPermit = this.items.length;
      }
    }
}
</script>

<style>
  .image {
    width: 100%;
    height: 300px;
    cursor: pointer;
  }

  .image-end {
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 100;
  }
</style>