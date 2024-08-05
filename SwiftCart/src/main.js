import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
//import Header from "./components/Header.vue";
import ProductGrid from "./components/ProductGrid.vue";
import ProductDetails from "./components/ProductDetails.vue";

const routes = [
  //   { path: "", component: Header },
  { path: "/", component: ProductGrid },
  { path: "/product/:id", component: ProductDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
