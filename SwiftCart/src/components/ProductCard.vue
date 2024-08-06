<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  product: Object,
});

const router = useRouter();

const navigateToDetails = () => {
  router.push(`/product/${props.product.id}`);
};
</script>

<template>
  <div
    @click="navigateToDetails"
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img
      :src="product.image"
      alt="Product Image"
      class="object-contain h-48 mt-3"
    />
    <div class="mb-2 flex-2">
      <h2 class="text-lg line-clamp-2 font-extrabold leading-snug">
        {{ product.title }}
      </h2>
    </div>
    <div class="flex items-center mt-2.5 mb-5">
      <!-- Render the rating here -->
      <span
        class="text-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
        >{{ product.rating }}</span
      >
    </div>
    <h4
      class="text-base line-clamp-2 font-extrabold text-slate-500 leading-snug"
    >
      ${{ product.price }}
    </h4>
    <div class="flex mt-1 space-x-2">
      <p
        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
      >
        {{ product.category }}
      </p>
    </div>
    <button
      @click="$emit('add-to-cart', product)"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add to Cart
    </button>
    <button @click="$emit('view-details', product)" class="">
      View Details
    </button>
  </div>
</template>
