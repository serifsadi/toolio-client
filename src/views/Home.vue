<template>
  <div class="home">
    <SearchBar placeholder="Try Awesome" @onSearch="search"></SearchBar>
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
