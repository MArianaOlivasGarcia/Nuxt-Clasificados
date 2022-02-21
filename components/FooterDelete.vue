<template>
    <footer class="ftco-footer ftco-bg-dark ftco-section pt-4 pb-3">
        <div class="container">
            <div class="row">

            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                <ul class="ftco-footer-social list-unstyled mt-2">
                <li class="ftco-animate"><a href="https://www.facebook.com/ClasificadosContactoMx/"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="https://www.instagram.com/clasificadoscontacto/"><span class="icon-instagram"></span></a></li>
              </ul>
                </div>
            </div>
            <div class="row footer-contact">
                    <div class="col-lg-2 mb-3">            
                        <NuxtLink to="/">
                        <img src="@/static/clasificados-logo-blanco.png" />
                        </NuxtLink>
                    </div>
                    <div class="col-lg-3 mb-2 d-flex"><i class="fas fa-map-marker-alt fa-2x p-2"></i> Circuito Alamos 98, Dep. 1 Interior Alamos 2da. Sección. Querétaro, Qro. C.P. 76160 </div>
                    <div class="col-lg-3 mb-2 d-flex justify-content-md-center"><i class="fas fa-phone fa-2x p-2"></i>  442 223 5803 <br> 442 195 0982 </div>
                    <div class="col-lg-2 mb-2 d-flex"><i class="fas fa-at fa-2x p-2"></i> info@clasificadoscontacto.com </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                <div class="copyrights">
                    Clasificados Contacto<sup>&copy;</sup> {{ 'year' }}.
                    <br />
                </div>
                </div>
            </div>
        </div>
    </footer>
</template>



<style scoped>
h5 {
    color: #ffffff;
}
/* .copyrights {
    color: rgba(255, 255, 255, 0.7);
} */
.contact-links {
    font-size: inherit;
    text-transform: none;
}

.footer-logo {
    display: inline-block;
    max-width: 30%;
    margin-top: auto;
}

.list-unstyled-menu{
    columns: 2;
}

.footer-logo img {
    margin-top: 40%;
    margin-left: -10px;
    max-width: 165px;
    max-height: 200px;
}

.footer-contact .fas{
    color: #f2e115;
}
.footer-contact{
    font-weight: 100 !important;
}
@media (max-width: 767.98px) {
.list-unstyled-menu {
columns: 2; } 
}
@media (max-width: 767.98px) {
.left-menu {
padding-left: 50px; } 
}
.hov-icon:hover span{
    color:#00569f!important;
}
</style>

