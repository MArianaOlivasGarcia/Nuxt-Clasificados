<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <!-- <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a> -->
  </div>
</template>


<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://img.freepik.com/foto-gratis/padre-feliz-hija-pie-cerca-balcon-abierto-sonriendo_74855-9994.jpg?w=1800&t=st=1648340049~exp=1648340649~hmac=8f64783b4570cbd51206b59c4ee1a49c690dbefa5b2c7335f633b1be5ad9cbf2",
        "https://img.freepik.com/foto-gratis/familia-moviendose-usando-cajas_1157-35481.jpg?w=1800&t=st=1648340188~exp=1648340788~hmac=26700cfe8b8a8252ba2498426da7f711bddb27c67f10edf4613dd7c04103ba6d",
        "https://img.freepik.com/foto-gratis/agente-bienes-raices-cliente-mascarilla-mirando-nuevo-proyecto_53876-97516.jpg?w=2000&t=st=1648340843~exp=1648341443~hmac=df24ea22a583ef5b0aeec98b82be1b06457f5a9c236dc1a1926f9978b40b504a"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
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
  width:100%;
  opacity: 0.5;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>