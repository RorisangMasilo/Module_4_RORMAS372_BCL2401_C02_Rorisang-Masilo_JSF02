<template>
  <div class="sort-filter">
    <select v-model="selectedCategory" @change="filterProducts">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
    <select v-model="sortOrder" @change="sortProducts">
      <option value="default">Default</option>
      <option value="lowest">Price: Low to High</option>
      <option value="highest">Price: High to Low</option>
    </select>
  </div>
</template>
<script>
import { useProductStore } from "../stores/productStore";

export default {
  computed: {
    categories() {
      const store = useProductStore();
      return store.categories;
    },
    selectedCategory: {
      get() {
        const store = useProductStore();
        return store.selectedCategory;
      },
      set(value) {
        const store = useProductStore();
        store.setCategory(value);
      },
    },
    sortOrder: {
      get() {
        const store = useProductStore();
        return store.sortOrder;
      },
      set(value) {
        const store = useProductStore();
        store.setSortOrder(value);
      },
    },
  },
  methods: {
    filterProducts() {
      const store = useProductStore();
      store.fetchProducts();
    },
    sortProducts() {
      const store = useProductStore();
      store.fetchProducts();
    },
  },
};
</script>
