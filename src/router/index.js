import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '../components/Pokemon.vue'
import Retour from '../components/Retour.vue'

const routes = [
  {
    path: '/Pokedex',
    name: 'Pokemon',
    component: Pokemon,
  },
  /*{ 
    
    path: '/',
    name: 'Retour',
    component: Retour,
  }*/

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
