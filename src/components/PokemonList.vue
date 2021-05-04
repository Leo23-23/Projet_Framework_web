<template>
    <div class="searchbar">
        <form @submit.prevent="setPokemonUrl">
            <input type="text" placeholder="Rechercher par nom...." v-model="searchvalue">
        </form>
        <i class="fas fa-search" @click="setPokemonUrl"></i>
    </div>
 <div class="buton">
    <button v-if="pokemons.previous" @click="act_prev">Previous</button>
    <button v-if="pokemons.next" @click="act_next">Next</button>
</div>
<div class="container">
    <div class="list">
    <article v-for ="pokemon in pokemons.results /*filteredList*/" :key="pokemon" @click="setPokemonUrl1(pokemon.url)">
        <img :src="imageUrl + edit_lien_image (pokemon.url)" width="96" height="96" alt="" > 
        <h3>{{pokemon.name}}</h3>
    </article> 
    </div>
  </div>
    
</template>
<script>
import { defineComponent } from 'vue'
import {mapState, mapActions , mapGetters } from 'vuex'

export default defineComponent({
  props: [
      'imageUrl',
      'apiUrl'
    ],
    data(){
       return {
         searchvalue : '',
        
      }
    },
    computed:{
      ...mapState(['imageUrl','pokemons','apiUrl','pokemons1']),
      ...mapGetters(['pokemons','pokemons1']),
      filteredList(){
        return this.pokemons1.filter((pokemon)=>{
          return pokemon.name.toLowerCase().includes(this.searchvalue.toLowerCase());
        })
      },
    },

        
    mounted(){
      this.$store.dispatch("act_fetchdata1");
      this.$store.dispatch("act_fetchdata");
        
        
    },

    methods:{
        edit_lien_image (chaine){
            return chaine.split('/').filter(function (part){return !!(part)}).pop()+ '.png';
        },
        ...mapActions(['act_next','act_prev']),
        setPokemonUrl1(url) {
          this.$emit('setPokemonUrl', url);
        },
        setPokemonUrl(url) {
          if(this.searchvalue !== '')
            this.searchvalue=this.searchvalue.toLowerCase()
            this.$emit('setPokemonUrl', this.apiUrl  + this.searchvalue);
      },
      
    }
    
})
</script>

<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 10px;
    width: 100%;
    max-width: 900px;
    article {
      height: 150px;
      background-color: #efefef;
      text-align: center;
      text-transform: capitalize;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
      h3 {
        margin: 0;
      }
    }
  }
  .buton {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 300px;
    width: 100%;

  }
  .searchbar {
    position: relative;
    width: 100%;
    max-width: 510px;
    padding-bottom: 20px;
    input {
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 10px 40px 10px 10px;
      width: calc(100% - 50px);
      font-size: 1rem;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
    }
    i {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.25rem;
      color: #0A2E50;
      cursor: pointer;
    }
  }
</style>-->