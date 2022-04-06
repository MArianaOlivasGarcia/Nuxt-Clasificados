

<template>
  <main class="container">

    
    <div class="container">
              <Carousel :items="images" />
          </div>


      <!-- PAGINA -->


      <h1 style="text-align: center;">Conoce los <span>únicos departamentos</span><br>de Colección en <span>Querétaro</span></h1>

      <div class="row p-3">
      
          <div class="col-md-6" style="text-align: justify;">
            <h2>UBICACIÓN</h2>

            <p><span>SERRA 24</span> tiene una ubicación priviligiada en la ciudad de Querétaro, ya que cuenta
            con acceso inmediato al Anillo Vial Fray Junípero Serra, una de las vialidades más
            importantes de la ciudad, así como una cercanía inigualable a servicios, centros comerciales y educativos, entretenimiento, 
            clubes deportivos y parques industriales.</p>

            <p>A solo 3 minutos de Paseo Querétaro, el Centro Comercial más moderno de la ciudad, a 5 minutos de Boulevard 
              Bernardo Quintana y a 10 minutos del Centro Histórico.
            </p>
          </div>



          <div class="col-md-6" style="text-align: justify;">
            <h2>PROYECTO</h2>

            <p>Ubicado al interior del Desarrollo La Vista Recidencial, el proyecto <span>SERRA 24</span> cuenta con 
            espacios pensados para el mayor confort de nuestros residentes.</p>

            <p>Quien busca vivir en un complejo residencial exclusivo y de buen gusto, encontrará en <span>SERRA 24</span> cuatro 
            propuestas diferentes, deseñadas a su medida.</p>

            <ul>
              <li><span>2 Torres</span> residenciales</li>
              <li><span>4 Tipos</span> de departamentos</li>
              <li><span>Departamentos</span> de 1 y 2 recámaras con amplios espacios</li>
              <li><span>Doble filtro de seguridad</span> las 24 horas</li>
              <li><span>Caseta</span> de vigilancia</li>
              <li><span>Áreas verdes</span></li>
              <li><span>Alberca</span></li>
              <li><span>Palapa</span></li>
              <li><span>Elevadores</span></li>
              <li><span>Estacionamiento</span> de visitas</li>
            </ul>


          </div>


      </div>





     <section class="pt-3">



              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#tipoA"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    >TIPO A</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#tipoB"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    >TIPO B</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#tipoC1"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    >TIPO C1</a
                  >
                </li>

                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#tipoC2"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    >TIPO C2</a
                  >
                </li>

              </ul>



              <div class="tab-content mt-3 mb-3" id="myTabContent">


                <div class="tab-pane fade show active fadeInUp ftco-animated"
                  id="tipoA"
                  role="tabpanel"
                  aria-labelledby="description-tab">

                  <h2 style="text-align: center;">Tipo A</h2>

                  <div class="row">
                    <div class="col-md-8">
                      <img src="@/static/images/desarrollo/tipoA.png" alt="">
                        <!-- <img src="@/static/images/desarrollo/tipoA.jpg"  alt=""> -->
                    </div>
                    <div class="col-md-4">
                      <h4 style="font-weight: bold;">SUPERFICIE 80 m²</h4>
                      <ul>
                        <li>Sala</li>
                        <li>Comedor</li>
                        <li>Cocina</li>
                        <li>Clóset/lavandería</li>
                        <li>Recámara principal</li>
                        <li>Vestidor</li>
                        <li>Baño Completo</li>
                      </ul>
                    </div>
                  </div>

                </div>


                <div class="tab-pane fade fadeInUp ftco-animated"
                  id="tipoB"
                  role="tabpanel"
                  aria-labelledby="amenity-tab">
                  
                  <h2 style="text-align: center;">Tipo B</h2>

                  <div class="row">
                    <div class="col-md-8">
                      <img src="@/static/images/desarrollo/tipoB.png" alt="">
                        <!-- <img src="@/static/images/desarrollo/tipoA.jpg"  alt=""> -->
                    </div>
                    <div class="col-md-4">
                      <h4 style="font-weight: bold;">SUPERFICIE 100 m²</h4>
                      <ul>
                        <li>Sala</li>
                        <li>Comedor</li>
                        <li>Cocina</li>
                        <li>Lavandería</li>
                        <li>Recámara principal</li>
                        <li>Vestidor</li>
                        <li>Baño principal completo</li>
                        <li>Segunda recámara</li>
                        <li>Segundo baño completo</li>
                      </ul>
                    </div>
                  </div>

                </div>




                <div class="tab-pane fade fadeInUp ftco-animated"
                  id="tipoC1"
                  role="tabpanel"
                  aria-labelledby="amenity-tab">
                  
                  <h2 style="text-align: center;">Tipo C1</h2>

                  <div class="row">
                    <div class="col-md-8">
                      <img src="@/static/images/desarrollo/tipoC1.png" alt="">
                        <!-- <img src="@/static/images/desarrollo/tipoA.jpg"  alt=""> -->
                    </div>
                    <div class="col-md-4">
                      <h4 style="font-weight: bold;">SUPERFICIE 146 m²</h4>
                      <ul>
                        <li>Sala</li>
                        <li>Comedor</li>
                        <li>Cocina</li>
                        <li>Alacena</li>
                        <li>Lavandería</li>
                        <li>Medio Baño</li>
                        <li>Sala TV/estudio</li>
                        <li>Recámara principal</li>
                        <li>Vestidor</li>
                        <li>Baño principal completo</li>
                        <li>Segunda recámara</li>
                        <li>Segundo baño completo</li>
                      </ul>
                    </div>
                  </div>

                </div>




                <div class="tab-pane fade fadeInUp ftco-animated"
                  id="tipoC2"
                  role="tabpanel"
                  aria-labelledby="amenity-tab">
                  
                  <h2 style="text-align: center;">Tipo C2</h2>

                  <div class="row">
                    <div class="col-md-8">
                      <img src="@/static/images/desarrollo/tipoC2.png" alt="">
                        <!-- <img src="@/static/images/desarrollo/tipoA.jpg"  alt=""> -->
                    </div>
                    <div class="col-md-4">
                      <h4 style="font-weight: bold;">SUPERFICIE 144 m²</h4>
                      <ul>
                        <li>Sala</li>
                        <li>Comedor</li>
                        <li>Cocina</li>
                        <li>Lavandería</li>
                        <li>Medio Baño</li>
                        <li>Sala TV/estudio</li>
                        <li>Recámara principal</li>
                        <li>Vestidor</li>
                        <li>Baño principal completo</li>
                        <li>Segunda recámara</li>
                      </ul>
                    </div>
                  </div>

                </div>
              
              </div>


      </section>


      <div>

     <a :href="`https://wa.me/+524422339902?text=https://clasificadoscontacto.com/bienesraices/desarrollo/serra24.html`" 
        class="fab shadow" target="_blank"><i class="fab fa-whatsapp"></i></a>

    </div>
    

  </main>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          largefile:'https://www.cancun.tecnm.mx/wp-content/themes/itcancun/img/docs/temp/1.jpg',
          alt: 'Imagen'
        },
        {
          largefile:'https://www.cancun.tecnm.mx/wp-content/themes/itcancun/img/docs/temp/2.jpg',
          alt: 'Imagen'
        },{
          largefile:'https://www.cancun.tecnm.mx/wp-content/themes/itcancun/img/docs/temp/3.jpg',
          alt: 'Imagen'
        },{
          largefile:'https://www.cancun.tecnm.mx/wp-content/themes/itcancun/img/docs/temp/4.jpg',
          alt: 'Imagen'
        },{
          largefile:'https://www.cancun.tecnm.mx/wp-content/themes/itcancun/img/docs/temp/5.jpg',
          alt: 'Imagen'
        },{
          largefile:'https://www.cancun.tecnm.mx/wp-content/themes/itcancun/img/docs/temp/6.jpg',
          alt: 'Imagen'
        },{
          largefile:'https://www.cancun.tecnm.mx/wp-content/themes/itcancun/img/docs/temp/7.jpg',
          alt: 'Imagen'
        },{
          largefile:'https://www.cancun.tecnm.mx/wp-content/themes/itcancun/img/docs/temp/8.jpg',
          alt: 'Imagen'
        },
      ]
    }
  }
}
</script>

<style scoped>
span {
  font-weight: bold;
}


.fab {
  position:fixed;
  width:60px;
  height:60px;
  bottom:20px;
  right:20px;
  background-color:#25d366;
  border-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  z-index:100;
  display: flex;
  justify-content: center;
  align-items: center;
}

i {
      font-size: 35px !important;
}






</style>