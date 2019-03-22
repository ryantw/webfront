import UserService from "@/services/UserService.js";

export const namespaced = true;

export const state = {
  users: []
};

export const mutations = {
  setUsers(state, users){
    state.users = users
  }
};

export const actions = {
  fetchAllUsers({ commit }) {
    let users = []
    return UserService.fetchAllUsers()
      .then(response => {
        users = response.data
        commit('setUsers', users)
      })
      .catch(error => {
        throw error;
      });
  }
};

export const getters = {
  getUsers: state => state.users
};
