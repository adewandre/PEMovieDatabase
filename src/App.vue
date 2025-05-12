<template>
  <div id="app">
    <!-- Optional Global Header -->
    <header>
      <h1>PEMovies</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/movies">Movies</router-link>
      </nav>
    </header>

    <!-- Display the current route component -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #42b983;
  padding: 10px;
  color: white;
}

nav {
  margin-top: 10px;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>

