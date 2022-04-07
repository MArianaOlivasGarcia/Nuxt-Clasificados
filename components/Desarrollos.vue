

<template>


    <div v-if="currentObj != undefined" style="position: relative; 
    height: 400px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;">
            <transition-group name="fade" tag="div">
                <div v-for="i in [currentIndex]" :key="i" @click="goTo()" style="cursor:pointer;">
                    <img :src="`http://clasificadoscontacto.com${currentObj!= undefined ? currentObj['largephoto'] : ''}`" />
                    <div class="description-content">
                            <div v-if="currentObj != undefined" v-html="currentObj.description"></div>
                            <!-- <p >{{currentObj != undefined ? currentObj.description : ''}}</p> -->
                    </div>
                </div>
            </transition-group>

            <a class="prev" @click="prev" >&#10094;</a>
            <a class="next" @click="next" >&#10095;</a>
            
    </div>


</template>

<script>



export default {
    data() {
        return {
            desarrollos: [],
            timer: null,
            currentIndex: 0
        }
    },
    async created(){
        const resp = await this.$store.dispatch('sliderDesarrollos')

        for (const property in resp) {
            this.desarrollos.push(resp[property][0])
        }

        console.log(this.desarrollos)
        console.log(this.currentObj)

        this.startSlide();
    },
    mounted() {
    },

    computed: {
        currentObj() {
            return this.desarrollos[Math.abs(this.currentIndex) % this.desarrollos.length];
        }
    },
    methods: {
        startSlide() {
          this.timer = setInterval(this.next, 6000);
        },
        next() {
          this.currentIndex += 1;
        },
        prev() {
          this.currentIndex -= 1;
        },
        goTo() {
            console.log(this.currentObj.url)
        }
    }
}
</script>


<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height: 470px;
  width: 100%;
  /* opacity: 0.5; */
}

a.prev, a.next {
  cursor: pointer;
  position: absolute;
  top: 35%;
  width: auto;
  padding: 16px;
  color: #01569d;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
  font-size: 50px;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}




    p {
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
        margin: 0px;
    }

    img {
        height: 400px !important;
        box-shadow: rgb(255 255 255 / 10%) 0px 1px 1px 0px inset, rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;
    }
    .text-description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .description-content {
        position: absolute;
        bottom: 0;
        width: 70%;
        background-color: rgba(255,255,255,0.5);
        padding: 10px;
        padding-left: 5%;
        padding-bottom: 0px !important;
    }



</style>