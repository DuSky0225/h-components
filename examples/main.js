import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import h from "dstest-components";
// import "dstest-components/dist/css/index.css";
// Vue.use(h);

// import "../dist/css/index.css";
// import MUI from "../dist/index.umd";
// Vue.use(MUI);

import "../components/css/index.scss";
import MUI from "../components/lib/index";
Vue.use(MUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
