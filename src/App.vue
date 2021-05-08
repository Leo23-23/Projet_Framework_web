  
<template>
  <div id="app">
    <!--<Pokemon />-->
    <PremierePage />
    <!--<router-view/>-->
  </div>
</template>

<script>
import Pokemon from './components/Pokemon.vue'
import PremierePage from './components/PremierePage.vue'
export default {
  components: {
    Pokemon,
    PremierePage
  }
}
</script>

<style lang="scss">
  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
  body {
    margin: 0;
    padding: 0;
  }
</style>
