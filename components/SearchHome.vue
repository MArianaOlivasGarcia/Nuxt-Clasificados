<template>
    <div>
  
     <div class="home-search pb-1 pt-1">
    <ul class="nav nav-pills" id="pills-tab" role="tablist">
      <li class="nav-item hvr-sweep-to-top">
        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"> <i class=" fa-4x icon-heating"></i>Propiedades</a>
      </li>

      </ul>
    <div class="tab-content p-2" id="pills-tabContent">
      <div class=" text-dark tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> 
        <SearchProperties />
 
      </div>
      <div class=" text-dark tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"> </div>
      <div class=" text-dark tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">.3.</div>
    </div>
     </div> 


    </div>
</template>




<style scoped>

.home-search .nav-pills .nav-link{
  display: flex;
  flex-direction: column;
  padding: 10px 15px !important;
  margin: 0 !important;
  font-size: 10px;
  font-weight: 600;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #dcdcdd;
  color: #818181;
}
.home-search .nav-pills .nav-link.active, .home-search .nav-pills .nav-link:hover{
  background: #00569d;
  color: #fff;
}

.home-search .tab-content{  
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background: rgba( 255, 255, 255, 0.3 );
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}


/* Hasta que haya más categorías
.home-search li{
  flex:1;
} */



</style>