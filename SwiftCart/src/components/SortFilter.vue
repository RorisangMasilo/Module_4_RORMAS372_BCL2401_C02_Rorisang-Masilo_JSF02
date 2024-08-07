<template>
  <!-- Filtering and Sorting -->
  <div
    class="flex lg:w-[31.25rem] sm:w-[95%] md:w-full relative space-y-4 md:space-y-0 md:space-x-4"
  >
    <!-- Filtering -->
    <div class="flex sm:w-[95%] max-w-[21rem] md:w-full">
      <label :for="filter" class="w-20 my-auto font-semibold">
        Categories:
      </label>
      <select
        v-model="selectedCategory"
        @change="filterProducts"
        class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200"
      >
        <option value="" class="w-20 my-auto font-semibold">
          All Categories
        </option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Sorting -->
    <div class="flex sm:w-[95%] max-w-[21rem] md:w-full">
      <label :for="sort" class="w-20 my-auto font-semibold"> Sort by: </label>
      <select
        v-model="sortOrder"
        @change="sortProducts"
        class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200"
      >
        <option value="default">Default</option>
        <option value="lowest">Price: Low to High</option>
        <option value="highest">Price: High to Low</option>
      </select>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "../stores/productStore";

export default {
  computed: {
    categories() {
      return this.store.categories;
    },
    selectedCategory: {
      get() {
        return this.store.selectedCategory;
      },
      set(value) {
        this.store.setCategory(value);
      },
    },
    sortOrder: {
      get() {
        return this.store.sortOrder;
      },
      set(value) {
        this.store.setSortOrder(value);
      },
    },
  },
  methods: {
    filterProducts() {
      this.store.fetchProducts();
    },
    sortProducts() {
      this.store.fetchProducts();
    },
  },
  setup() {
    const store = useProductStore();
    return { store };
  },
};
</script>
