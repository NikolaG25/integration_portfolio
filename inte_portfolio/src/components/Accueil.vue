<template>
  <div class="accueil">
    <h1 class="name">Nicolas GELIN</h1>
    <div class="titles">
      <div class="container">
        <h1 class="title_port">- PORTFOLIO - <span class="outline">PORTFOLIO</span> - PORTFOLIO - <span class="outline">PORTFOLIO</span>&nbsp;</h1>
        <h1 class="title_port">- PORTFOLIO - <span class="outline">PORTFOLIO</span> - PORTFOLIO - <span class="outline">PORTFOLIO</span>&nbsp;</h1>

      </div>

      <div class="container title2">
        <h1 class="title_port">- DÉVELOPPEMENT - <span class="outline">DESIGN</span> - AUDIOVISUEL - <span class="outline">3D</span>&nbsp;</h1>
        <h1 class="title_port">- DÉVELOPPEMENT - <span class="outline">DESIGN</span> - AUDIOVISUEL - <span class="outline">3D</span>&nbsp;</h1>
      </div>
    </div>


    <div class="me">
      <div class="my_photo">
        <img :src="Me[0].acf.my_photo.url" alt="">
        <div class="border"></div>
      </div>
      <div class="presentation">
        <p>Je m'appelle Nicolas GELIN, je suis actuellement étudiant en DUT MMI à Montbéliard et je vais poursuivre mes études à l'école HETIC dans le Bachelor Développement Web de cette école.</p>
        <button><a :href="Me[0].acf.cv.url" download target="_blank">Voir mon CV</a></button>
      </div>


    </div>

    <div class="liste_projets">
      <div class="projet" v-for="projet in listeProjetEnAvant" :key="projet.id" v-if="projet.acf.projets.en_avant === true">
        <h1>{{projet.acf.projets.title_project}}</h1>
        <div>
          <div class="cap_proj">
            <img :src="projet.acf.projets.img_project.url" alt="">
            <div class="border"></div>
          </div>
          <p>{{projet.acf.projets.desc_project}}</p>
          <button>
            <router-link :to="{name:'ficheProjet', params: {id: projet.id}}">Voir plus</router-link>
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: 'Accueil',
  data () {
    return {
      listeProjetEnAvant: [],
      Me: []
    }
  },

  created() {
    axios.get(param.host+'/moi')
    .then(response => {
      this.Me = response.data
      console.log('me', this.Me)
    })
    .catch(error => console.log(error))
    axios.get(param.host+'/projets')
    .then(response => {
      console.log(response.data)
      this.listeProjetEnAvant = response.data
      console.log('liste', this.listeProjetEnAvant)
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
    font-size: 8vw;
    animation: scrollTxt 25s linear infinite;
    border-top: solid 5px black;
    border-bottom: solid 5px black;
    /*padding-bottom: 15px;*/
    padding-top: 15px;
    /*font-family: Raleway, sans-serif;*/
    margin-bottom: 0;
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
