


<template>
    <div class="cookie-main">

        <div class="cookie-container">
            <h3>Antes de empezar</h3>

            <p>
                Utilizamos cookies para personalizar y mejorar el contenido que te ofrecemos, asegurándonos de que tengas la mejor experiencia. Al hacer clic en "Aceptar todas las cookies", podemos seguir mostrándote ofertas personalizadas e ideas que te inspiren con base en las cosas que te gustan.
                <br><br>
                Si deseas conocer más información sobre las cookies y por qué las utilizamos, visita la página de nuestra <span @click="showPolicy()">Política de Cookies</span> en cualquier momento.
            </p>

            <button @click="acceptCookies" class="btn btn-primary">Aceptar todas las cookies</button>
        </div>


        <div class="policy-cookies" v-if="isShowPolicy" >
            <div class="container">
                <div style="text-align: right;"><span @click="showPolicy"><i class="fas fa-times"></i></span></div>
            <h1 class="text-center">Política de Cookies</h1>

                <h3>Antes de empezar</h3>
                <div class="row m-0">

                    <p>En esta Política de Cookies encontrarás información sobre el uso que realizamos de las cookies y
                        dispositivos similares que se instalan en los terminales de nuestros clientes y usuarios. En ocasiones, el
                        uso de cookies puede estar relacionado con el tratamiento de datos personales, por lo que te
                        recomendamos que consultes nuestra Política de Privacidad, accesible en nuestra Plataforma, si deseas
                        información sobre cómo usamos los datos personales de nuestros clientes y usuarios, cómo ejercitar tus
                        derechos, o la terminología que utilizamos para referirnos a nuestra Plataforma Web.
                    </p>
                </div>


                <h3>Información sobre cookies</h3>
                <div class="row m-0">
                    <h5>1. ¿Qué es una Cookie?</h5>

                    <p>Una Cookie es un pequeño fichero de texto que un sitio web, app u otra plataforma almacena en tu
                    ordenador, tableta, teléfono inteligente o cualquier otro dispositivo similar, con información sobre tu
                    navegación o uso, como una etiqueta que identifica tu dispositivo. Las Cookies son necesarias por ejemplo
                    para facilitar la navegación y conocer la manera en que interactúan los usuarios con las plataformas, de
                    manera que puedan ser mejoradas. También son muy útiles para poder ofrecer publicidad según las
                    preferencias del usuario, así como para otras finalidades que se detallan más adelante. Las Cookies no
                    dañan tu ordenador o dispositivo.
                    <br><br>
                    Cuando hablamos de "Cookies" también nos referimos a otras tecnologías similares de instalación y/o
                    recogida de información en o sobre tu dispositivo (tales como flash cookies, web beacons o bugs, pixels,
                    HTML5 (de almacenamiento local), y tecnologías SDK para formatos app. Asimismo, el término “Cookies”
                    también resulta de aplicación al uso de técnicas de fingerprinting, es decir, aquellas técnicas de
                    combinación de información que nos ayudan a identificar tu dispositivo. En ocasiones, estas tecnologías
                    funcionan de manera conjunta con cookies para recopilar y almacenar información, bien para
                    proporcionarte ciertas funcionalidades o servicios en nuestra Plataforma, o bien para mostrarte publicidad
                    en las plataformas de terceros, teniendo en cuenta tu navegación.
                    <br><br>
                    Esta explicación es una muestra general de lo que se entiende por Cookies a meros efectos informativos.
                    Las Cookies que utilizamos de manera específica se detallan en el panel de configuración de cookies
                    accesible en nuestra Plataforma.
                    </p>
                </div>

                <div class="row m-0">
                    <h5>2. ¿Qué tipos de Cookies existen?</h5>

                    <p>Por favor, revisa esta sección que proporciona una visión general de la tipología de Cookies que se pueden
                        utilizar en un entorno online.
                    <br><br>
                    En función del propietario de las Cookies, pueden clasificarse en: 
                    <br><br>
                    <strong>Cookies propias:</strong> Son aquellas que se envían al ordenador o dispositivo del usuario desde un
                    equipo o dominio gestionado por el propio editor, y desde el que se ofrece la plataforma o el
                    servicio solicitado por el usuario.
                    <br><br>
                    <strong>Cookies de tercero:</strong> Son aquellas que se envían al ordenador o dispositivo del usuario desde un
                    equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos
                    obtenidos a través de las cookies.
                    <br><br>
                    En función de la finalidad de la Cookie, pueden clasificarse en:
                    <br><br>
                    <strong>Cookies estrictamente necesarias (técnicas):</strong> Son aquellas que permiten al usuario la navegación
                    a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o
                    servicios que en ellas existan como, por ejemplo, controlar el tráfico, identificar datos o la sesión,
                    acceder a secciones o contenidos de acceso restringido, recordar los elementos que integran un
                    pedido, realizar el proceso de compra de un pedido, gestionar el pago, controlar el fraude
                    vinculador a la seguridad del servicio, utilizar elementos de seguridad durante la navegación,
                    realizar la solicitud de inscripción o participación en un evento, almacenar contenidos para la
                    difusión de videos o sonido, habilitar contenidos dinámicos (por ejemplo, animación de carga de
                    un texto o imagen) o compartir contenidos a través de redes sociales. Las cookies técnicas, al ser
                    estrictamente necesarias, se descargan por defecto cuando permitan mostrar la plataforma o
                    prestar el servicio solicitado por el usuario.
                    <br><br>
                    <strong>Cookies de funcionalidad o personalización:</strong> Estas cookies son aquellas que permiten recordar
                    información para que el usuario acceda al servicio o plataforma con determinadas características
                    que pueden diferenciar su experiencia de la de otros usuarios, como, por ejemplo, el idioma, el
                    número de resultados a mostrar cuando el usuario realiza una búsqueda, el aspecto o contenido
                    del servicio en función del tipo de navegador usado por el usuario o de la región desde la que
                    accede al servicio, etc. El no aceptar estas Cookies puede generar un rendimiento lento de la
                    página web o recomendaciones mal adaptadas.
                    <br><br>
                    <strong>Cookies de análisis:</strong> Son aquellas que permiten cuantificar el número de usuarios, las secciones
                    visitadas en la plataforma y cómo interactúan con la misma, para así realizar la medición y análisis
                    estadístico de la utilización que hacen los usuarios, con el fin de introducir mejoras en función del
                    análisis de los datos de uso que hacen los usuarios de la plataforma o servicio. 
                    <br><br>
                    <strong>Cookies de publicidad comportamental:</strong> Son aquellas que almacenan información del
                    comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de
                    navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del
                    mismo. Estas cookies permiten la gestión, de la forma más eficaz posible, de los espacios
                    publicitarios que, en su caso, el editor haya incluido directamente o en colaboración con terceros. 
                    </p>
                </div>

                <div class="row m-0">
                    <h5>3. ¿Para qué se utilizan las Cookies en nuestra Plataforma?</h5>

                    <p>Las Cookies son una parte esencial de cómo funciona nuestra Plataforma. El objetivo principal de nuestras
                    Cookies es que tu experiencia de navegación sea más cómoda y eficiente. Por ejemplo, son utilizadas
                    para recordar tus preferencias (idioma, país, etc.) durante la navegación y en futuras visitas. También
                    usamos nuestras Cookies para mejorar nuestros servicios y Plataforma continuamente, así como para
                    poder ofrecer publicidad personalizada según tus hábitos de navegación.
                    <br><br>
                    La información recogida en las Cookies nos permite, además, mejorar nuestra Plataforma mediante
                    estimaciones sobre datos estadísticos y patrones de uso (número de visitas, secciones más visitadas,
                    tiempo de visita, etc.), conocer de manera estadística cómo interactúan los usuarios con la Plataforma con
                    el fin de mejorar nuestros servicios, así como para adaptar la Plataforma a tus intereses individuales, la
                    aceleración de las búsquedas, etc.
                    <br><br>
                    En ocasiones, podremos utilizar Cookies para obtener información que nos permita mostrar desde nuestra
                    Plataforma, las plataformas de terceros, o por cualquier otro medio, publicidad basada en el análisis de tus
                    hábitos de navegación (productos visitados, secciones consultadas, etc.).
                    <br><br>
                    En todo caso, en las Cookies que utilizamos nosotros nunca almacenamos información sensible como
                    contraseñas, datos de tarjeta de crédito o débito, etc. 
                    </p>
                </div>


                <div class="row m-0">
                    <h5>4. ¿Cómo puedo gestionar el uso de Cookies en esta Plataforma?</h5>

                    <p>LEn el panel de configuración de Cookies accesible en todo momento en nuestra Plataforma podrás obtener
                    toda la información sobre las Cookies utilizadas por esta Plataforma, junto con la información sobre el
                    propósito, duración y gestión (propia o por terceros) de cada una de ellas, para que puedas gestionar la
                    activación y desactivación del uso de aquellas Cookies que no son estrictamente necesarias para el
                    funcionamiento de la Plataforma.
                    <br><br>
                    Alternativamente, en caso de que estés navegando por internet, puedes deshabilitar en tu navegador el
                    uso de Cookies. Te indicamos la manera de realizarlo en los navegadores más populares:
                    <br><br>
                    <a href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647" target="_blank">• Google Chrome</a><br>
                    <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank">• Internet Explorer</a><br>
                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank">• Mozilla Firefox</a><br>
                    <a href="https://support.apple.com/es-es/HT201265" target="_blank">• Safari</a>
                    <br><br>
                    Esta posibilidad de evitar el uso de Cookies puede ser llevada a cabo en cualquier momento. 
                    <br><br>
                    Por favor, ten en cuenta que tanto tu gestión del panel de configuración de Cookies, como tu opción de
                    rechazar las Cookies es específica para cada navegador que estés utilizando. Por lo tanto, si optas por
                    configurar las Cookies de una forma en un dispositivo y deseas que tu opción se aplique de manera similar
                    a otro dispositivo, deberás activar la misma opción para ese otro dispositivo.
                    <br><br>
                    Como paso adicional, con respecto a las Cookies de terceros con la finalidad de proporcionar publicidad
                    basada en tus intereses, por favor ten en cuenta que ciertos terceros pueden ser miembros de alguno de
                    los siguientes programas autorreguladores de publicidad comportamental online, con las correspondientes
                    opciones de exclusión voluntaria:
                    <br><br>
                    <a href="http://www.networkadvertising.org/choices/" target="_blank">• Network Advertising Initiative (NAI) </a><br>
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">• Google Analytics </a><br>

                    </p>
                </div>


            <div class="row m-0">
                    <h5>5. ¿Quién utiliza la información almacenada en las Cookies?</h5>

                    <p>La información almacenada en las Cookies de nuestra Plataforma es utilizada exclusivamente por nosotros,
                    a excepción de aquellas identificadas en la sección 2 como “Cookies de terceros”, que son utilizadas y
                    gestionadas por entidades externas para proporcionarnos servicios dirigidos a mejorar nuestros servicios y
                    la experiencia del usuario al navegar en nuestra Plataforma. Más información en el panel de configuración
                    de Cookies accesible en todo momento en nuestra Plataforma. 
                    <br><br>
                    Para obtener información más detallada sobre el tratamiento de tus datos personales en nuestra colaboración
                    con terceros y aquellos sujetos a transferencias internacionales de datos, te recomendamos que leas nuestra
                    Política de Privacidad accesible en nuestra Plataforma, y las políticas de privacidad / configuraciones de
                    privacidad de estos terceros colaboradores accesibles a través de sus plataformas.  
                    </p>
                </div>

                <div class="divider"></div>
            </div>
        </div>

    </div>

</template>

<script>
export default {

    data() {
        return {
            isShowPolicy: false
        }
    },
    methods: {
        async acceptCookies() {
            localStorage.setItem('cookies-accepted', true)
            this.$store.commit('setCookiesAccepted', true)

            const token = await this.$store.dispatch('renewToken');
            localStorage.setItem('token', token)

        },
        showPolicy() {
            this.isShowPolicy = !this.isShowPolicy;
        }
    }

}
</script>

<style scoped>

.cookie-main {
    background-color: rgba(255, 255, 255, 0.3);
    width: 100vw;
    height: 100vh;
    z-index: 99;
    top: 0;
    position: fixed;
}

.cookie-container {
    background-color: #01569D;
    z-index: 99;
    position: fixed;
    bottom: 3%;
    left: 2%;
    border: 2px solid #FED823;
    margin: 0px;
    padding: 24px;
    max-width: 480px;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.policy-cookies {
    background-color: #01569D;
    z-index: 99;
    position: fixed;
    bottom: 0%;
    right: 0%;
    border-left: 2px solid #FED823;
    margin: 0px;
    padding: 24px;
    max-width: 480px;
    height: 100%;
    overflow-y: scroll;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.policy-cookies h1, 
.policy-cookies h3,
.policy-cookies h5  {
    color: white !important;
}


.policy-cookies h1 {
    color: #FED823 !important;
    font-size: 28px;
}


h3 {
    font-size: 24px;
    color: white;
    margin-bottom: 32px;
}

p, a{
    text-align: justify;
    font-size: 13px;
    color: white;
    margin-bottom: 32px;

}

a, span {
    color: #FED823 !important;
    cursor: pointer;
}



button.btn-primary, 
button.btn-primary:hover {
    background-color: #FED823 !important;
    color: #01569D !important;
    padding: 10px;
    width: 100% !important;
}


button.btn-primary:hover {
    opacity: .8;
}

</style>