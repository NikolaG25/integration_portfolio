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
      <div class="nav_footer">
        <h2>Navigation</h2>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/projets">Mes projets</router-link></li>
        </ul>
      </div>

      <div class="contact">
        <h2>Contact</h2>
        <ul>
          <li><img src="./assets/logo_linkedin.png" alt="Logo Linkedin"><button><a href="https://www.linkedin.com/in/nicolas-gelin-6068111bb/">Nicolas Gelin</a></button></li>
          <li><img src="./assets/logo_git.png" alt="Logo github"><button><a href="https://github.com/NikolaG25">NikolaG25</a></button></li>
          <li><img src="./assets/logo_mail.png" alt="Logo e-mail"><button><a href="mailto:ngelin02@gmail.com">ngelin02@gmail.com</a></button></li>
        </ul>
      </div>

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
