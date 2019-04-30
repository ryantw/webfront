import Vue from "vue";
import Vuex from "vuex";
import * as login from "@/store/modules/login.js";
import * as user from "@/store/modules/user.js";
import * as notifications from "@/store/modules/notifications.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    user,
    notifications
  }
});
