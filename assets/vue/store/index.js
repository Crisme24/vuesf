import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/home";

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        isLoading: false
    },
    getters:{
        getLoading(state){
            return state.isLoading
        }
    },
    mutations:{
        setLoading(state, newLoadingState){
            state.isLoading = newLoadingState
        }
    },
    actions:{
    },
    modules: {
        home
    }
})
