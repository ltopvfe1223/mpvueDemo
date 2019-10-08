<template>
  <div class="indexContainner">
    <!-- <img class="index_img" src="/static/images/index/tx1.jpg" alt="" /> -->
    <img v-if="isShow" class="index_img" :src="userInfo.avatarUrl" alt />
    <Button class="btn" v-if="!isShow" open-type="getUserInfo" @getuserinfo="getUserInfo">登录</Button>
    <p class="index_title">欢迎{{userInfo.nickName}}来到我的家</p>
    <div class="indexContent" @tap="toDetail">
      <p>我的第一个小程序</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      isShow: false
    };
  },
  mounted() {
    this.handleGetUserInfo();
  },
  methods: {
    //获取用户登录信息
    handleGetUserInfo() {
      wx.getUserInfo({
        success: data => {
          this.userInfo = data.userInfo;
          this.isShow = true;
        },
        fail: () => {
          console.log("获取用户信息失败");
        }
      });
    },
    getUserInfo(data) {
      //判断用户是否授权
      if (data.mp.detail.rawData) {
        this.handleGetUserInfo();
      }
    },
    toDetail() {
      wx.switchTab({
        url: "/pages/list/main"
      });
    }
  }
};
</script>

<style>
page {
  background: #8ed145;
}
.indexContainner {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.index_img {
  width: 200rpx;
  height: 200rpx;
  border-radius: 100rpx;
  margin: 100rpx 0;
}
.index_title {
  font-size: 40rpx;
  font-weight: bold;
  margin: 100rpx 0;
}
.indexContent {
  width: 220rpx;
  height: 80rpx;
  border: 1rpx solid #eee;
  font-size: 24rpx;
  line-height: 80rpx;
  text-align: center;
  border-radius: 10rpx;
}
.btn {
  width: 300rpx;
  height: 300rpx;
  border-radius: 150rpx;
  line-height: 300rpx;
  margin: 0;
  text-align: center;
  font-size: 26rpx;
}
</style>
