<template>
  <div >
    <div v-if="error.statusCode === 404">
        
        <h1>Vaya</h1>

        <p>No hemos podido encontrar la página que buscas.</p>

        <p>Codigo de error: <span>404</span></p>

        <p>Aquí tienes unos enlaces que pueden servirte de ayuda:</p>

    </div>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>