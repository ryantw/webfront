<template>
  <div>
    <h1>Users</h1>
    <p>
      <v-btn
        color="primary"
        :to="{name: 'userNew'}"
        >
        Add New Users
      </v-btn>
      <v-btn
        color="secondary"
        @click="getUsers()"
      >
      Refresh
      </v-btn>
    </p>
    <div v-if="users.length > 0">
      <v-data-table
        :headers="headers"
        :items="users"
      >
      <template
        slot="items"
        slot-scope="props"
      >
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.firstName }}</td>
        <td>{{ props.item.lastName }}</td>
        <td>{{ props.item.emailAddress }}</td>
        <td>
          <v-btn
            color="success"
            tag="a"
            :to="{ name: 'userEdit', params: { id: props.item.id }}"
          >
          Edit
          </v-btn> 
          <v-btn
            color="error"
            href=""
            @click="deleteUser(props.item.id)"
          >
          Delete
          </v-btn>
        </td>
      </template>
      </v-data-table>
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
      headers: [
        { text: 'ID', sortable: true, value: 'id' },
        { text: 'First Name', sortable: true, value: 'firstName' },
        { text: 'Last Name', sortable: true, value: 'lastName' },
        { text: 'Email Address', sortable: true, value: 'email' },
        { text: 'Actions', sortable: false }
        ],
    }
  },
  computed: {
    users: function(){
      return this.$store.getters['user/getUsers']
    }
  },
  methods: {
    getUsers(){
      this.$store.dispatch('user/fetchAllUsers')
    },
    deleteUser(id){
      console.log(id)
    }
  }, 
  created() {
    this.getUsers()
  }
}
</script>

<style>

</style>
