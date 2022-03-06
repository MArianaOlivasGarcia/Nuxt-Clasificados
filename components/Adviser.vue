

<template>
  <div class="adviser-container animate__animated animate__fadeInRight">
                      <!-- <div style="text-align: right;"><span ><i class="fas fa-times"></i></span></div> -->
        <div class="fist-message">
            <img src="https://img.icons8.com/emoji/2x/man-with-beard-light-skin-tone.png" alt="">
            <div class="message">
                <p class="m-0">Hola soy IDI,<br>tu inteligencia inmobiliaria.</p>
            </div>
        </div> 

        <div class="second-message">
            <div class="message" style="border-top-left-radius: 0px;">
                <p class="m-0">¿Necesitas ayuda para encontrar el inmuble de tus sueños?</p>
            </div>
        </div>    

        <div class="mt-3">
            <NuxtLink class="btn btn-primary" to="/preferencias.html">¡Empezar ahora!</NuxtLink>
        </div>
  </div>
</template>

<script>
export default {
    methods: {
    }
}
</script>

<style scoped>

.adviser-container {
    z-index: 99;
    position: fixed;
    bottom: 5%;
    right: 2%;
    width: 25% !important;
    margin: 0px;
}

p {
    line-height: 1.3;
    font-size: 12px;
    color: #425b76;
    font-weight: 500;
}

.asesor {
    display: flex;
    align-items: end;
}

.fist-message {
   display: flex; 
}

.second-message {
   margin-top: 9px;
}


img {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 35px;
    left: -50px;
}

.message {
    background-color: #EAF0F5;
    padding: 10px;
    border-radius: 20px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.09) 2.4px 2.4px 3.2px;
}


a.btn-primary, 
a.btn-primary:hover {
    background-color: #01569D !important;
    border-color: #01569D;
    padding: 10px;
    width: 100% !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
}


a.btn-primary:hover {
       color: #FED823 !important;
}



</style>