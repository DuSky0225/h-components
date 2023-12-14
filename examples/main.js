import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import h from "h-components";
import "h-components/dist/css/index.css";
Vue.use(h);

// import "../dist/css/index.css";
// import MUI from "../dist/index.umd";
// Vue.use(MUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
