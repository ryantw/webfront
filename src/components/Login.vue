<template>
  <v-container>
    <h1>Login</h1>
    <v-form>
      <v-text-field
        id="emailAddress"
        v-model="user.username"
        label="Email Address"
        type="email"
        name="emailAddress"
        class="form-control"
      />
      <v-text-field
        id="password"
        v-model="user.password"
        label="Password"
        type="password"
        name="password"
        class="form-control"
      />
      <v-btn color="success" @click.prevent="loginUser">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import NProgress from "nprogress";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    loginUser() {
      this.$store
        .dispatch("login/loginUser", this.user)
        .then(() => {
          this.$router.push({
            name: "about"
          });
        })
        .catch(() => {
          NProgress.done();
        });
    }
  }
};
</script>

<style></style>
