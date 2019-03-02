<template>
  <v-toolbar>
    <v-toolbar-title>
      <v-btn flat to="/">WEB ADMIN</v-btn>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        flat
        to="/admin/users"
        tag="a"
        active-class="active"
        class="hidden-sm-and-down"
        >USERS</v-btn
      >
      <v-btn
        flat
        to="/"
        tag="a"
        active-class="active"
        class="hidden-sm-and-down"
        >LOGIN</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style></style>
