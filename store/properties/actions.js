const actions = {

    async renewToken({ commit, state }) {

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.RENEW_TOKEN, config).then( resp => resp.json() )

        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setToken', resp.data[0].token)

            return resp.data[0].token
        } 
    },

    async getStates({ commit, state }) {

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_STATES, config).then( resp => resp.json() )

        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setStatesList', resp.data)
            return resp.data
        } 
    },

    async getCities({ commit, state }, folio){

        commit('setAPI_PARAMS', { body: `id=${ folio }`})

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_CITIES, config).then( resp => resp.json() )

        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setCitiesList', resp.data)
            console.log(resp.data)
        } 
        

    },

    async getColonias({ commit, state }, folio ) {

        commit('setAPI_PARAMS', { body: `id=${ folio }`})

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_COLONIAS, config).then( resp => resp.json() )
        console.log(resp)
        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setColoniasList', resp.data)
            console.log(resp)
            return resp.data
        } 
    },

    async getPropertyDetail({ commit, state }, id ){

        if ( id == undefined ) return


        // commit('setAPI_PARAMS', { body: `folio=${ id }&token=${ state.token }`})
        commit('setAPI_PARAMS', { body: `folio=${ id }`});
        
        const config = state.API_PARAMS

        try {
            const resp = await fetch(state.API_URL + state.GET_PROPERTYDETAIL, config).then( resp => resp.json() )

            if ( resp.status == 200 ) {
                return resp.data
            } 
        } catch( err ){
            console.log(err)
        }

        
        
        

    },

    

    async getProductsTypeByCityName({ commit, state }, folio){

        commit( 'setLoading', true )


        commit('setAPI_PARAMS', { body: `folio=${ folio }`})

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_PRODUCTSTYPE, config).then((res) => res.json())
        
        commit( 'setLoading', false )

        if ( resp.status == 200) {
            commit('setProductsTypeByCityName', resp.data)
            console.log(resp.data)
        }

    },
    async searchProducts({ commit, state }, formData){

      
        commit( 'setLoading', true )

        console.log(formData)
        // establecer el formulario al state
        commit('setSearchFormValues', formData)
        // commit('setAPI_PARAMS', { body: ``})
        
        commit('setAPI_PARAMS', { body: `ids=${ formData.ids ? formData.ids  : ''}&page=${ formData.page ? formData.page : '' }&state=${formData.state ? formData.state : ''}&keyword=${formData.keyword ? formData.keyword : ''}&municipality=${formData.city != undefined ? formData.city : ''}&category=${formData.category ? formData.category : ''}&limitProperties=${ formData.limit ? formData.limit : 20 }&m2t=${formData.m2t ? formData.m2t : ''}&m2c=${formData.m2c ? formData.m2c : ''}&bedroom=${formData.bedroom ? formData.bedroom : ''}&bathroom=${formData.bathroom ? formData.bathroom : ''}&pricemax=${formData.pricemax ? formData.pricemax : ''}&pricemin=${formData.pricemin ? formData.pricemin : ''}&type=${formData.category ? formData.category : ''}&operation=${formData.operation  ? formData.operation : ''}&folio=${formData.folio ? formData.folio : ''}&outstanding=${ formData.outstanding ? formData.outstanding : '' }&suburb=${ formData.suburb ? formData.suburb : '' }&token=${ state.token }`})


        let config = state.API_PARAMS;
      
        const resp = await fetch(state.API_URL + state.SEARCH_PROPERTIES, config).then((res) => res.json())
        
        console.log('SE LLAMO')
        console.log(resp.resp)

        commit( 'setLoading', false )
  
        if ( resp.status == 200  ) {
            commit("setPropertiesList", resp.resp.data);
            return resp.resp
        } 
  
      },



      async toIDI({ commit, state }, formData){

        const config = state.API_PARAMS

        commit('setAPI_PARAMS', { body: `state=${formData.state ? formData.state : ''}&municipality=${formData.municipality != undefined ? formData.municipality : ''}&category=${formData.category ? formData.category : ''}&m2t=${formData.m2t ? formData.m2t : ''}&m2c=${formData.m2c ? formData.m2c : ''}&bedroom=${formData.bedroom ? formData.bedroom : ''}&bathroom=${formData.bathroom ? formData.bathroom : ''}&pricemax=${formData.pricemax ? formData.pricemax : ''}&pricemin=${formData.pricemin ? formData.pricemin : ''}&type=${formData.category ? formData.category : ''}&operation=${formData.operation  ? formData.operation : ''}&suburb=${ formData.suburb ? formData.suburb : '' }&token=${ state.token }`})


        const resp = await fetch(state.API_URL + state.IDI, config).then( resp => resp.json() )

        console.log(resp)

        if ( resp.status == 200  ) {
            return resp.resp
        } 
        return null
    },


    async sendToWhatsApp({ commit, state }, formData){


        const resp = await fetch(state.API_URL + state.WHATSFORM, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
                body: `RDx_nombre=${ formData.name }&RDx_correo=${ formData.email }&RDx_telefono=${ formData.whatsapp }&RDx_message=${ formData.message }&RDx_productid=${ formData.productId }`
            },
        ).then( resp => resp.json() )


        if ( resp.status == 200  ) {
            return resp
        } 
        return null
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


        commit('setAPI_PARAMS', { body: `RDx_nombre=${form.name}&RDx_correo=${form.email}&RDx_contra=${form.password}&SDx_empresa=${form.company}` } )

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.REGISTER_USER, config).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            return resp.data
        }

    },



    async sendMain({commit, state}, form ) {

        commit('setAPI_PARAMS', { body: `RDx_nombre=${form.name}&RDx_correo=${form.email}&RDx_message=${form.message}&RDx_telefono=${form.phone}&RDx_productid=${form.idProduct}` } )
      

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


    async verifyToken({commit, state}, token){

        commit('setAPI_PARAMS', { body: `token=${token}` } )

        const config = state.API_PARAMS

       const resp = await fetch(state.API_URL + state.VERIFICATE_PASS, config).then((res) => res.json())
 
       return resp.data
        
    },


    async changePassword({commit, state}, values){

        commit('setAPI_PARAMS', { body: `token=${values.token}&RDx_contra=${values.password}` } )

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.CHANGE_PASSWORD, config).then((res) => res.json())

        return resp.data


    },


    async getNews({ commit, state } ) {

      

        const resp = await fetch('https://api.newscatcherapi.com/v2/search?q=inmobiliarias&page_size=4&countries=mx', {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '8ju2OkZitjD-igaZTJ99_51lRRgBsQS9Vmq50FkAD_c'
            }
        }).then( resp => resp.json() )
        // console.log(resp.articles)
        if ( resp.status == 'error'){
            return null;
        } else {
            return resp.articles;
        }

        
    },
}


export default actions