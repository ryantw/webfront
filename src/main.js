import Vue from "vue";
import "./plugins/vuetify";
import "nprogress/nprogress.css";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";

Vue.config.productionTip = false;

require("./assets/css/main.scss");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
