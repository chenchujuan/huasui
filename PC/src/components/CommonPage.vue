<template>
  <div>
    <m-header></m-header>
    <router-view/>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHeader from "../components/Header";
import mFooter from "../components/Footer";
export default {
  name: "",
  components: { mHeader, mFooter }
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
