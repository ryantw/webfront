<template>
  <v-container>
    <h1>Login</h1>
    <div v-if="loginError">
      <h4>The login information you entered was invalid.</h4>
    </div>
    <v-form>
      <v-text-field
        prepend-icon="person"
        id="emailAddress"
        v-model="user.username"
        label="Email Address"
        type="email"
        name="emailAddress"
        class="form-control"
      />
      <v-text-field
        prepend-icon="lock"
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
      },
      loginError: false,
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
          if(!error.response.status){
            this.$router.push("network-issue");
          } else {
            if(error.response.status === 401){
              this.loginError = true;
            }
          }
        });
    }
  }
};
</script>

<style></style>
