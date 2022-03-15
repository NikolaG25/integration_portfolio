<template>
  <div class="projets">
    <h1>Mes projets</h1>

    <div class="dev">
      <h2>Développement</h2>
      <ul>
        <li class="project" v-for="projet in listeProjet" :key="projet.id" v-if="projet.acf.categorie_projet === 'Dév'">
          <h3>{{projet.acf.projets.title_project}}</h3>
          <img class="img_proj" :src="projet.acf.projets.img_project.url" :alt="projet.acf.projets.title_project">
          <button>

            <router-link :to="{name:'ficheProjet', params: {id: projet.id}}">Voir plus</router-link>
          </button>
        </li>
      </ul>
    </div>


    <div class="design">
      <h2>Design</h2>
      <ul>
        <li class="project" v-for="projet in listeProjet" :key="projet.id" v-if="projet.acf.categorie_projet === 'Design'">
          <h3>{{projet.acf.projets.title_project}}</h3>
          <img class="img_proj" :src="projet.acf.projets.img_project.url" :alt="projet.acf.projets.title_project">
          <button>
            <router-link :to="{name:'ficheProjet', params: {id: projet.id}}">Voir plus</router-link>
          </button>
        </li>
      </ul>
    </div>


    <div class="audio">
      <h2>Audiovisuel</h2>
      <ul>
        <li class="project" v-for="projet in listeProjet" :key="projet.id" v-if="projet.acf.categorie_projet === 'Audiovisuel'">
          <h3>{{projet.acf.projets.title_project}}</h3>
          <img class="img_proj" :src="projet.acf.projets.img_project.url" :alt="projet.acf.projets.title_project">
          <button class="button">
            <router-link :to="{name:'ficheProjet', params: {id: projet.id}}">Voir plus</router-link>
          </button>
        </li>
      </ul>
    </div>

    <div class="3d">
      <h2>3D</h2>
      <ul>
        <li class="project" v-for="projet in listeProjet" :key="projet.id" v-if="projet.acf.categorie_projet === '3D'">
          <h3>{{projet.acf.projets.title_project}}</h3>
          <img class="img_proj" :src="projet.acf.projets.img_project.url" :alt="projet.acf.projets.title_project">
          <button class="button">
            <router-link :to="{name:'ficheProjet', params: {id: projet.id}}">Voir plus</router-link>
          </button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: 'projets',
  data () {
    return {
      listeProjet: []
    }
  },

  created() {
    axios.get(param.host+'/projets')
    .then(response => {
      console.log(response.data)
      this.listeProjet = response.data
      console.log('liste', this.listeProjet)
    } ) .catch(error => console.log(error))
  }
}
</script>
