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
                  <button class="button is-danger" @click="deleteUser(user)">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: []
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
      return this.users.sort((a, b) => { return a.id - b.id;});
    }
  },
  methods: {
    getUsers() {
      this.$store.dispatch("user/fetchAllUsers");
    },
    async deleteUser(user) {
      try {
        await this.$store.dispatch("user/deleteUser", user);
        this.getUsers();
      } catch (e) {
        this.showError = true;
        console.log(e);
      }
    }
  },
  created() {
    this.getUsers();
  }
};
</script>

<style scoped>
.table tr.is-disabled {
  background-color: #909090 !important;
}
</style>
