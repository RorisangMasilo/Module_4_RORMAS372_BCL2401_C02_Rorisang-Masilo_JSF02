import { createRouter, createWebHistory } from "vue-router";
// import SortFilter from "./components/SortFilter.vue";
import ProductGrid from "./components/ProductGrid.vue";
import ProductDetails from "./components/ProductDetails.vue";

const routes = [
  //   { path: "/", component: SortFilter },
  { path: "/", component: ProductGrid },
  { path: "/product/:id", component: ProductDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
