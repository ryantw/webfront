<template>
  <div class="container">
    <h1 class="title">User Edit</h1>
    <h2 class="subtitle">{{ id }}</h2>

    <div class="field">
      <label for="firstName" class="label">First Name</label>
      <div class="control">
        <input
          id="firstName"
          type="text"
          class="input"
          placeholder="First Name"
          v-model="user.firstName"
        />
      </div>
    </div>
    <div class="field">
      <label for="lastName" class="label">Last Name</label>
      <div class="control">
        <input
          id="lastName"
          type="text"
          class="input"
          placeholder="First Name"
          v-model="user.lastName"
        />
      </div>
    </div>
    <div class="field">
      <label for="emailAddress" class="label">Email Address</label>
      <div class="control">
        <input
          id="emailAddress"
          type="text"
          class="input"
          placeholder="Email Address"
          v-model="user.emailAddress"
        />
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-success" @click.prevent="saveUser()">
          Save
        </button>
      </div>
      <div class="control">
        <button class="button is-danger" @click="deleteUser(user.id)">
          <span>Delete</span>
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        role: ""
      },
      userSaving: false,
      usedSaved: false,
      showError: false
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      let user = {};
      try {
        user = await this.$store.dispatch("user/fetchUser", this.id);
      } catch (e) {
        this.showError = true;
        console.log(e);
      } finally {
        this.user = user;
      }
    },
    async saveUser() {
      try {
        await this.$store.dispatch("user/saveUser", this.user);
      } catch (e) {
        this.showError = true;
        console.log(e);
      }
    },
    async deleteUser() {
      try {
        await this.$store.dispatch("user/deleteUser", this.user);
      } catch (e) {
        this.showError = true;
        console.log(e);
      }
    }
  }
};
</script>

<style></style>
