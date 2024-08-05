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

<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else class="flex justify-center">
    <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:max-w-6 xl xl:max-w-7x1">
      <div class="mx-auto w-2/5 flex-none">
        <img :src="product.image" alt="Product Image" class="w-[90%] h-[90%" />
      </div>
      <div class="mx-auto w-[90%] space-y-2">
        <h1 class="text-2xl md:text-4xl lg:text-4xl font-bold">
          {{ product.title }}
        </h1>
        <p>{{ product.rating }} (Reviews: {{ product.reviews }})</p>
        <p class="">{{ product.category }}</p>
        <h3 class="text-xl md:text-2xl lg:text-2xl font-bold">
          ${{ product.price }}
        </h3>
        <button
          @click="$emit('add-to-cart', product)"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
        <h2>{{ product.description }}</h2>
      </div>
    </div>
  </div>
</template>
