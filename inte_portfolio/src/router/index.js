import Vue from 'vue'
import Router from 'vue-router'


import Accueil from "@/components/Accueil";
import projets from "@/components/projets";
import ficheProjet from "@/components/ficheProjet";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/projets',
      name: 'Projets',
      component: projets
    },
    {
      path: '/ficheProjet/:id',
      name: 'ficheProjet',
      component: ficheProjet
    },
  ]
})
