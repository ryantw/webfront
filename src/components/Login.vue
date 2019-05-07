<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <div class="notification is-danger" v-show="loginError">
      <button class="delete" @click="loginError = !loginError"></button>
        Login information is <strong>invalid</strong>. If you've forgotten your password, please reset it.
    </div>
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input
          id="username"
          class="input is-medium"
          type="email"
          placeholder="Login"
          v-model="user.username"
          :class="{'is-danger' : $v.user.username.$error }"
        >
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
          :class="{'is-danger' : $v.user.password.$error }"
        >
        <span class="icon is-medium is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success" @click.prevent="loginUser">Login</button>
      </p>
    </div>
  </div>
</template>

<script>
import NProgress from "nprogress";
import { required, email } from "vuelidate/lib/validators";

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
  validations: {
    user : {
      username: { required, email },
      password: { required }
    }
  },
  methods: {
    loginUser() {
      this.loginError = false;

      this.$v.$touch();
      if(this.$v.$invalid){
        return;
      }

      this.$store
        .dispatch("login/loginUser", this.user)
        .then(() => {
          this.$router.push({
            name: "userList"
          });
        })
        .catch(error => {
          NProgress.done();
          if (!error.response) {
            this.$router.push("/network-issue");
          } else {
            if (error.response.status && error.response.status === 401) {
              this.loginError = true;
            }
          }
        });
    }
  }
};
</script>

<style></style>
