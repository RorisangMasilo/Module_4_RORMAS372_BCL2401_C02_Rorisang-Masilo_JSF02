<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else class="grid">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "./ProductCard.vue";

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  const response = await fetch("https://api.example.com/products");
  products.value = await response.json();
  loading.value = false;
});
</script>
