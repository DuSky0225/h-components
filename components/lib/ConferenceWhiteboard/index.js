import ConferenceWhiteboard from "./src/main.vue";

ConferenceWhiteboard.install = function (Vue) {
  Vue.component(ConferenceWhiteboard.name, ConferenceWhiteboard);
};

export default ConferenceWhiteboard;
