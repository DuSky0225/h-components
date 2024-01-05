<template>
  <div class="conferenceWhiteboardBox">
    <div class="tools">
      <button @click="toggleMode">
        {{ drawingMode ? "切换橡皮擦" : "切换绘制" }}
      </button>
    </div>
    <canvas
      ref="canvas"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
      style="border: 1px solid #000"
    ></canvas>
  </div>
</template>
<script>
export default {
  name: "ConferenceWhiteboard",
  data() {
    return {
      context: null,
      drawing: false,
      drawingMode: false, // 用于切换绘制和橡皮擦模式
    };
  },
  mounted() {
    this.context = this.$refs.canvas.getContext("2d");
  },
  methods: {
    startDrawing(event) {
      this.drawing = true;
      const x = event.clientX;
      const y = event.clientY;
      this.context.beginPath();
      this.context.moveTo(x, y);
    },
    draw(event) {
      if (!this.drawing) return;
      const x = event.clientX;
      const y = event.clientY;

      if (this.drawingMode) {
        // 橡皮擦模式
        this.context.clearRect(x, y, 10, 10); // 使用橡皮擦效果清除部分区域
      } else {
        // 绘制模式
        this.context.lineTo(x, y);
        this.context.stroke();
      }
    },
    stopDrawing() {
      this.drawing = false;
    },
    toggleMode() {
      this.drawingMode = !this.drawingMode;
    },
  },
};
</script>
<style lang="sass" scoped></style>
