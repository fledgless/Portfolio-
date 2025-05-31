<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/competences">Compétences</router-link>
    <router-link to="/projets">Projets</router-link>
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
  background-color: #010512;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9eb3c2;
}

nav {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, #010512, #788bff, #010512) 1;
  background: linear-gradient(to right, #010512, #020831, #010512);
}

nav a {
  font-weight: bold;
  color: #788bff;
  text-decoration: none;
  font-family: 'Jura', sans-serif;
  font-size: 1.2em;
}

nav a.router-link-exact-active {
  color: #5465ff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #5465ff;
  font-weight: bolder;
}
</style>
