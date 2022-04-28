<template>
    <div v-if="showScrollIcon" class="field">
            <div class="mouse"></div>
            <div class="scroll"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showScrollIcon: true
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll( ) {
            // console.log( scrollY )

            if ( scrollY > 130 ) {
                this.showScrollIcon = false;
            } else {
                this.showScrollIcon = true;
            }
        }
    }
}
</script>

<style scoped>

/* ICONO SCROLL */
.field {
    position: fixed;
    bottom: 1.25rem;
    z-index: 999;
    right: 1.25rem;
}

.mouse {
  width: 50px;
  height: 90px;
  border: 2px solid #333;
  border-radius: 60px;
  position: relative;
}


.mouse::before {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    border-radius: 50%;
    opacity: 1;
    animation: wheel 2s infinite;
    -webkit-animation: wheel 2s infinite;
}


@keyframes wheel {
  to {
    opacity: 0;
    top: 40px;
  }
}

@-webkit-keyframes wheel {
  to {
    opacity: 0;
    top: 40px;
  }
}




.scroll {
  width: 60px;
  height: 60px;
  border: 2px solid #333;
  border-radius: 50%;
  position: relative;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;
}


.scroll::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 18px;
    width: 18px;
    height: 18px;
    border-left: 2px solid #333;
    border-bottom: 2px solid #333;
    transform: rotate(-45deg);
}

@keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}

@-webkit-keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}


@media (max-width: 768px) {

    .mouse {
        display: none;
    }

    
}

@media (min-width: 768px) {

    .scroll {
        display: none;
    }

}
</style>