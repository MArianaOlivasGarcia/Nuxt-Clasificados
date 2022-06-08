<template>
  <div >
    <div v-if="error.statusCode === 404">
        
        <h1>Vaya</h1>

        <p>No hemos podido encontrar la página que buscas.</p>

        <p>Codigo de error: <span>404</span></p>

        <p>Aquí tienes unos enlaces que pueden servirte de ayuda:</p>
        <NuxtLink to="/">Ir a la pagina principal</NuxtLink>


    </div>

    <div v-else>
      <h1 >A ocurrido un error</h1>
      <NuxtLink to="/">Ir a la pagina principal</NuxtLink>
    </div>
    
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error',
    created() { 
      console.log(error)
    }
  }
</script>