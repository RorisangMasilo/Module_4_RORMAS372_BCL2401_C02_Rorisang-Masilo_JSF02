<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style>
/* Global styles can go here */
</style>
