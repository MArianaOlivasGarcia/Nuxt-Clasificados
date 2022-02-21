


<template>
    <div class="pt-4 pb-5">
        <div class="container ">
            <div class="text-center mb-5" >
                    <h5>EMPRESAS INMOBILIARIAS CON LAS QUE TRABAJAMOS</h5>
            </div>
            <div class="row" style="justify-content: center;
        align-items: center;" >
                    <div class="col-md-2 col-sm-4 col-6 mb-md-0 mb-2"
                        v-for="companie in companies"
                        :key="companie.id">
                        <img :src="`/images/companies/${ companie.logo }`" class="logo-empresa" alt="">
                    </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            companies: [
                { id: 1, name: '', logo: 'baluarte.png' },
                { id: 2, name: '', logo: 'chap.jpg' },
                { id: 3, name: '', logo: 'kw.png' },
            ]
        }
    }
}
</script>

<style scoped>
h5 {
    font-size: 2rem;
    font-weight: 700;
    position: relative;
}
h5:after, h5:before {
    width: 100px;
    height: 4px;
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: #00569f;
    content: '';
}

.logo-empresa {
    height: 90px;
}

</style>