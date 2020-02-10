import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import dataCountries from './full_countries.json'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
      count: 0,
      countries: dataCountries
    },
    mutations: {
		increment (state, payload){
			return state.count = state.count + payload.amount;
		},
		decrement (state, payload){
			return state.count = state.count - payload.amount;
		}
    },
	actions: {
		increment (context, payload) {
			context.commit('increment', payload)
		},
		decrement (context, payload) {
			context.commit('decrement', payload)
		}
	},
	getters:{
		countState: state => state.count,
		fullCountries: state => state.countries,
	}
});


export default store;