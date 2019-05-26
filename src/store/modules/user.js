/* eslint-disable no-unused-vars */
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
  async fetchAllUsers({ commit }) {
    let users = [];
    try {
      const userResponse = await UserService.fetchAllUsers();
      users = userResponse.data;
    } catch (e) {
      console.log("failed to get users", e);
    } finally {
      commit("setUsers", users);
    }
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
        return response;
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
