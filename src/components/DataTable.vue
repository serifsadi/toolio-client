<template>
  <v-container width="100vw">
    <v-data-table
      :headers="headers"
      :items="products"
      :loading="inProgress"
      loading-text="Loading products..."
      no-data-text=""
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    products: Array,
    inProgress: Boolean
  },
  data: () => ({
    headers: [
      { text: "ID", value: "id" },
      { text: "Title", value: "title" }
    ]
  }),
  watch: {
    products: () => {}
  }
};
</script>
