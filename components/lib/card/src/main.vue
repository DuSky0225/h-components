<template>
  <div class="clearfix">
    <div class="m-card" :style="width ? { width: width + 'px' } : {}">
      <div
        class="m-card-img"
        :style="imgHeight ? { height: imgHeight + 'px' } : {}"
      >
        <img :src="imgSrc" alt="img" />
      </div>
      <div v-if="summary1" class="m-card-summary">
        {{ summary1 }}
      </div>
      <div v-else class="m-card-summary">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "m-card",
  props: {
    width: {
      //卡片宽度
      type: Number,
      default: 0,
    },
    imgSrc: {
      //卡片图片资源地址
      type: String,
      default: "",
    },
    imgHeight: {
      //卡片图片的高度
      type: Number,
      default: 0,
    },
    summary1: {
      //卡片概述
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style lang="sass" scoped></style>
