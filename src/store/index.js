import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    pokemons: [],
    pokemons1: [],
    apiUrl: 'http://pokeapi.co/api/v2/pokemon',
    imageUrl : 'https://pokeres.bastionbot.org/images/pokemon/',
    
  },
  getters : {
    pokemons (state){
      return state.pokemons
    },
    pokemons1 (state){
      return state.pokemons1
    },
  },
  mutations: {
    FETCHDATA(state, pokemons){
      state.pokemons=pokemons
    },
    FETCHDATA1(state, pokemons1){
      state.pokemons1=pokemons1
    },
  },
  actions: {
    act_fetchdata ({commit}){
      axios
        .get (this.state.apiUrl)
        .then( response =>  {
           commit('FETCHDATA', response.data)})
        .catch((error) => {
          console.log(error);
        })
    },
    act_fetchdata1 ({commit}){
      axios
        .get (this.state.apiUrl)
        .then( response =>  {
           commit('FETCHDATA1', response.data.results)})
        .catch((error) => {
          console.log(error);
        })
    },
    act_next ({commit}){
      axios
        .get (this.state.pokemons.next)
        .then( response =>  {
           commit('FETCHDATA', response.data)})
        .catch((error) => {
          console.log(error);
        })
    },
    act_prev ({commit}){
      axios
        .get (this.state.pokemons.previous)
        .then( response =>  {
           commit('FETCHDATA', response.data)})
        .catch((error) => {
          console.log(error);
        })
    },
  },

})
