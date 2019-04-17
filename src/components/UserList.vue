<template>
  <div class="container">
    <h1 class="title">Users</h1>
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-success" :to="{ name: 'userNew' }">
          <span>Add New User</span>
        </button>
      </p>
      <p class="control">
        <button
          class="button is-warning"
          :to="{ name: 'userNew' }"
          @click="getUsers()"
        >
          <span>Refresh</span>
        </button>
      </p>
    </div>
    <div v-if="users.length > 0">
      <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Enabled?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in sortedUsers" :key="user.id"
            v-bind:class="{ 'is-disabled': !user.enabled }"
          >
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.emailAddress }}</td>
            <td>{{ user.enabled }}</td>
            <td>
              <div class="field is-grouped">
                <p class="control">
                  <router-link
                    tag="a"
                    class="button is-success"
                    :to="{ name: 'userEdit', params: { id: user.id } }"
                  >
                    <span>Edit</span>
                  </router-link>
                </p>
                <p class="control">
                  <button class="button is-danger" @click="deleteUser(user.id)">
                    <span>Delete</span>
                    <span class="icon is-small">
                      <i class="fas fa-times"></i>
                    </span>
                  </button>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No users.</p>
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
  data() {
    return {
      selectedUser: {},
      showModal: false
    };
  },
  computed: {
    users: function() {
      return this.$store.getters["user/getUsers"];
    },
    isDisabled: function(user){
      return user.enabled ? 'is-disabled' : '';
    },
    sortedUsers: function() {
      return this.users.slice().sort((a, b) => { return a.id - b.id;});
    }
  },
  methods: {
    getUsers() {
      this.$store.dispatch("user/fetchAllUsers");
    },
    async deleteUser(userId) {
      this.showModal = true;
      try {
        this.selectedUser = await this.$store.dispatch("user/fetchUser", userId);
      } catch (e) {
        console.log(e);
      }
    },
    async handleModalResponse(response){
      this.showModal = false;
      if(response){
        try {
          console.log("handleModal: " + this.selectedUser);
          await this.$store.dispatch("user/deleteUser", this.selectedUser);
        } catch (e) {
          console.log(e);
        }
      }
      this.selectedUser = '';
      this.getUsers();
    }
  },
  created() {
    this.getUsers();
  },
  components: {
    ConfirmModal
  }
};
</script>

<style scoped>
.table tr.is-disabled {
  background-color: #909090 !important;
}
</style>
