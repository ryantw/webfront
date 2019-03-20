<template>
  <v-container>
    <h1>Login</h1>
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
        .catch(error => {
          NProgress.done();
          console.log(error);
          if(error.response.status){
            if(error.response.status == 401){
              console.log('Login not valid');
            }
          }
          this.$router.push("network-issue");
        });
    }
  }
};
</script>

<style></style>
