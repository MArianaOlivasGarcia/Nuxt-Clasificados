

<template>
  <div>
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>


    <div v-if="!showSm" class="row justify-content-end">
      <div v-for="(image, imageIndex) in items"
          :key="imageIndex"
          :class="items.length > 1 && items.length > totalPermit && imageIndex > totalPermit-1 
              ? 'd-none' : imageIndex === 0 ? 'col-6' : 'col-3 p-0'">

          <div style="position: relative;" class="m-1">

            <img 
            :class=" imageIndex == 0 ? 'primera image' : 'image'"
            @click="index = imageIndex"
            :src="image" 
            :alt="image">

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
        totalPermit: 0,
        totalPermitTemp: 0,
        showSm: false
      };
    },
    created() {



      if ( this.items.length > 5 ) {
        this.totalPermit = 5;
        this.totalPermitTemp = 5;
      } else if ( this.items.length <= 5 ) {
        this.totalPermit = this.items.length;
        this.totalPermitTemp = this.items.length;
      }

      // if ( this.$mq === 'sm' ) {
      //   this.totalPermit = 1;
      // }


    },
    // watch: {
    //   $mq: {
    //     handler(newValue, oldValue) {
    //       if ( newValue === 'sm' ) {
    //         this.showSm = true;
    //         this.totalPermit = 1;
    //       } else {
    //         this.showSm = false;
    //         this.totalPermit = this.totalPermitTemp;
    //       }
    //     },
    //   } 
    // },
}
</script>

<style>
  .image {
    width: 100%;
    height: 200px;
    cursor: pointer;
    object-fit: cover;
    border-radius: 18px;
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
    border-radius: 18px;
  }

  .primera {
    position: absolute;
    height: 410px;
  }


  img {
  }


</style>