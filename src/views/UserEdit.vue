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
    <div class="field">
      <label for="userEnabled" class="label">User Active</label>
      <div class="control">
        <label class="radio">
          <input 
            type="radio" 
            id="userEnabled" 
            name="enabled"
            value="true"
            v-model="user.enabled">
            Enabled
        </label>
        <label class="radio">
          <input 
            type="radio" 
            id="userEnabled" 
            name="enabled"
            value="false"
            v-model="user.enabled">
            Disabled
        </label>
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
    <ConfirmModal 
      v-show="showModal"
      @modalResponse="handleModalResponse"
      v-bind:class="{ 'is-active': showModal }">
      <h1 class="title" slot="title">Disable User</h1>
      <h2 class="subtitle" slot="subtitle">Disabling the user will not allow them to login anymore.</h2>
    </ConfirmModal>
  </div>
</template>

<script>
import ConfirmModal from "@/components/ConfirmModal.vue";

export default {
  components: {
    ConfirmModal
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      user: {
        id: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        enabled: true,
        role: ""
      },
      userSaving: false,
      usedSaved: false,
      showError: false,
      showModal: false
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
      let savedUser = {};
      try {
        savedUser = await this.$store.dispatch("user/saveUser", this.user);
        this.user = savedUser;
      } catch (e) {
        this.showError = true;
        console.log(e);
      }
    },
    async deleteUser(userId) {
      this.showModal = true;
      try {
        await this.$store.dispatch("user/fetchUser", userId);
      } catch (e) {
        console.log(e);
      }
    },
    async handleModalResponse(response){
      this.showModal = false;
      if(response){
        try {
          console.log("handleModal: " + this.user);
          await this.$store.dispatch("user/deleteUser", this.user);
        } catch (e) {
          console.log(e);
        }
      }
      this.getUser();
    }
  }
};
</script>

<style></style>
