<template>
  <div class="listContainer">
    <swiper indicator-dots indicator-color="pink" indicator-active-color="green">
      <swiper-item>
        <img src="/static/images/list/lunbo1.jpg" />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/list/lunbo2.png" />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/list/lunbo3.jpg" />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/list/lunbo4.png" />
      </swiper-item>
      <swiper-item>
        <img src="/static/images/list/lunbo5.jpg" />
      </swiper-item>
    </swiper>
    <div>
      <ListTmp v-for="(item,index) in listTmp" :key="index" :item="item" :index="index" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListTmp from "./list_template/list_template.vue";
export default {
  data() {
    return {};
  },
  components: {
    ListTmp
  },
  mounted() {
    //分发action修改状态
    this.$store.dispatch("getList");
  },
  computed: {
    //映射状态到本组件
    ...mapState(["listTmp"])
  }
};
</script>

<style>
.listContainer swiper {
  width: 100%;
  height: 400rpx;
}
.listContainer swiper img {
  width: 100%;
  height: 100%;
}
</style>
