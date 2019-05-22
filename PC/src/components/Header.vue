<template>
  <div class="header-nav-control">
    <h1 class="cs-logo-title nav-control-fl">
      <a
        href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
        target="_blank"
        class="cs-logo-img"
      >
        <img src="../assets/office.png" alt>
        <!-- <img src="../assets/logo.png" alt="骅穗财务" title="骅穗财务-代理记账,公司注册,资质办理,工商注册,会计代账,骅穗财务">
        <img
          style="width:140px"
          src="../assets/logo2.jpg"
          alt="骅穗财务"
          title="骅穗财务-代理记账,公司注册,资质办理,工商注册,会计代账,骅穗财务"
        >-->
      </a>
    </h1>
    <ul class="header-nav-links nav-control-fl clear">
      <li class="header-nav-links-item">
        <a href="/#/" target="_blank" data-type="/" class="nav-links-text">
          <p data-title="首页" class="links-text-info">
            <span>首页</span>
          </p>
          <!---->
        </a>
      </li>
      <li class="header-nav-links-item">
        <a href="/#/gszc" target="_blank" data-type="/gszc" class="nav-links-text">
          <p data-title="工商注册" class="links-text-info">
            <span>工商注册</span>
          </p>
          <i class="item-info-desc-hot"></i>
          <!---->
        </a>
      </li>
      <li class="header-nav-links-item">
        <a href="/#/dljz" data-type="/dljz" target="_blank" class="nav-links-text">
          <p data-title="代理记账" class="links-text-info">
            <span>代理记账</span>
          </p>
          <i class="item-info-desc-hot"></i>
        </a>
      </li>
      <li class="header-nav-links-item">
        <a href="/#/zzbl" data-type="/zzbl" target="_blank" class="nav-links-text">
          <p data-title="资质办理" class="links-text-info">
            <span>资质办理</span>
          </p>
          <!---->
        </a>
      </li>
      <li class="header-nav-links-item">
        <a href="/#/ssch" target="_blank" data-type="/ssch" class="nav-links-text">
          <p data-title="税收筹划" class="links-text-info">
            <span>税收筹划</span>
          </p>
          <!---->
        </a>
      </li>
      <li class="header-nav-links-item">
        <a href="/#/help" target="_blank" data-type="/help" class="nav-links-text">
          <p data-title="关于我们" class="links-text-info">
            <span>关于我们</span>
          </p>
          <!---->
        </a>
        <div class="logo">
          <img src="../assets/wechat.png" alt>
          <p>服务热线：13078885825</p>
        </div>
      </li>
    </ul>
    <ul class="header-nav-links header-nav-links-more clear nav-control-fr">
      <li class="header-nav-links-item">
        <a href="/#/zzbl" target="_blank" class="pendant">
          <img alt="资质办理" class="nav-links-item-img" src="../assets/10.jpg" lazy="loaded">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    var removeClass = function(obj, cls) {
      if (obj.className == cls) {
        obj.className = "";
      }
    };
    var addClass = function(obj, cls) {
      if (obj.className != cls) {
        obj.className = cls;
      }
    };
    var items = document
      .querySelector(".header-nav-links")
      .querySelectorAll(".nav-links-text");
    for (var i = 0; i < items.length; i++) {
      var _item = items[i];
      if (_item.dataset.type == this.$route.path) {
        addClass(items[i], "nav-links-active nav-links-text");
      } else {
        removeClass(items[i], "nav-links-active");
      }
    }
  }
};
</script>

<style scoped>
@import "../styles/header.css";
</style>
