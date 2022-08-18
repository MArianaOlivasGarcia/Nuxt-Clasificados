<template>
    <div class=" pt-4 pb-3">
        <div class="container">
            
            <div class="row urlContained">

                    <div class="col-md-6" v-for="(value, key) in urls" :key="key">
                        <h2>{{ key }}</h2>
                        <div class="row">
                            <div class="col-md-6" v-for="(v, k) in value" :key="k">
                                <h3 class="mb-2">{{ k }}</h3>
                                <p style="text-align: justify;">
                                    <a v-for="(item, index) in v" :key="index" :href="item.url">{{ item.tag }}, </a>
                                </p>
                            </div>
                        </div>
                    </div>

            </div>

        </div>
    </div>
</template>


<script>
export default {
    props: {
        urls: {
            type: Object,
            required: true
        }
    },
    created() {

    }
}
</script>


<style scoped>
h2{
    color: #000;
    font-size: 15px;
    font-weight: bold;
}

h3{
    color: #000;
    font-size: 15px;
    margin: 0;
}

a {
    color: #145CA2;
    font-size: 14px;
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

