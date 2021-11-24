const actions = {

    async getStates({ commit, state }) {

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_STATES, config).then( resp => resp.json() )

        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setStatesList', resp.data)
        } 
    },

    async getPropertyDetail({ commit, state }, id ){

        commit('setAPI_PARAMS', { body: `folio=${ id }`})

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_PROPERTYDETAIL, config).then( resp => resp.json() )
        
        if ( resp.status == 200 ) {
            return resp.data
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

        // commit('setAPI_PARAMS', { body: ``})
        commit('setAPI_PARAMS', { body: `ids=${ formData.ids }&page=${ formData.page }&state=${formData.state}&keyword=${formData.keyword}&city=${formData.city != undefined ? formData.city : ''}&category=${formData.category}&limitProperties=${ 20 }&m2t=${formData.m2t}&m2c=${formData.m2c}&bedroom=${formData.bedroom}&bathroom=${formData.bathroom}&pricemax=${formData.pricemax}&pricemin=${formData.pricemin}&type=${formData.category}&operation=${formData.operation}`})

        let config = state.API_PARAMS;
      
        const resp = await fetch(state.API_URL + state.SEARCH_PROPERTIES, config).then((res) => res.json())
        
        console.log(resp.resp)

        commit( 'setLoading', false )
  
        if ( resp.status == 200  ) {
            commit("setPropertiesList", resp.resp.data);
            return resp.resp
        } 
  
      },


      async login({ commit, state }, form ){


        commit('setAPI_PARAMS', { body: `RDx_correo=${form.email}&RDx_contra=${form.password}` } )

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.LOGIN_USER, config).then((res) => res.json())
        
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
        // &RDx_productid=${30}

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.VISIT_CONTACT, config).then((res) => res.json())
    
        if ( resp.status == 200 ) {
            return resp.data
        } else {
            return null
        }

    },

    async getOutstanding({ commit, state } ){
      
        commit( 'setLoading', true )

        commit('setAPI_PARAMS', { body: `limitProperties=${ 20 }&outstanding=${ 1 }`})//&outstanding=${1}
        
        let config = state.API_PARAMS;
      
        const resp = await fetch(state.API_URL + state.SEARCH_PROPERTIES, config).then((res) => res.json())
   
        commit( 'setLoading', false )
  
        if ( resp.status == 200  ) {
            commit("setOutstanding", resp.resp.data);
        } 
  
      },
      async forgotPassword({commit, state}, form ) {

        commit('setAPI_PARAMS', { body: `email=${form.email}` } )

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.FORGOT_PASSWORD, config).then((res) => res.json())
        .catch( e => console.log(e))

        /* Api clasificados.host */
        if (!resp) {
            return null
        }
        /* FIN Api clasificados.host */

        
        if ( resp.status != 200 ) {
            return null
        } 
        
        return resp.data
        

    },

}


export default actions