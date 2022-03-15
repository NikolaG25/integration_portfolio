import Vue from 'vue'
import Router from 'vue-router'


import Accueil from "@/components/Accueil";
import projets from "@/components/projets";
import apropos from "@/components/Apropos";
import contact from "@/components/Contact";
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
      path: '/apropos',
      name: 'Apropos',
      component: apropos
    },
    {
      path: '/contact',
      name: 'Contact',
      component: contact
    },
    {
      path: '/ficheProjet/:id',
      name: 'ficheProjet',
      component: ficheProjet
    },
  ]
})
