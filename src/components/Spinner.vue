<template>
  <div class="loadingio-spinner-wedges-j0mxvrxqwco" v-if="isLoading">
    <div class="ldio-kx8hkrea90c">
      <div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Spinner",
  props: { isLoading: Boolean },
});
</script>


<style scoped>
@keyframes ldio-kx8hkrea90c {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-kx8hkrea90c > div > div {
  transform-origin: 50px 50px;
  animation: ldio-kx8hkrea90c 3.0303030303030303s linear infinite;
  opacity: 0.8;
}
.ldio-kx8hkrea90c > div > div > div {
  position: absolute;
  left: 15px;
  top: 15px;
  width: 35px;
  height: 35px;
  border-radius: 35px 0 0 0;
  transform-origin: 50px 50px;
}
.ldio-kx8hkrea90c > div div:nth-child(1) {
  animation-duration: 0.7575757575757576s;
}
.ldio-kx8hkrea90c > div div:nth-child(1) > div {
  background: #e15b64;
  transform: rotate(0deg);
}
.ldio-kx8hkrea90c > div div:nth-child(2) {
  animation-duration: 1.0101010101010102s;
}
.ldio-kx8hkrea90c > div div:nth-child(2) > div {
  background: #f47e60;
  transform: rotate(0deg);
}
.ldio-kx8hkrea90c > div div:nth-child(3) {
  animation-duration: 1.5151515151515151s;
}
.ldio-kx8hkrea90c > div div:nth-child(3) > div {
  background: #f8b26a;
  transform: rotate(0deg);
}
.ldio-kx8hkrea90c > div div:nth-child(4) {
  animation-duration: 3.0303030303030303s;
}
.ldio-kx8hkrea90c > div div:nth-child(4) > div {
  background: #abbd81;
  transform: rotate(0deg);
}
.loadingio-spinner-wedges-j0mxvrxqwco {
  width: 100px;
  height: 100px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-kx8hkrea90c {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-kx8hkrea90c div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
</style>