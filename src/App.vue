<template>
  <div id="app">
    <div class="m-main f-cf">
      <div class="left flex">
        <left-nav :modules="modules"></left-nav>
      </div>
      <div class="right flex">
        <router-view
          class="view"
          keep-alive
          transition
          transition-mode="out-in">
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import data from "./data.js"
  import LeftNav from './components/leftNav.vue'

  export default {
    data () {
      return {
        modules: data.getModules()
      }
    },
    components: {
      LeftNav
    }
  }
</script>

<style>
  @import "./css/reset.css";
  @import "./css/galleryColumns.css";
</style>

<style lang="less">
  @import "./less/index.less";
</style>
