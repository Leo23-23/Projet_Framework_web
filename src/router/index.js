import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '../components/Pokemon.vue'
import PokemonDetail from '../components/PokemonDetail.vue'


const routes = [
  {
    path: '/Pokedex',
    name: 'Pokemon',
    component: Pokemon,
  },
  {
    path: '/Pokedex/:name',
    name: 'Pokemon-detail',
    component: PokemonDetail,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
