<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "./ProductCard.vue";

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  products.value = await response.json();
  loading.value = false;
});
</script>

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div
    v-else
    class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
