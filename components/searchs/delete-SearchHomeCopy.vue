<template>
    <div>
  
     <div class="home-search pb-1 pt-1">
      <ul class="nav nav-pills" id="pills-tab" role="tablist">
      <li class="nav-item hvr-sweep-to-top">
        <a class="nav-link active" 
            id="pills-home-tab" 
            data-toggle="pill" 
            href="#pills-home" 
            role="tab" 
            aria-controls="pills-home" 
            aria-selected="true"> 
            <!-- <i class=" fa-4x icon-heating"></i> -->
            <img class="image-icon img-property img-white" style="display: none" src="https://img.icons8.com/carbon-copy/2x/ffffff/home-page.png" alt="">
            <img class="image-icon img-property img-blue" src="https://img.icons8.com/carbon-copy/2x/01569D/home-page.png" alt="">
            <span>Propiedades</span>
        </a>
      </li>
      <!-- <li class="nav-item hvr-sweep-to-top">
        <a class="nav-link" 
            id="pills-car-tab" 
            data-toggle="pill" 
            href="#pills-car" 
            role="tab" 
            aria-controls="pills-car" 
            aria-selected="true"> 
            <img class="image-icon img-card img-white" style="display: none" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/2x/ffffff/external-car-transportation-icongeek26-outline-icongeek26-4.png" alt="">
            <img class="image-icon img-card img-blue"  src="https://img.icons8.com/external-icongeek26-outline-icongeek26/2x/01569D/external-car-transportation-icongeek26-outline-icongeek26-4.png" alt="">
            <span>Autos</span>
        </a>
      </li> -->

      </ul>

      <div class="tab-content p-2" id="pills-tabContent">

          <template>

            <div class=" text-dark tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> 
              <SearchProperties />
            </div>

           <div class=" text-dark tab-pane fade" id="pills-car" role="tabpanel" aria-labelledby="pills-car-tab">
            <h5>Formulario Autos</h5>   
            </div>
          <div class=" text-dark tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">.3.</div>
          
          </template>
     
      </div>



      </div> 


    </div>
</template>



<script>

export default {
  
}

</script>



<style scoped>


.home-search .nav-pills .nav-link{
  display: flex;
  flex-direction: column;
  padding: 10px 15px !important;
  margin: 0 !important;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: white;
  color: #01569D;
  justify-content: center;
  align-items: center;
}


.home-search .nav-pills .nav-link.active {
  background: #01569D;
  color: white;
}

.home-search .nav-pills .nav-link.active img.img-white {
  display: block !important;
}

.home-search .nav-pills .nav-link.active img.img-blue {
  display: none !important;
}

.home-search .nav-pills .nav-link:hover{
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  background-color: #043a68 !important;
  transition: 0.3s all ease-in;
  color: white !important;
}

.home-search .nav-pills .nav-link:hover > img.img-blue{
  display: none !important;
}

.home-search .nav-pills .nav-link:hover > img.img-white{
  display: block !important;
}


.home-search .tab-content{  
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background: rgba( 255, 255, 255, 0.3 );
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}


.image-icon {
  width: 50px;
  height: 50px;
  
}

span {
  font-size: 12px;
}

/* Hasta que haya más categorías */
/* .home-search li{
  flex:1;
}  */



</style>