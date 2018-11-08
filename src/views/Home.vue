<template>
  <div class="home">
    <home-search></home-search>
    <router-view></router-view>
    <app-nav></app-nav>
  </div>
</template>

<script>


import AppNav from "@com/layout/AppNav.vue"
import HomeSearch from "@com/home/HomeSearch.vue"
export default {
  components: {
    AppNav,
    HomeSearch,
  }
};
</script>
