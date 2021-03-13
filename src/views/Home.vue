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
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

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
    inProgress: false
  }),
  methods: {
    search(keyword) {
      this.fetchProducts(keyword);
    },
    async fetchProducts(keyword) {
      this.inProgress = true;
      const response = await fetch("mock/products.json");
      const products = await response.json();
      this.products = products.products.filter(it =>
        it.title.toUpperCase().includes(keyword.toUpperCase())
      );
      this.inProgress = false;
    }
  }
};
</script>
