

export const state = () => ({


    API_URL: "https://www.clasificadoscontacto.host/api/",
    API_PARAMS: {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: {},
    },
    GET_STATES: '?site=WHFNUnMvempwajFZNUYyaDNkenpFTXRsdnhDR3lDNVNNb3hzQVZDWVJRND0=',
    GET_CITIES: '?site=bSthSTBJZEwrc0xZaWFrcTNLMVdRVElzdmxKU0tpZ3BkcjNSWEtwRjMzTT0=',
    GET_PRODUCTSTYPE: '?site=UHZLWEF6Q2FtZjFjWHNrWDNORjNOQXpJaTRFNG9zOWtoTHNQczRXUW1GMD0=',
    SEARCH_PROPERTIES: '?site=aHoxd1ZFOUdhYlRmNC9zMWRSNmdpTm15VVptaWE4aUhCaysraEk1ZFhJND0=',
    LOGIN_USER: '?site=a0VXNDI5SHhCSlljR1BXaThyL2kyQT09',
    REGISTER_USER: '?site=bERwdld0UGkwNU5iVmh4cDZzbU1BQT09',
    VISIT_CONTACT: '?site=VlRndFVwVVl2MExnVGtxVW4rZzhKZz09',


    /* Listado de Estados */
    statesList: [],
    /* Listado de Ciudades */
    citiesList: [],
    /* Listado de propiedades por tipo, obtenidas por nombre de la ciudad*/
    productsType: [],
    /* Formulario busqueda */
    searchForm: {
        state: '',
        keyword: '',
        city: '',
        category: '',
        type: "",
        outstanding: "",
        limit: "",
        pricemax: "",
        pricemin: "",
        m2t: "",
        m2c: "",
        bedroom: "",
        bathroom: ""
    },
    /* CARGANDO... */
    isLoading: true,
    /* Listado de propiedades */
    propertiesList: [],
    /* Listado de propiedades sobresalientes */
    outstanding: [],
    /* Types / Categorias */
    propertiesTypes: [
        { name: 'Casa',               value: 1 },
        { name: 'Departamento',       value: 2 },
        { name: 'Local Comercial',    value: 3 },
        { name: 'Terreno',            value: 4 },
        { name: 'Oficina',            value: 5 },
        { name: 'Conjunto Cerrado',   value: 6 },
        { name: 'Rancho',             value: 7 },
        { name: 'Membresia',          value: 8 },
        { name: 'Hotel',              value: 9 },
        { name: 'Marina',             value: 10 },
        { name: 'Inversiones',        value: 11 },
        { name: 'Bodega',             value: 12 },
        { name: 'Edificio',           value: 13 },
        { name: 'Casa Comercial',     value: 14 },
        { name: 'Estacionamiento',    value: 15 },
        { name: 'Edificio Comercial', value: 16 },
        { name: 'Granja',             value: 17 },
        { name: 'Anexo ',             value: 18 },
    ],
    /* Folio del usuario logeado */
    userLogged: null


})




export const getters = {

    getUserLogged( state ) {
        return state.userLogged
    },
    getStatesList( state ) {
        return state.statesList
    },
    getCitiesList( state ) {
        return state.citiesList
    },
    getProductsTypeByCityName( state ) {
        return state.productsType
    },
    getSearFormValues( state ) {
        return state.searchForm
    },
    getIsLoading( state ) {
        return state.isLoading
    },
    getPropertiesList( state ) {
        return state.propertiesList
    },
    getPropertiesTypes( state ) {
        return state.propertiesTypes
    },
    getOutstanding( state ) {
        return state.outstanding
    }

}




export const actions = {

    async getStates({ commit, state }) {

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_STATES, config).then( resp => resp.json() )

        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setStatesList', resp.data)
        } 
    },

    async getCities({ commit, state }, folio){

        commit('setAPI_PARAMS', { body: `folio=${ folio }`})

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_CITIES, config).then( resp => resp.json() )

        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setCitiesList', resp.data)
        } 
        

    },
    async getProductsTypeByCityName({ commit, state }, folio){

        commit( 'setLoading', true )


        commit('setAPI_PARAMS', { body: `folio=${ folio }`})

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_PRODUCTSTYPE, config).then((res) => res.json())
        
        commit( 'setLoading', false )


        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setProductsTypeByCityName', resp.data)
        }

    },
    async searchProducts({ commit, state }, formData){
      
        commit( 'setLoading', true )

        commit('setAPI_PARAMS', { body: `state=${formData.state}&keyword=${formData.keyword}&city=${formData.city != undefined ? formData.city : ''}&category=${formData.category}&limitProperties=${ formData.limit }&m2t=${formData.m2t}&m2c=${formData.m2c}&bedroom=${formData.bedroom}&bathroom=${formData.bathroom}&pricemax=${formData.pricemax}&pricemin=${formData.pricemin}&type=${formData.type}`})
        
        let config = state.API_PARAMS;
        // const outstanding = state.search.outstanding; 
        // &outstanding=${formData.outstanding}`;
      
        const resp = await fetch(state.API_URL + state.SEARCH_PROPERTIES, config).then((res) => res.json())
        
        commit( 'setLoading', false )
  
        if ( resp.status == 200  ) {
            console.log(resp)
            commit("setPropertiesList", resp.data);
          /* if(outstanding){
            commit("setPropertyOutstandingList", resp.data);
          }else{
            commit("setPropertyList", resp.data);
          }  */
        } 
  
  
      
      },


      async login({ commit, state }, form ){


        commit('setAPI_PARAMS', { body: `RDx_correo=${form.email}&RDx_contra=${form.password}` } )

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.ADD_USER, config).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            return resp.data
        }

    },


    async register({ commit, state }, form ){


        commit('setAPI_PARAMS', { body: `RDx_nombre=${form.name}&RDx_correo=${form.email}&RDx_contra=${form.value}&SDx_empresa=${form.company}` } )

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.REGISTER_USER, config).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            return resp.data
        }

    },



    async sendMain({commit, state}, form ) {

        commit('setAPI_PARAMS', { body: `RDx_nombre=${form.name}&RDx_correo=${form.email}&RDx_message=${form.message}&RDx_telefono=${form.phone}` } )
        // &RDx_productid=${this.idProduct}

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.VISIT_CONTACT, config).then((res) => res.json())
    
        if ( resp.status == 200 ) {
            return resp.data
        }

    },

    async getOutstanding({ commit, state } ){
      
        commit( 'setLoading', true )

        commit('setAPI_PARAMS', { body: `limitProperties=${ 12 }`})//&outstanding=${1}
        
        let config = state.API_PARAMS;
      
        const resp = await fetch(state.API_URL + state.SEARCH_PROPERTIES, config).then((res) => res.json())
        
        commit( 'setLoading', false )
  
        if ( resp.status == 200  ) {
            commit("setOutstanding", resp.data);
        } 
  
      },

}




export const mutations = {

    setUserLogged(state, folio){
        state.userLogged = folio
    },
    setStatesList(state, states){
        state.statesList = states
    },
    setCitiesList(state, cities){
        state.citiesList = cities
    },
    setAPI_PARAMS(state, api_params){
        state.API_PARAMS = {
            ...state.API_PARAMS,
            ...api_params
        }
    },
    setProductsTypeByCityName(state, productsType){
        state.productsType = productsType
    },
    setSearchFormValues(state, values){
        state.searchForm = {
            ...state.searchForm,
            ...values
        }
    },
    setLoading(state, isLoading){
        state.isLoading = isLoading
    },
    setPropertiesList(state, properties){
        state.propertiesList = properties
    },
    setOutstanding(state, properties){
        state.outstanding = properties
    }

}