<template>
  <div id="app">
    <appHeader />
    <div id="content">
      <router-view />
    </div>
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

<style lang="scss">
  #content {
    background-color: #f4f3ee;
  }
</style>

