<template>
    <div class="container">
        <div>
            <img role="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png" width= "600"  />
        </div>
        <div>
             <img src="https://fr.vuejs.org/images/logo.png" width= "70"/>
        </div>
        <div class="article">
            <h3>Projet Pokedex</h3>
            <nav>
              <router-link to="/Pokedex">Cliquer ici</router-link> 
              <router-view/>
            </nav> 
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Acme');
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: calc(100% - 20px);
    min-height: 100%;
    background: radial-gradient(#02a4fb, #efefef);
    font-family: 'Acme', arial;
    font-size: 1rem;
    font-weight: normal;
  }
  .article {
      height: 60px;
      background-color: #efefef;
      text-align:center ;
      text-transform: capitalize;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
      h3 {
        margin: 0;
      }
    }
  h1 { color: #efefef; }
</style>