<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          alt="Toolio Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo-toolio.svg"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <span class="mr-2">Shopify Store</span>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>
