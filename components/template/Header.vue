<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-light p-0 pt-2">
      <div class="container-fluid">
        <NuxtLink to="/">
            <img
              class="logo"
              src="@/static/clasificados-logo-blanco.png"
            />
          </NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" style="flex-direction: column;" id="navbarSupportedContent">
          
          <div style="width: 100%; display: flex; align-items: center;">

            <form class="d-flex me-auto">
              <input class="form-control " 
                type="search" 
                placeholder="¿Qué deseas buscar?" 
                aria-label="Search"
                style="width: 210px;">
              <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            <ul class="navbar-nav  mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>

          </div>

          <div style="width: 100%;">
            <ul class="navbar-nav  mb-2 mb-lg-0">
              
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul> -->
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <h3>HOLA</h3>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Favoritos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Ofertas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Inteligencia digital contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Vender</a>
              </li>
            </ul>
            
          </div>

        </div>
      </div>
    </nav>
  </header>
</template>


<script>

import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters({
      userLogged: 'getUserLogged',
      showSearchGeneral: 'getShowSearchGeneral',
    }),
  },
  methods: {
    openSearch() {
      this.$store.commit('setShowSearchGeneral', true )
    }
  }
}

</script>



<style scoped>

  nav{ 
    background-color: rgb(1, 86, 157) !important;
  }

  .logo {
    width: 200px;
    margin-right: 10px ;
  }


  a {
    font-size: 14px !important;
    color: white !important;
  }

</style>