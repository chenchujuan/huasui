<template>
  <div>
    <mt-header class="common-header" v-if="current">
      <a @click="goback" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
      <mt-button slot="right" @click="showPop">
        <label class="mint-button-text">
          <i class="icon-list"></i>
        </label>
      </mt-button>
    </mt-header>
    <mt-popup v-model="popupVisible" position="top">
      <div class="header-popup-hd" @click="closePop">
        <i class="icon-close"></i>
      </div>
      <div class="header-popup-bd">
        <ul>
          <li>
            <a @click="closePop" href="/#/">
              <i class="icon-home"></i>
            </a>
            <span>首页</span>
          </li>
          <li>
            <a @click="closePop" href="/#/gszc">
              <i class="icon-record"></i>
            </a>
            <span>工商注册</span>
          </li>
          <li>
            <a @click="closePop" href="/#/dljz">
              <i class="icon-account-book"></i>
            </a>
            <span>代理记账</span>
          </li>
          <li>
            <a @click="closePop" href="/#/zzbl">
              <i class="icon-book"></i>
            </a>
            <span>资质办理</span>
          </li>
          <li>
            <a @click="closePop" href="/#/ssch">
              <i class="config-pic">
                <img
                  class="config-img"
                  src="https://homesitetask.zbjimg.com/homesite/task/资质.png/origine/84302195-95e8-4ca0-9f6e-ac671e6f3275"
                >
              </i>
            </a>
            <span>税收筹划</span>
          </li>
          <li>
            <a @click="closePop" href="/#/help">
              <i class="icon-user-thin"></i>
            </a>
            <span>关于我们</span>
          </li>
        </ul>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      popupVisible: false,
      current: true
    };
  },
  mounted() {
    if (this.$route.path == "") {
      this.current = false;
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == "") {
        this.current = false;
      } else {
        this.current = true;
      }
    }
  },
  methods: {
    showPop() {
      this.popupVisible = true;
    },
    closePop() {
      this.popupVisible = false;
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.common-header {
  background-color: #fff;
  color: #5196fb;
  font-size: 0.32rem;
  height: 0.88rem;
  z-index: 20;
  position: fixed;
  width: 100%;
}

.mint-popup {
  width: 100%;
  height: 100%;
}

.header-popup-hd {
  position: absolute;
  width: 100%;
  height: 0.88rem;
  border-bottom: 1px solid #f3f5fd;
  padding-right: 0.3rem;
}
.header-popup-hd .icon-close {
  float: right;
  font-size: 0.48rem;
  line-height: 0.88rem;
  color: #999;
}
.header-popup-bd {
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header-popup-bd ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: auto;
}
.header-popup-bd li {
  width: 33%;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 0.28rem;
}
.header-popup-bd li i {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: 1.2rem;
  border: 1px solid #569afe;
  font-size: 0.48rem;
  font-style: normal;
  color: #569afe;
}
.header-popup-bd li span {
  display: block;
  margin-top: 0.2rem;
}
.config-pic {
  text-align: center;
}
.config-pic .config-img {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.34rem;
}
.icon-list {
  font-size: 24px;
}
</style>
