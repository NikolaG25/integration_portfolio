<template>
  <div class="accueil">


  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: 'projets',
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
