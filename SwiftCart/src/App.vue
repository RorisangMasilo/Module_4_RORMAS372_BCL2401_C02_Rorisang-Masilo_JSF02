<script setup>
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductGrid from "./components/ProductGrid.vue";
import ProductDetails from "./components/ProductDetails.vue";

const routes = [
  { path: "/", component: ProductGrid },
  { path: "/product/:id", component: ProductDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
</script>

<template>
  <router-view />
</template>
