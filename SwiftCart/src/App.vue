<script>
import Header from "./components/Header.vue";
import SortFilter from "./components/SortFilter.vue";
import SortFilter from "./components/SortFilter.vue";

export default {
  name: "App",
  components: {
    Header,
    SortFilter,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <SortFilter />
    <router-view></router-view>
  </div>
</template>

<style>
/* Global styles can go here */
</style>
