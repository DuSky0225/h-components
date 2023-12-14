<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <Demo /> -->
    <m-card imgSrc="banner.png" summary1="demo测试demo测试" />
    <m-card imgSrc="banner.png" summary1="demo测试demo测试">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 528人报名</div>
          <div class="price">￥299</div>
        </div>
      </template>
    </m-card>
    <m-card
      :width="370"
      :imgHeight="90"
      imgSrc="banner.png"
      summary1="demo测试demo测试"
    >
      插槽插槽
      <template v-slot:footer>
        <div class="footer-sprice">
          <div class="level">中级 · 528人报名</div>
          <div class="level">中级 · 528人报名</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
.footer-sprice {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
