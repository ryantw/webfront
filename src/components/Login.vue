<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input
          id="username"
          class="input is-medium"
          type="email"
          placeholder="Login"
          v-model="user.username"
        />
        <span class="icon is-medium is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input
          id="password"
          class="input is-medium"
          type="password"
          placeholder="Password"
          v-model="user.password"
        />
        <span class="icon is-medium is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success" @click.prevent="loginUser">
          Login
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import NProgress from "nprogress";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      loginError: false
    };
  },
  methods: {
    loginUser() {
      this.loginError = false;
      this.$store
        .dispatch("login/loginUser", this.user)
        .then(() => {
          this.$router.push({
            name: "about"
          });
        })
        .catch(error => {
          NProgress.done();
          if (!error.response.status) {
            this.$router.push("network-issue");
          } else {
            if (error.response.status === 401) {
              this.loginError = true;
            }
          }
        });
    }
  }
};
</script>

<style></style>
