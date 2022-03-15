<template>
  <div id="app">
    <header>
      <ul class="menu">
        <li>
          <button>
            <router-link to="/">Accueil</router-link>

          </button>
        </li>
        <li>
          <button>
            <router-link to="/projets">Mes projets</router-link>
          </button>
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
  text-align: center;

}


</style>
