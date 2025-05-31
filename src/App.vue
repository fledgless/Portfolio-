<template>
  <nav>
    <router-link to="/"><img src="./assets/logo-nav.png" alt=""></router-link>
    <ul>
      <li><router-link to="/competences">Compétences</router-link></li>
      <li><router-link to="/projets">Projets</router-link></li>
    </ul>
  </nav>
  <router-view/>
</template>

<style>
@font-face {
  font-family: 'Jura';
  src: url('../public/font/Jura/Jura-VariableFont_wght.ttf') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Jura';
  src: url('../public/font/Jura/static/Jura-Bold.ttf') format('woff2');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Nunito Sans';
  src: url('../public/font/NunitoSans/NunitoSans-VariableFont_YTLC\,opsz\,wdth\,wght.ttf') format('woff2');
}

body {
  background: linear-gradient(to right, #010512, #04071b, #010512);;
  margin: 0;
}

#app {
  font-family: 'Jura', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9eb3c2;
  font-weight: bold;
}

nav {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, #010512, #788bff, #010512) 1;
  background: linear-gradient(to right, #010512, #020831, #010512);
  width: 100%;
}

nav img {
  height: 100px;
  margin: 5px 30px;
}

nav ul {
  display: flex;
  width: 50%;
  justify-content: space-around;
  padding: 30px;
  list-style: none;
}

nav a {
  font-weight: bold;
  color: #788bff;
  text-decoration: none;
  font-family: 'Jura', sans-serif;
  font-size: 1.2em;
}

nav a.router-link-exact-active {
  color: #9eb3c2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #9eb3c2;
  font-weight: bolder;
  font-size: 1.3em;
}

h1 {
    font-size: 2.5em;
    color: #788bff;
    margin: 0;
    font-family: 'Jura', sans-serif;
    font-size: 54px
  }

  h2 {
    font-size: 1.8em;
    color: #9eb3c2;
    margin: 0;
    font-family: 'Jura', sans-serif;
    font-size: 36px;
  }
</style>
