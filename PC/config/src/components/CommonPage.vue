<template>
  <div>
    <m-header></m-header>
    <router-view/>
  </div>
</template>

<script>
import mHeader from "../components/Header";
export default {
  name: "",
  components: { mHeader }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
