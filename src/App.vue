<template>
  <div id="app">
    <appHeader />
    <button class="button is-primary">This is a button</button>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    appHeader: Header
  }
};
</script>
