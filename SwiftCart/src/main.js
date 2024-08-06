import "./style.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
//import SortFilter from "./components/SortFilter.vue";
import ProductGrid from "./components/ProductGrid.vue";
import ProductDetails from "./components/ProductDetails.vue";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");

const routes = [
  //{ path: "/", component: SortFilter },
  { path: "/", component: ProductGrid },
  { path: "/product/:id", component: ProductDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
