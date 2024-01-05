<template>
  <div></div>
</template>
<script>
export default {
  name: "WaterMark",
  props: {
    // 显示的水印文本
    inputText: {
      type: String,
      default: "waterMark",
    },
    // 是否允许通过js或开发者工具等途径修改水印DOM节点（水印的id，attribute属性，节点的删除）
    // true为允许，默认不允许
    inputAllowDele: {
      type: Boolean,
      default: false,
    },
    // 是否在组件销毁时去除水印节点（前提是允许用户修改DOM，否则去除后会再次自动生成）
    // true会，默认不会
    inputDestroy: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.init();
    this.Monitor();
  },
  methods: {
    // 生成水印DOM节点
    init() {
      let canvas = document.createElement("canvas");
      canvas.id = "canvas";
      canvas.width = "200"; // 单个水印的宽高
      canvas.height = "130";
      this.maskDiv = document.createElement("div");
      let ctx = canvas.getContext("2d");
      ctx.font = "normal 18px Microsoft Yahei"; // 设置样式
      ctx.fillStyle = "rgba(112, 113, 114, 0.1)"; // 水印字体颜色
      ctx.rotate((30 * Math.PI) / 180); // 水印偏转角度
      ctx.fillText(this.inputText, 30, 20);
      let src = canvas.toDataURL("image/png");
      this.maskDiv.style.position = "fixed";
      this.maskDiv.style.zIndex = "9999";
      this.maskDiv.id = "_waterMark";
      this.maskDiv.style.top = "0";
      this.maskDiv.style.left = "0";
      this.maskDiv.style.height = "100%";
      this.maskDiv.style.width = "100%";
      this.maskDiv.style.pointerEvents = "none";
      this.maskDiv.style.backgroundImage = "URL(" + src + ")";
      // 水印节点插到body下
      document.body.appendChild(this.maskDiv);
    },
    // 监听更改，更改后执行callback回调函数，会得到一个相关信息的参数对象
    Monitor() {
      // let body = document.getElementsByTagName("body")[0];
      // let options = {
      //   childList: true,
      //   attributes: true,
      //   characterData: true,
      //   subtree: true,
      //   attributeOldValue: true,
      //   characterDataOldValue: true,
      // };
      let observer = new MutationObserver(this.init);
      // observer.observe(body, options); // 监听body节点
      // let observer = new MutationObserver((mutations) => {
      //   mutations.forEach((mutation) => {
      //     if (
      //       mutation.removedNodes.length > 0 &&
      //       mutation.removedNodes[0].id == "water_canvas"
      //     ) {
      //       this.init();
      //     }
      //   });
      // });
      observer.observe(document.body, {
        childList: true,
        attributes: true,
        subtree: true,
        attributesOldValue: true,
        characterData: true,
        characterDataOldValue: true,
      });
    },
  },
};
</script>
