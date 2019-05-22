<template>
  <div class="common-footer">
    <a href="/#/" class="router-home">
      <i class="icon-home"></i>
      <span>首页</span>
    </a>
    <a href="/#/gszc" class="router-product">
      <i class="icon-record"></i>
      <span>工商注册</span>
    </a>
    <a href="/#/dljz" class="router-easy-audit">
      <i class="ico-audit"></i>
      <span>代理记账</span>
    </a>
    <a href="/#/zzbl" class="router-msg">
      <i class="icon-book"></i>
      <span>资质办理</span>
    </a>
    <a href="/#/ssch" class="router-user">
      <i class="icon-account-book"></i>
      <span>税务筹划</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
/* 底部 */
.common-footer {
  height: 1.08rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 100;
  bottom: 0;
  background: #fff;
}
.common-footer-ipx {
  height: 1.08rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 100;
  bottom: 0.68rem;
  background: #fff;
}
.common-footer-ipx:after {
  content: "";
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 0.68rem;
  background-color: #fff;
}
a {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  color: #7388ae;
  font-size: 0.24rem;
}
a i {
  display: inline-block;
  font-size: 0.48rem;
}
a span {
  display: block;
}

.router-easy-audit .ico-audit {
  background: url(//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/24801a3.png)
    no-repeat 0 0;
  width: 1.01rem;
  height: 1.05rem;
  background-size: contain;
  margin-top: -0.5rem;
  margin-bottom: -0.12rem;
}
</style>
