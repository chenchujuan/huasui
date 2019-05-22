<template>
  <div class="bgl-edit-container mix bgl-edit-app">
    <div class="bgl-edit-frame" style="background:#fff">
      <div class="bgl-edit-items bgl-mix mobile">
        <div class="zbj-item">
          <div class="wrap container">
            <div class="zbj-item">
              <div class="content">
                <div class="zbj-item">
                  <div class="word">
                    <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/da46399.png">
                    <div class="line"></div>
                    <h2>Tax Planning</h2>
                    <p>为企业和个人量身定制节税方案，提升收入</p>
                    <p class="p-second">合法合规享受低税率，节税力度不止80%</p>
                  </div>
                  <div
                    class="layout mobile layout-mobile"
                    dnd-drop="true"
                    resizable="true"
                    min-height="640"
                    direction="bottom"
                  >
                    <div class="zbj-item">
                      <div
                        class="bglcmp-caishui-chancemo J-bglcmp-caishui-chancemo"
                        style="position:absolute;left:6.5px;top:242px;width:100%"
                        resizable="true"
                      >
                        <div class="chance-body">
                          <div class="caishui-chance-input J-caishui-chance">
                            <div class="chance-company-item">
                              <span class="item-name">联系人</span>
                              <input
                                class="item-ipt"
                                type="text"
                                name="contactName"
                                placeholder="如：王先生"
                                v-model="contactName"
                              >
                            </div>
                            <!---->
                            <!---->
                            <div class="chance-company-item">
                              <span class="item-name">手机号码</span>
                              <input
                                class="item-ipt"
                                type="text"
                                maxlength="11"
                                name="contactInfo"
                                placeholder="免费获取节税方案"
                                v-model="telphone"
                              >
                            </div>
                          </div>
                          <div class="changce-submit">
                            <input
                              @click="submitConsult"
                              type="submit"
                              value="立即提交"
                              class="item-btn J-submit-chance"
                            >
                          </div>
                        </div>

                        <div class="chance-footer">
                          已有
                          <span class="chance-num">6457</span>人提交了需求
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>
      <div class="bgl-edit-bg bgl-content-bg mobile" style="height:100%;top:0">
        <img style="width:100%;padding-bottom:50px" src="../assets/4.jpg" alt>

        <a
          style="width:153px;height:43px;position:absolute;left:113px;top:3055px"
          draggable="false"
          href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
          target="_blank"
          data-linkid="10177352"
          title="立即咨询"
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, MessageBox } from "mint-ui";
export default {
  name: "Ssch",
  data() {
    return {
      contactName: "",
      telphone: ""
    };
  },
  methods: {
    submitConsult() {
      if (!this.telphone || !this.contactName) {
        Toast("为了快速享受服务，请补充相关信息");
        return;
      }
      if (!/^1[34578]\d{9}$/.test(this.telphone)) {
        Toast("请输入正确的手机号码");
        return;
      }
      const params = {
        type: "optimalTax",
        phone: this.telphone,
        name: this.contactName
      };

      this.$post(params).then(res => {
        if (res.ret == 0) {
          MessageBox(
            "您的申请我们已经收到！",
            "请耐心等待，您的专属顾问会在10分钟内联系您，请保持电话畅通"
          );
          this.contactName = ""; //企业名
          this.telphone = ""; //手机号
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../styles/ssch.css";
</style>


