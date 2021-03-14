<template>
  <div class="home">
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-img
          alt="Shopify Logo"
          class="shrink"
          position="center center"
          contain
          src="../assets/logo-shopify.png"
          transition="scale-transition"
          width="122"
        />
      </v-row>
      <v-row>
        <SearchBar placeholder="Try Awesome" @onSearch="search"></SearchBar>
      </v-row>
      <v-row>
        <v-container width="100vw">
          <v-data-table
            :headers="headers"
            :items="products"
            :loading="inProgress"
            loading-text="Loading products..."
            no-data-text=""
          ></v-data-table>
        </v-container>
      </v-row>
    </v-container>
    <v-snackbar
      :value="snackbar"
      color="error"
      absolute
      right
      rounded="pill"
      top
    >
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import ProductService from "@/service/products.js";

export default {
  name: "Home",
  components: {
    SearchBar
  },
  data: () => ({
    headers: [
      { text: "ID", value: "id" },
      { text: "Title", value: "title" }
    ],
    products: [],
    inProgress: false,
    snackbar: false,
    snackbarText: `Hello, I'm a snackbar`
  }),
  methods: {
    search(keyword) {
      this.fetchProducts(keyword);
    },
    async fetchProducts(keyword) {
      this.inProgress = true;
      this.snackbar = false;
      try {
        // const response = await fetch("mock/products.json");
        // const products = await response.json();
        // this.products = products.products.filter(it =>
        //   it.title.toUpperCase().includes(keyword.toUpperCase())
        // );
        const products = await ProductService.fetchProducts(keyword);
        this.products = products;
        this.inProgress = false;
      } catch (error) {
        this.snackbar = true;
        this.snackbarText = error.message;
      }
    }
  }
};
</script>
