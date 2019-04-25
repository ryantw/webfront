<template>
  <div class="container">
    <div class="content">
      <h1>Logged out</h1>
      <h4>
        You've logged out, if you need to login again, follow the link below.
      </h4>
      <router-link :to="{ name: 'login' }">Login.</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logoutUser: function() {
      this.$store.dispatch('login/logoutUser')
    }
  },
  created() {
    this.logoutUser();
  }
}
</script>

<style>

</style>
