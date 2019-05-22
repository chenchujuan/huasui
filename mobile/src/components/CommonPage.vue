
<template>
  <div>
    <m-header></m-header>

    <router-view/>
    <m-footer></m-footer>
  </div>
</template>

<script>
import { Header, Popup } from "mint-ui";
import mHeader from "../components/Header";
import mFooter from "../components/Footer";
export default {
  name: "gszc",
  components: { mHeader, mFooter }
};
</script>

<style>
</style>
