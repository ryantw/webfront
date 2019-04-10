import UserService from "@/services/UserService.js";

export const namespaced = true;

export const state = {
  users: []
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};

export const actions = {
  fetchAllUsers({ commit }) {
    let users = [];
    return UserService.fetchAllUsers()
      .then(response => {
        users = response.data;
        commit("setUsers", users);
      })
      .catch(error => {
        throw error;
      });
  },
  fetchUser({ commit }, id) {
    let user = {};
    return UserService.fetchUser(id)
      .then(response => {
        user = response.data;
        return user;
      })
      .catch(error => {
        throw error;
      });
  },
  saveUser({ commit }, user) {
    return UserService.saveUser(user)
      .then(response => {
        console.log(response);
        console.log("updated user: " + response.data);
        return true;
      })
      .catch(error => {
        throw error;
      });
  },
  deleteUser({ commit }, user) {
    return UserService.deleteUser(user)
      .then(response => {
        return true;
      })
      .catch(error => {
        throw error;
      });
  }
};

export const getters = {
  getUsers: state => {
    return state.users;
  }
};
