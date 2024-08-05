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
  <div @click="navigateToDetails" class="card">
    <img :src="product.image" alt="Product Image" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.category }}</p>
    <p>{{ product.price | currency }}</p>
  </div>
</template>
