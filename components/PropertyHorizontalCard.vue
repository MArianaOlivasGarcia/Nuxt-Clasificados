<template>
  <div
    class="
      col-md-12
      d-flex
      align-self-stretch
      wow
      slideInUp
      cardgeneral
      property-hor
      mb-3
      pb-3
      pt-3
      px-0
    "
  >
    <div class="card">
      <a @click="goToProperty()">
        <div class="row no-gutters">
          <div class="col-md-4">
            <!-- 
              :src="'https://www.clasificadoscontacto.com/'+item.image"
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
          </div>
          <div class="col-md-8">
            <div class="card-body no-gutters">
              <div v-if="item.destacado == '1'"  class="badge-destacado"><span>Destacado</span> <i style="color: #e7b211 !important" class="fas fa-star"></i></div>
              <h5 class="card-title mt-0" style="text-align: justify;">{{ item.name.length > 220 ? item.name.substr(0, 220) + '...' : item.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                <i class="icon-location1"></i> {{ item.city }} , {{ item.state }}
              </h6>
              <!-- <p>
                <i class="icon-location"></i>Av. Bonampak Mz. 10 L 5 Calle
                Mar
              </p> -->
              <h4>$ {{ item.price }} {{ item.currency }}</h4>
              <div class="postcard-bar"></div>
              <!-- <p class="card-text">
                Casa en venta en Isla Dorada (propiedad de prueba), Lorem ipsum
                dolor sit amet,
              </p> -->
              <h6
                class="card-subtitle mb-2 text-muted"
                v-if="
                  item.m2c != 0 ||
                  item.mlot != 0 ||
                  item.bedrooms != 0 ||
                  item.bathrooms != 0
                "
              >
                <small class="text-muted">
                  <span
                    v-if="item.bedrooms > 0"
                    >
                     <i class="icon-big-bed-with-one-pillow pr-2 pl-2 fa-2x"> </i> {{ item.bedrooms }} Rec. </span>
                     <span
                    v-if="item.bathrooms > 0"
                  > <i class="icon-bath pr-2 pl-2 fa-2x"></i> {{ item.bathrooms }} baños</span>
                  <span
                    v-if="item.m2c > 0"
                    > <i class="icon-ruler pr-2 pl-2 fa-2x"></i>
                    {{ item.m2c }}m<sup>2</sup> </span>
                  <span
                    v-if="item.mlot > 0"
                    >
                     <i class="icon-text pr-2 pl-2 fa-2x"> </i>{{ item.mlot }}m<sup>2</sup>
                    </span>
                </small>
              </h6>
            </div>
          </div>
        </div>
      </a>
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
  created() {
  },
  methods: {
    goToProperty() {

      const { productoid, name } = this.item

       this.$router.push({
        name: 'bienesraices-propiedad-id',
        params: {
          id: `${helpers.normalize( name )}_${productoid}.html`
        } 
      });

    },
    imageLoadError() {
        this.noImage = true;
    }
  }
};
</script>






<style scoped>
#propImg {
  height: 250px;
  /* width: 350px; */
  max-height: 260px !important;
}
@media (max-width: 767px) {
  #contain_tarjet_property {
    width: 65%;
  }
  #propImg {
    width: 100%;
  }
}
.property-hor .card-img {
  object-fit: cover;
  object-position: center;
  height: 100%;
  display: block;
  border-top-left-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 15px;
}

.property-hor .card-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.property-hor i,
h4 {
  color: #00569d;
  font-weight: 500;
}
.property-hor .icon-location1 {
  color: #f2e115;
}
@media only screen and (max-width: 991px) {
  .property-hor .card-img {
    border-bottom-left-radius: 0px;
    border-top-right-radius: 15px;
  }
}

.card {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 1.25rem;
  top: 0px;
  transition: 0.3s all ease;
  width: 100%;
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
}
small {
  font-size: 60%;
}
.cardgeneral .fa-1x {
  font-size: 1.5em;
}

.no-gutters {
  min-height: 230px !important;
}

img.card-img {
  height: 100% !important;
}

.card-body {
  padding: 10px 20px !important;
}


.badge-destacado {
  text-align: right;
  padding-bottom: 5px;
}

.badge-destacado span {
  font-size: 14px;
  border: 1px solid #425b76;
  border-radius: 10px;
  padding: 2px 10px;
  color: #425b76;
}

</style>
