import WaterMark from "./src/main.vue";

WaterMark.install = function (Vue) {
  Vue.component(WaterMark.name, WaterMark);
};

export default WaterMark;
