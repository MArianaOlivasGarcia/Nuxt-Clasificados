<template>
  <div
    class="
      col-xl-3
      col-lg-4
      col-md-6
      col-sm-12
      d-flex
      align-self-stretch
      ftco-animate
      cardgeneral
      mb-3
      pb-3
      pt-3
    "
  >
    <div class="card">
      <a class="card-thumb" @click="goToProperty()">
      <div  class="offer-type-wrap"><span  class="offer-type">{{item.tipo}}</span></div>
        
      <!-- 
          v-bind:src="'https://www.clasificadoscontacto.com/'+item.image"
       -->
       <img v-if="!noImage"
              id="propImg"
              :src="item.image"
              :alt="item.alt"
              class="card-img"
              @error="imageLoadError"
            /> 
            <img v-else
              id="propImg"
              src="@/static/images/no-image.jpg"
              :alt="item.alt"
              class="card-img"
            />
        
      </a>
        <div class="card-body glyphs">
          <h5 class="card-title pricecard">
            $ {{ item.price }} {{ item.currency }}
          </h5>
          <div class="postcard-bar"></div>
          <h6> {{item.operation}} </h6>
          <p class="card-text">{{ item.name }}</p>
          <p class="card-text text-center"
          v-if="
            item.m2c != 0 ||
            item.mlot != 0 ||
            item.bedrooms != 0 ||
            item.bathrooms != 0
          ">
            <small class="text-muted">
              <span ><i class="icon-big-bed-with-one-pillow pl-2 pr-1"></i>{{ item.bedrooms }} Rec.</span>
              <span v-if="item.bathrooms > 0" ><i class="icon-bath pl-2 pr-1"></i>{{ item.bathrooms }} baños</span>
              <span v-if="item.m2c > 0"><i class="icon-ruler pl-2 pr-1"></i>{{ item.m2c }} m<sup>2</sup></span>
              <span v-if="item.mlot > 0"><i class="icon-text  pl-2 pr-1"></i>{{ item.m2c }} m<sup>2</sup></span>
            </small>
          </p>
        </div>
    </div>
  </div>
</template>

<script>

import helpers from '@/helpers/helpers'


export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data(){
    return {
      noImage: false
    }
  },
    filters: {
    truncate: function(str) {
      return str.substring(0, 125) + "...";
    },
    areaFormat:function(value) {
      return numeral(value).format("0,0");
    },
    format: function(value) {
      //Formateo de decimales
      let decimalPrice = value.lastIndexOf(".");
      //Extaracción de moneda
      let currentPriceM = value.indexOf("MXN");
      let currentPriceU = value.indexOf("USD");
      
      // Precio formateado value.substr(currentPrice)
      let formatPrice=value.substr(0,decimalPrice)+" ";
      if(currentPriceM!='-1'){
        formatPrice+= value.substr(currentPriceM)
      }else{
        formatPrice+= value.substr(currentPriceU)
      }
     
      return formatPrice;
      //return numeral(value).format("0,0");
    }
  },
  methods: {
    imageLoadError() {
        this.noImage = true;
    },
    goToProperty() {

      const { productoid, name } = this.item


      /*let namePropFilt = normalize(this.item.name);
      let folio = this.item.productoid;
      let namePage="PropertyDetail";
      let params;

      if (this.nameRoute=='Agent') {
        namePage="PropertyAgent";
        params={
          folio,
          agentId:this.agent.folio
        }
      }else{
        params={
          folio,
          namePropFilt
        }
      }*/

      this.$router.push({
        name: 'property-id-name',
        params: {
          id: productoid,
          name: helpers.normalize( name )
        }
      });

    },
  },
  created() {
  },
};
</script>

<style scoped>

#propImg {
  width: 100vw;
  height: 240px;
}
@media (max-width: 767px) {
  #contain_tarjet_property {
    width: 65%;
  }
}
.glyphs h6{
  color: #00569d;
}
.card {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 1.25rem;
  top: 0px;
  transition: 0.3s all ease;
  cursor: pointer;
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
.card:hover {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  top: -6px;
}
.pricecard {
  font-weight: 600;
}
.cardgeneral {
  border-radius: 10px;
  overflow: hidden !important;
}
.card-img-top {
  width: 100%;
  border-top-left-radius: calc(1.25rem - 1px);
  border-top-right-radius: calc(1.25rem - 1px);
  object-fit: cover;
}
small {
  font-size: 60%;
}
.cardgeneral .fa-1x {
  font-size: 1.5em;
}
.card-thumb{
  position: relative;
  display: block;
}
.card-thumb .offer-type-wrap {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
}
.card-thumb .offer-type {
    display: block;
    margin-bottom: 5px;
    padding: 1px 7px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: .2em;
    font-size: 11px;
    font-weight: 500;
    border-radius: 10px;
    background-color: #f2e1158f  !important;
}

img{
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
}


</style>
