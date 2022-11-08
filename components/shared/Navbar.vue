<template>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark ftco_navbar ftco-navbar-light sleep" id="ftco-navbar">
        
        <div class="container-fluid">
            <a href="/" class="d-none d-md-block">
              <img
                height="40"
                class="p-1 pr-3"
                src="@/static/clasificados-logo-blanco.png"
              />
            </a>

            <a href="/" class="d-md-none">
              <img
                height="40"
                class="p-1 pr-3"
                src="@/static/cc_icono.png"
              />
            </a>


            <div class="d-md-none" style="flex: 1;">
                    <form class="d-flex"  v-on:submit.prevent="goToResults">
                        <input 
                            style="width: 90%;"
                            class="form-control search"
                            type="text" 
                            autocomplete="off"
                            v-model="keyword"
                            placeholder="¿Qué deseas buscar?">
                        <button class="btn btn-lupa">
                            <img class="lupa-icon mr-1"
                                type="submit"
                                src="https://img.icons8.com/ios/2x/01569D/search.png" alt="">
                        </button>
                    </form>
                </div>
        
         

          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="mr-3 oi oi-menu"></span>
          </button>
  

         
           
  
          <div class="collapse navbar-collapse ml-5" id="ftco-nav">
  
        
            
            <div class="row mt-2">
                <div class="col-12 d-none d-md-block">
                    <form class="d-flex"  v-on:submit.prevent="goToResults" style="width: 100%;">
                        <input 
                            class="form-control search"
                            type="text" 
                            autocomplete="off"
                            v-model="keyword"
                            placeholder="¿Qué deseas buscar?">
                        <button class="btn btn-lupa">
                            <img class="lupa-icon mr-1"
                                type="submit"
                                src="https://img.icons8.com/ios/2x/01569D/search.png" alt="">
                        </button>
                    </form>
                </div>
                
                <div class="col-12">
                    <ul class="navbar-nav ml-auto header" style="width: 100%;" >
                        <li class="nav-item">
                            <NuxtLink to="/" class="link">Inicio</NuxtLink>
                        </li>
                        <li class="nav-item dropdown flex-column">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categorías
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NuxtLink class="dropdown-item" to="/bienesraices">Inmuebles</NuxtLink>
                            <NuxtLink class="dropdown-item" to="/desarrollos">Desarrollos</NuxtLink>
                            <NuxtLink class="dropdown-item" to="/vehiculos">Vehículos</NuxtLink>
                            <!-- <a class="dropdown-item" href="#">Empleos</a>
                            <a class="dropdown-item" href="#">Tecnología</a>
                            <a class="dropdown-item" href="#">Casa y Hogar</a>
                            <a class="dropdown-item" href="#">Mascotas</a>
                            <a class="dropdown-item" href="#">Viajes</a>
                            <a class="dropdown-item" href="#">Educación</a>
                            <a class="dropdown-item" href="#">Inversiones</a> -->
                        </div>
                        </li>
                        <li class="nav-item" v-if="!userLogged">
                            <NuxtLink to="/registro.html" class="link">Registrate</NuxtLink>
                        </li>
                        <li class="nav-item" v-if="!userLogged">
                            <NuxtLink to="/sesion.html" class="link">Iniciar sesión</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/#contacto" class="link "><i class="icon-headset"></i> Contacto</NuxtLink>
                        </li>
                        <li class="nav-item" v-if="userLogged">
                        <a class="link icon-top" href="https://www.clasificadoscontacto.com/panel"><i class="fas fa-user-plus"></i>Mi cuenta</a>
                        </li>
                    </ul>
                </div>
            </div>

  
           
          </div>
  
  
  
        </div>
      </nav>
    </header>
  </template>
  
  
  <script>
  
  import { mapGetters } from 'vuex';
  
  
  export default {
    data(){
      return {
        keyword: ''
      }
    },
    computed: {
      ...mapGetters({
        userLogged: 'getUserLogged',
        showSearchGeneral: 'getShowSearchGeneral',
      }),
    },
    methods: {
      openSearch() {
        this.$store.commit('setShowSearchGeneral', true )
      },
      goToResults() {
  
        if ( this.keyword.trim() == '' ) {
          return;
        }
  
        this.$router.push({
          name: 'busqueda-general-search',
          params: {
            search: `buscar-por-${this.keyword.replace('.','').trim().toLowerCase().replace(/ /g, '-')}.html`
          }
        });
  
        this.keyword = ''
  
      }
    }
  }
  
  </script>
  
  
  
  <style scoped>
 
    input.search {
        width: 50%;
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 5px !important;
        border-bottom-left-radius: 5px !important;
        height: 40px;
    }

    button.btn-lupa {
        border-top-right-radius: 5px !important;
        border-bottom-right-radius: 5px !important;
        border-top-left-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
        height: 40px;
    }

    button.btn-lupa {
        background-color: #f2e587;
    }
    img.lupa-icon {
        width: 30px;
    }

    .header {
        /* justify-content: space-evenly; */
        display: flex;
        align-items: center;
    }


    ul li.nav-item {
        margin-right: 50px;
    }

    ul li.nav-item a{
        color: white;
        font-size: 14px !important;
    }

    div.dropdown-menu {
    background-color: #f0e26b !important; 
    margin: 0px !important;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  div.dropdown-menu a{
    color: black !important;
  }

  .dropdown:hover>.dropdown-menu {
   display: block !important;
  }

  .dropdown-item:focus, .dropdown-item:hover {
    background-color: #f2e587;
  }

@media only screen and (max-width: 991px) {
  #ftco-nav {
    margin: 0px !important;
  }

  form {
    justify-content: center !important;
  }
}



  </style>