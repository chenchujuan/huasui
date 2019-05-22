<template>
  <div class="cs-footer">
    <div class="wrap-list-title">
      <p>公司名称：广州骅穗财务顾问有限公司</p>
      <p>地址：广州市天河区广州大道北991号银荔商务中心262</p>
      <p>官网地址：www.huasui668.com</p>
      <p>全国服务热线：13078885825</p>
      <p>业务微信：15989130807</p>
      <p>业务QQ：598136128</p>
    </div>
    <div class="footer-qr">
      <div class="footer-qr-info">
        <img src="../assets/wechat.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.cs-footer {
  background-color: #2b2e42;
  padding: 48px 0;
  min-width: 1200px;
  display: flex;
  justify-content: center;
}
.footer-qr {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
}
.footer-qr-info img {
  width: 170px;
  height: 170px;
  position: relative;
  overflow: hidden;
}
.footer-qr-desc {
  color: #9ea0a9;
  font-size: 13px;
  text-align: center;
  margin-top: 10px;
}
.wrap-list-title {
  display: flex;
  flex-direction: column;
  color: #9ea0a9;
  font-size: 16px;
  padding-right: 50px;
  line-height: 2;
  border-right: 1px solid #9ea0a9;
}
</style>
