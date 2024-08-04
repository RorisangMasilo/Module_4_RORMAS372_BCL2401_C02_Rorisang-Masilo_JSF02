<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else>
    <img :src="product.image" alt="Product Image" />
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p>{{ product.price | currency }}</p>
    <p>{{ product.category }}</p>
    <p>{{ product.rating }} ({{ product.reviews }} reviews)</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const product = ref({});
const loading = ref(true);
const route = useRoute();

onMounted(async () => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${route.params.id}`
  );
  product.value = await response.json();
  loading.value = false;
});
</script>
