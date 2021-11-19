import propertiesState from './properties/state'
import propertiesGetters from './properties/getters'
import propertiesActions from './properties/actions'
import propertiesMutations from './properties/mutations'

export const state = () => ({
    ...propertiesState
})

export const getters = {
    ...propertiesGetters
}

export const actions = {
    ...propertiesActions
}

export const mutations = {
    ...propertiesMutations
}