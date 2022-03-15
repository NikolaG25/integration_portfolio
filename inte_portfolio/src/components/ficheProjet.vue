<template>
  <div class="fiche">
    <h1>{{projet.acf.projets.title_project}}</h1>
    <p>{{projet.acf.projets.date_project}}</p>
    <p>{{projet.acf.projets.groupe_solo_project[0]}}</p>
    <p v-if="projet.acf.projets.groupe_solo_project[0] === 'Groupe'">Nombre de personnes dans le groupe : {{projet.acf.projets.nb_person_project}}</p>

    <div class="fiche_project">
        <img class="image_project" :src="projet.acf.projets.img_project.url" alt="">


      <div class="content_project">
        <h2>Description du projet</h2>
        <p class="desc_proj">{{projet.acf.projets.desc_project}}</p>
        <h2>Mon rôle</h2>
        <p>{{projet.acf.projets.my_role_project}}</p>
        <h2>Outils et technologies utilisés</h2>
        <p>{{projet.acf.projets.tech_tools_project}}</p>
      </div>
    </div>

    <button class="button_proj" v-if="projet.acf.projets.link_project!== ''"><a :href="projet.acf.projets.link_project" target="_blank">Voir le projet</a></button>


  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: 'Accueil',
  data () {
    return {
      projet: {
        id:0
      }
    }
  },

  created() {

    this.projet.id = this.$route.params.id
    axios.get(param.host+'/projets/'+this.projet.id)
    .then(response => {
      console.log(response.data)
      this.projet = response.data
      console.log('liste', this.projet)
    } ) .catch(error => console.log(error))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: black;
}
  .container {
    display: flex;
    overflow: hidden;
    width: 100%;
    /*position: absolute;*/
    transform: translateY(-50%);
    margin-top: 7vw;
  }

  .title_port {
    white-space: nowrap;
    font-size: 10rem;
    animation: scrollTxt 25s linear infinite;
    border-top: solid 5px black;
    border-bottom: solid 5px black;
    /*padding-bottom: 15px;*/
    padding-top: 15px;
    /*font-family: Raleway, sans-serif;*/
  }

  .title2 {
    margin-top: 0;
  }

  .title2 .title_port {
    animation: scrollTxt 25s linear infinite reverse;

  }

  @keyframes scrollTxt {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: 1px black;
  }
</style>
