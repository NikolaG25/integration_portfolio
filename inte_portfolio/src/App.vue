<template>
  <div id="app">
    <header>
      <ul>
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/projets">Tous mes projets</router-link>
        </li>
        <li>
          <router-link to="apropos">A propos de moi</router-link>
        </li>
        <li>
          <router-link to="contact">Contact</router-link>
        </li>
      </ul>
    </header>
    <router-view/>
    <footer>

    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
