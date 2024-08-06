<script>
import ProductCard from "./ProductCard.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      selectedCategory: "All categories", // Default category selection
      sortOrder: "default", // Default sort order
      searchTerm: "", // Search term for filtering products
    };
  },
  computed: {
    ...mapState(["products", "categories", "loading"]), // Map Vuex state to local computed properties
    ...mapGetters(["filteredAndSortedProducts"]), // Map Vuex getters for filtered and sorted products
  },
  methods: {
    ...mapMutations(["setCategory", "setSortOrder", "setSearchTerm"]), // Map Vuex mutations
    ...mapActions(["fetchCategories", "fetchProducts"]), // Map Vuex actions for fetching categories and products
    viewDetails(product) {
      // Navigate to the product detail page
      this.$router.push({ name: "Product", params: { id: product.id } });
    },
    filterProducts() {
      // Set the selected category and fetch products
      this.setCategory(this.selectedCategory);
      this.fetchProducts();
    },
    sortProducts() {
      // Set the selected sort order
      this.setSortOrder(this.sortOrder);
    },
    searchProducts() {
      // Set the search term
      this.setSearchTerm(this.searchTerm);
    },
  },
  created() {
    // Fetch categories when the component is created
    this.fetchCategories();
  },
};
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Top Buttons and Filters -->
    <div
      class="mb-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4"
    >
      <!-- Search Bar with Button -->
      <div class="flex items-center space-x-2">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Search products..."
          class="p-2 border rounded"
        />
        <button
          @click="searchProducts"
          class="p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>

      <!-- Sort Order Dropdown -->
      <select
        v-model="sortOrder"
        @change="sortProducts"
        class="p-2 border rounded"
      >
        <option value="default">Default</option>
        <option value="lowest">Price: Low to High</option>
        <option value="highest">Price: High to Low</option>
      </select>

      <!-- Category Filter Dropdown -->
      <select
        v-model="selectedCategory"
        @change="filterProducts"
        class="p-2 border rounded"
      >
        <option value="All categories">All Categories</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Loading and Error Messages -->
    <template v-if="loading">
      <div>Loading...</div>
    </template>

    <!-- Product Grid -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <ProductCard
        v-for="product in filteredAndSortedProducts"
        :key="product.id"
        :product="product"
        @view-details="viewDetails"
      />
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles you need here */
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
