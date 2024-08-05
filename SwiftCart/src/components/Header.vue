<script>
export default {
  name: "Header",
};
</script>

<template>
  <header className="sticky z-50 top-0">
    <nav class="bg-gray-500 border-gray-200">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <div class="container mx-auto flex justify-between items-center">
          <router-link
            to="/"
            className="self-center text-2xl font-semibold whitespace-nowrap text-white"
            ><img src="./online-shop.png" class="h-4" />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap text-white"
            >
              SwiftCart
            </span></router-link
          >
          <router-link to="/cart" class="text-xl font-bold">Cart</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
}
</style>
