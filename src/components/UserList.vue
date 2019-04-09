<template>
  <div class="container">
    <h1 class="title">Users</h1>
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-success" :to="{ name: 'userNew' }">
          >Add New User
        </button>
      </p>
      <p class="control">
        <button
          class="button is-warning"
          :to="{ name: 'userNew' }"
          @click="getUsers()"
        >
          Refresh
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.emailAddress }}</td>
            <td>
              <div class="field is-grouped">
                <p class="control">
                  <button class="button is-success" :to="{ name: 'userEdit' }">
                    >Edit
                  </button>
                </p>
                <p class="control">
                  <button class="button is-danger" @click="deleteUser(user.id)">
                    >
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
    }
  },
  methods: {
    getUsers() {
      this.$store.dispatch("user/fetchAllUsers");
    },
    deleteUser(id) {
      console.log(id);
    }
  },
  created() {
    this.getUsers();
  }
};
</script>

<style></style>
