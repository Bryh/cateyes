<template>
  <div id="app">
      <app-header></app-header>
      
      <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@com/layout/AppHeader.vue"
export default {
  name: "app",
  components: {
    AppHeader
 }
}
</script>


<style lang="scss">
#app{
  height: 100%;
}
</style>
