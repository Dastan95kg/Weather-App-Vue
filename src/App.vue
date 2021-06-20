<template>
  <div id="app">
    <Weather />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./components/Weather.vue";

Vue.use(BootstrapVue);

export default Vue.extend({
  name: "App",
  components: { Weather },
});
</script>

<style scoped>
html {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialised;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>
