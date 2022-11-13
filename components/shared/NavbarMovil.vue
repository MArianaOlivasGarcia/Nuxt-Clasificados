<template>
  <div class="menuNav">
    <div>
      <nav class="navbar navbar-expand-md navbar-dark ftco_navbar ftco-navbar-light sleep" id="ftco-navbar">
        
        <div class="container-fluid">
            
            <a href="/">
              <img
                height="40"
                class="p-1 pr-3"
                src="@/static/cc_icono.png"
              />
            </a>


            <div style="flex: 1;">
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
            class="navbar-toggler"
            type="button"
            @click="openMenu">
            <span class="mr-3 oi oi-menu"></span>
          </button>
  
        </div>

      </nav>
    </div>
    <div class="containerNav" v-if="showMenu">

      <div class="mt-3 px-3"> 
        <p class="text-center">¡Nos alegra verte denuevo! Inicia sesión para continuar</p>
        <a href="/sesion.html" class="btn btn-primary btn-block">Iniciar sesión</a>
      </div>

      <ul class="navbar-nav p-3">


        <li class="mb-1">
          <a href="/" style="width: 100%;" class="nav-link d-inline-flex align-items-center rounded border-0 collapsed">
            <span>Inicio</span><i style="font-size: 14px;" class="fa-solid fa-chevron-right ml-auto"></i>
          </a>
        </li>

        <li class="mb-1">
            <a style="cursor: pointer; width: 100%;" class="nav-link d-inline-flex align-items-center rounded border-0 collapsed" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              <span>Categorías</span><i style="font-size: 14px;" class="fa-solid fa-chevron-down ml-auto"></i>
            </a>
  
            <div class="collapse" id="collapseExample">
              
              <ul class="navbar-nav pl-3">

                <li class="mb-1">
                  <a href="/bienesraices" style="width: 100%;" class="nav-link d-inline-flex align-items-center rounded border-0 collapsed">
                    <span>Inmuebles</span><i style="font-size: 14px;" class="fa-solid fa-chevron-right ml-auto"></i>
                  </a>
                </li>

                <li class="mb-1">
                  <a href="/desarrollos" style="width: 100%;" class="nav-link d-inline-flex align-items-center rounded border-0 collapsed">
                    <span>Desarrollos</span><i style="font-size: 14px;" class="fa-solid fa-chevron-right ml-auto"></i>
                  </a>
                </li>

                <li class="mb-1">
                  <a href="/vehiculos" style="width: 100%;" class="nav-link d-inline-flex align-items-center rounded border-0 collapsed">
                    <span>Vehículos</span><i style="font-size: 14px;" class="fa-solid fa-chevron-right ml-auto"></i>
                  </a>
                </li>
             
              </ul>

            </div>
        </li>

        <li class="mb-1">
          <a href="/registro.html" style="width: 100%;" class="nav-link d-inline-flex align-items-center rounded border-0 collapsed">
            <span>Registrare</span><i style="font-size: 14px;" class="fa-solid fa-chevron-right ml-auto"></i>
          </a>
        </li>


     

      </ul>

    </div>
  </div>   
</template>
  
  
  <script>
  
  import { mapGetters } from 'vuex';
  
  
  export default {
    data(){
      return {
        keyword: '',
        showMenu: false
      }
    },
    mounted() {
    },  
    computed: {
      ...mapGetters({
        userLogged: 'getUserLogged',
        showSearchGeneral: 'getShowSearchGeneral',
      }),
    },
    methods: {
      openMenu() {
        this.showMenu = !this.showMenu;

        if ( this.showMenu ) {
          window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
        } else {
          window.document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
        }

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


.menuNav {
  flex-grow: 0;
  flex-shrink: 0;
  order: 1;
  position: relative;
}

.containerNav {
  background-color: #EBEBEB;
  /* height: calc(100vh - 60px); */
  box-sizing: border-box;
  position: absolute;
  width: 100vw;
  height: 95vh;
  max-height: 95vh;
  top: 59px;
  background-color: #eaeaea;
  z-index: 999;
  transition: transform .2s ease,opacity .2s ease;
}




</style>