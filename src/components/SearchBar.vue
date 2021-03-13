<template>
  <v-container fill-height fluid>
    <v-row>
      <v-text-field
        v-model="keyword"
        v-bind:label="label || 'Search'"
        v-bind:placeholder="placeholder"
        append-icon="mdi-magnify"
        filled
        rounded
        @keydown.enter="search()"
      ></v-text-field>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    label: String,
    placeholder: String
  },
  data: () => ({
    keyword: ""
  }),
  methods: {
    search() {
      if (this.keyword !== "") {
        this.$emit("onSearch", this.keyword);
      }
    }
  }
};
</script>
