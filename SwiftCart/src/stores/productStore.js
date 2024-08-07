// stores/productStore.js
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    categories: [],
    selectedCategory: "All categories",
    sortOrder: "default",
    searchTerm: "",
    loading: false,
  }),
  getters: {
    filteredAndSortedProducts(state) {
      let filteredProducts = state.products;

      // Filter by category
      if (state.selectedCategory !== "All categories") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === state.selectedCategory
        );
      }

      // Filter by search term
      if (state.searchTerm) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }

      // Sort products
      if (state.sortOrder === "lowest") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (state.sortOrder === "highest") {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (state.sortOrder === "name-asc") {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sortOrder === "name-desc") {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      } else if (state.sortOrder === "rating") {
        filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      }

      return filteredProducts;
    },
  },
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const products = await response.json();
        this.products = products;
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        this.loading = false;
      }
    },
    async fetchCategories() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories/"
        );
        const categories = await response.json();
        this.categories = categories;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },

    async sortProducts(order) {
      this.sortOrder = order;
      // The sorting will automatically be applied through the filteredAndSortedProducts getter
    },
  },
});
