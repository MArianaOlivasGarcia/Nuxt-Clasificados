<template>
  <header>
    <nav
      class="
        navbar navbar-expand-lg navbar-dark
        ftco_navbar ftco-navbar-light
        sleep
      "
      id="ftco-navbar"
    >
      <div class="container p-0">
        <div class="col-5 col-md-3 col-lg-3 mb-2 mr-2">
          <NuxtLink to="/">
            <img
              class="header-logo mt-2 m-0"
              src="@/static/clasificados-logo-blanco.png"
            />
          </NuxtLink>
        </div>
        
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="mr-3 oi oi-menu"></span>
        </button>



        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto header">
            <li class="nav-item">
                  <NuxtLink to="/" class="link">Inicio</NuxtLink>
            </li>
            <li class="nav-item">
                  <NuxtLink to="/register" class="link">Registrate</NuxtLink>
            </li>
            <li class="nav-item">
                  <NuxtLink to="/session" class="link">Iniciar sesión</NuxtLink>
            </li>
            <li class="nav-item">
                  <NuxtLink to="/contact" class="link "><i class="icon-headset"></i> Contacto</NuxtLink>
            </li>
            <li class="nav-item">
              <a class="link icon-top" href="https://www.clasificadoscontacto.com/panel"><i class="fas fa-user-plus"></i>Mi cuenta</a>
            </li>
          </ul>
         
        </div>



      </div>
    </nav>
  </header>
</template>

 
<style scoped>
.search-nav .rounded-left{
  border-top-left-radius: 25px !important;
  border-bottom-left-radius: 25px !important;
}
.search-nav .form-control {
    height: 38px !important;
    font-size: 12px;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}
/* .search-nav .input-group{
  width: 28vw;
} */
.btn-menu{
  background-color: #fff;
  color: #00569d;
}
.btn-menu:hover{
  background-color: #00569d;
  color:#f2e115;
}

nav {
  padding: 10px 0 !important;
}

li {
  display: flex;
  align-items: center;
  text-align: center;
}

a.link {
  color: white;
  font-size: 15px;
  padding: 10px;
}


a.link:hover {
  color: #f2e115;
  font-size: 15px;
}

a.nuxt-link-exact-active {
  color:#f2e115 !important;
}


.header-logo {
  width: 15vw;
}
@media only screen and (max-width: 991px) {
  .header-logo {
    width: 30vw;
  }
}

.icon-top {
  background-color: #00569f;
  font-size: 15px;
  border-radius: 0.5rem;
  padding: 8px;
  border-width: 0.25rem;
  /* border-color: rgba(0,0,0,0.2);
    border-bottom-style: solid;
    border-right-style: solid; */
}

.icon-top:hover {
  /* border-color: rgba(169, 163, 5, 0.6);
    border-bottom-style: solid;
    border-right-style: solid; */
  color: #f2e115;
}

button.navbar-toggler span {
  color: #f2e115;
}

.icon-top /* span */ {
  /* padding-left: 5px; */
  font-family: "Poppins" !important;
  font-style: "Extra-light";
  font-size: 15px;
}
</style>