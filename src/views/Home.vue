<template>
  <div class="home">
    <home-search></home-search>
    
    <app-nav></app-nav>
  </div>
</template>

<script>
// @ is an alias to /src

import AppNav from "@com/layout/AppNav.vue"
import HomeSearch from "@com/home/HomeSearch.vue"
export default {
  components: {
    AppNav,
    HomeSearch,
  }
};
</script>
