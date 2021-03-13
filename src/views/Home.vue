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
  methods: {
    search(keyword) {
      console.log("search keyword", keyword);
    }
  }
};
</script>
