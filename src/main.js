import Vue from "vue";
import "nprogress/nprogress.css";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

require("./assets/css/main.scss");

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
