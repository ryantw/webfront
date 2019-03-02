<template>
  <v-app>
    <appHeader />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    appHeader: Header
  }
};
</script>
