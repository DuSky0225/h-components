import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import MUI from "dstest-components";
Vue.use(MUI);

// import "../dist/css/index.css";
// import MUI from "../dist/index.umd";
Vue.use(MUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
