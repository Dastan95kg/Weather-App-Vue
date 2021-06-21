<template>
  <video autoplay loop muted v-if="definition === 'Rain'">
    <source src="../assets/rain.mp4" type="video/mp4" />
  </video>
  <video autoplay loop muted v-else-if="definition === 'Clear'">
    <source src="../assets/clear.mp4" type="video/mp4" />
  </video>
  <video autoplay loop muted v-else-if="definition === 'Clouds'">
    <source src="../assets/clouds.mp4" type="video/mp4" />
  </video>
  <video autoplay loop muted v-else-if="definition === 'Haze'">
    <source src="../assets/haze.mp4" type="video/mp4" />
  </video>
  <video autoplay loop muted v-else-if="definition === 'Snow'">
    <source src="../assets/snow.mp4" type="video/mp4" />
  </video>
  <video autoplay loop muted v-else-if="definition === 'Thunderstorm'">
    <source src="../assets/thunderstorm.mp4" type="video/mp4" />
  </video>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Video",
  props: { definition: String },
});
</script>

<style scoped>
video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 140px;
  left: 0;
  z-index: -1;
}
</style>