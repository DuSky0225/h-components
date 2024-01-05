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
  },
  data() {
    return {
      observer: null,
    };
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
      // context.font = "fontStyle fontWeight fontSize fontFamily";
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
      this.observer = new MutationObserver((mutationsList) => {
        this.observer.disconnect(); // 停止监听
        // 删除水印
        const waterMark = document.getElementById("_waterMark");
        if (waterMark) {
          document.body.removeChild(waterMark);
        }
        this.init(); // 重新生成水印
        this.observer.observe(document.body, {
          childList: true,
          attributes: true,
          subtree: true,
          attributesOldValue: true,
          characterData: true,
          characterDataOldValue: true,
        }); // 重新开始监听
      });
      this.observer.observe(document.body, {
        childList: true,
        attributes: true,
        subtree: true,
        attributesOldValue: true,
        characterData: true,
        characterDataOldValue: true,
      });
    },
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
};
</script>
