<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import api from "../mock/api.js";
export default {
  async created() {
    let res = await axios.get(api.getUserInfo);
    console.log(res);
  }
};
</script>
<style lang="scss">
$black: black;
$yellow: yellow;
h2 {
  color: $black;
  background: $yellow;
  font-size: 40px;
  // transform: rotate(20deg);
}
</style>