<template>
  <div id="app">
    <appHeader />
    <appNotification />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Notifications from "@/views/Notifications.vue";

export default {
  components: {
    appHeader: Header,
    appNotification: Notifications
  }
};
</script>

<style lang="scss">
  #content {
    background-color: #f4f3ee;
  }
</style>

