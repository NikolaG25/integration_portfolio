<template>
  <div class="accueil">
    <h1>Nicolas GELIN</h1>
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

<!--    <ul>-->
<!--      <li v-for="projet in listeProjetEnAvant" :key="projet.key" v-if="projet.acf.projets.en_avant === true">-->
<!--        <h1>{{projet.acf.projets.title_project}}</h1>-->
<!--      </li>-->
<!--    </ul>-->

  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: 'Accueil',
  data () {
    return {
      listeProjetEnAvant: []
    }
  },

  created() {
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
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
  }

  .title_port {
    white-space: nowrap;
    font-size: 200px;
    animation: scrollTxt 25s linear infinite;
    border-top: solid 10px black;
    border-bottom: solid 10px black;
    /*padding-bottom: 15px;*/
    padding-top: 15px;
    /*font-family: Raleway, sans-serif;*/
  }

  .title2 {
    margin-top: 20%;
  }

  .title2 .title_port {
    animation: scrollTxt 25s linear infinite reverse;

  }

  .title_comp {

    margin-top: 20%;
    white-space: nowrap;
    font-size: 200px;
    animation: scrollTxtReverse 25s linear infinite;
    border-top: solid 10px black;
    border-bottom: solid 10px black;
  }

  /*.tp1 {*/
  /*  color: red;*/
  /*}*/

  /*.tp2 {*/
  /*  color: blue;*/
  /*}*/

  @keyframes scrollTxt {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

  @keyframes scrollTxtReverse {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: 7px black;
  }
</style>
