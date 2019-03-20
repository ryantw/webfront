import LoginService from "@/services/LoginService.js";

export const namespaced = true;

export const state = {
  loggedIn: false,
  user: {}
};

export const mutations = {
  USER_LOGIN(state) {
    state.loggedIn = true;
  },
  SET_USER(state, user) {
    state.user = user;
  }
};

export const actions = {
  loginUser({ commit }, user) {
    return LoginService.loginAttempt(user)
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.access_token);
        commit("USER_LOGIN");
        commit("SET_USER", user.username);
        /*
        const notification = {
          type: "success",
          message: "Your login was succesful."
        };
        // dispatch message to message log
        */
      })
      .catch(error => {
        /*
        const notification = {
          type: "error",
          message: "Your login was unsuccesful"
        };
        */
        //console.log(error);
        // dispatch message to log
        // throw error so they don't leave login page
        throw error;
      });
  }
};

export const getters = {
  getLoggedIn: state => {
    return state.loggedIn;
  }
};
