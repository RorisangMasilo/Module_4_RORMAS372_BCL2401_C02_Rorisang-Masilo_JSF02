<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
// import { useProductStore } from "../stores/productStore";

const product = ref({});
const loading = ref(true);
const route = useRoute();
// const store = useProductStore();

//onMounted(async () => {
// const productId = route.params.id;
// await store.fetchProductById(productId);
// product.value = store.selectedProduct;
// loading.value = false;
// //});

// export default {
//   computed: {
//     product() {
//       const store = useProductStore();
//       return store.selectedProduct;
//     },
//   },
//   async created() {
//     const store = useProductStore();
//     const productId = this.$route.params.id;
//     await store.fetchProductById(productId);
//   },
// };

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
        <img :src="product.image" alt="Product Image" class="w-[90%] h-[90%]" />
      </div>
      <div class="mx-auto w-[90%] space-y-2">
        <h1 class="text-2xl md:text-4xl lg:text-4xl font-bold">
          {{ product.title }}
        </h1>
        <p>{{ product.rating }}</p>
        <p>(Reviews: {{ product.reviews }})</p>
        <p
          class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
        >
          {{ product.category }}
        </p>
        <h3 class="text-xl md:text-2xl lg:text-2xl font-bold">
          ${{ product.price }}
        </h3>
        <button
          @click="$emit('add-to-cart', product)"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to Cart
        </button>
        <h2 class="text-lg font-bold">Description</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>

  <div v-else>
    <p>Loading...</p>
  </div>
</template>
