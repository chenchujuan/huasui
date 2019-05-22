<template>
  <div class="bgl-edit-container mix bgl-edit-pc" style="min-height:3520px">
    <div class="bgl-edit-frame" style="background:#fff">
      <div class="bgl-edit-bg bgl-content-bg pc">
        <div class="zt-ssch-header">
          <div class="word">
            <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/da46399.png">
            <div class="line"></div>
            <h2>Tax Planning</h2>
            <p>为企业和个人量身定制节税方案，提升收入</p>
            <p class="p-second">合法合规享受低税率，节税力度不止80%</p>
          </div>
          <div class="caishui-chance-input J-caishui-chance">
            <div class="item-city">
              <i class="protection1"></i>
              <span class="item-hd J-select-city">{{city}}</span>
              <input type="hidden" name="ipCityName" value="深圳市">
              <input type="hidden" name="serviceCity">
              <i class="icon-dir-down"></i>
              <city v-on:choiceCity="choiceCity"></city>
            </div>
            <div class="item-tel">
              <span class="split">|</span>
              <i class="icon-telephone1"></i>
              <input
                type="text"
                maxlength="11"
                v-model="telphone"
                name="contactInfo"
                placeholder="留下联系方式，免费获取节税方案"
              >
              <input type="hidden" maxlength="11" name="hideContactInfo" value>
            </div>
            <div class="item-name">
              <span class="split">|</span>
              <i class="icon-user5"></i>
              <input type="text" v-model="contactName" name="contactName" placeholder="如：吴先生">
            </div>
            <div class="item-btn">
              <input
                class="J-submit-chance"
                @click="submitConsult"
                type="submit"
                name="btn"
                value="免费获取"
              >
            </div>
          </div>
        </div>
        <div>
          <div class="bgl-edit-bg-item"></div>
          <div
            class="bgl-edit-bg-item"
            style="background:url(//bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%BC%81%E7%A8%8E%E4%B9%90%E6%94%B9%E7%89%88002.jpg%2Forigine%2Fe0a71b99-739a-4eb6-a34a-d7147c05231b?imageMogr2/auto-orient/strip/crop/!1920x200a0a600/quality/90) center 0 no-repeat"
          ></div>
          <div class="bgl-edit-bg-item"></div>
          <!-- <div class="bgl-edit-bg-item"></div> -->
          <div class="bgl-edit-bg-item"></div>
          <!-- <div
            class="bgl-edit-bg-item"
            style="background:url(//bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%BC%81%E7%A8%8E%E4%B9%90%E6%94%B9%E7%89%88002.jpg%2Forigine%2Fe0a71b99-739a-4eb6-a34a-d7147c05231b?imageMogr2/auto-orient/strip/crop/!1920x200a0a1400/quality/90) center 0 no-repeat"
          ></div>-->
          <div class="bgl-edit-bg-item"></div>
          <div
            class="bgl-edit-bg-item"
            style="background:url(//bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%BC%81%E7%A8%8E%E4%B9%90%E6%94%B9%E7%89%88002.jpg%2Forigine%2Fe0a71b99-739a-4eb6-a34a-d7147c05231b?imageMogr2/auto-orient/strip/crop/!1920x200a0a1600/quality/90) center 0 no-repeat"
          ></div>
          <div
            class="bgl-edit-bg-item"
            style="background:url(//bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%BC%81%E7%A8%8E%E4%B9%90%E6%94%B9%E7%89%88002.jpg%2Forigine%2Fe0a71b99-739a-4eb6-a34a-d7147c05231b?imageMogr2/auto-orient/strip/crop/!1920x200a0a1800/quality/90) center 0 no-repeat"
          ></div>
          <div
            class="bgl-edit-bg-item"
            style="background:url(//bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%BC%81%E7%A8%8E%E4%B9%90%E6%94%B9%E7%89%88002.jpg%2Forigine%2Fe0a71b99-739a-4eb6-a34a-d7147c05231b?imageMogr2/auto-orient/strip/crop/!1920x200a0a2000/quality/90) center 0 no-repeat"
          ></div>
          <div class="bgl-edit-bg-item"></div>
          <div
            class="bgl-edit-bg-item"
            style="background:url(//bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%BC%81%E7%A8%8E%E4%B9%90%E6%94%B9%E7%89%88002.jpg%2Forigine%2Fe0a71b99-739a-4eb6-a34a-d7147c05231b?imageMogr2/auto-orient/strip/crop/!1920x200a0a2400/quality/90) center 0 no-repeat"
          ></div>
          <div
            class="bgl-edit-bg-item"
            style="background:url(//bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%BC%81%E7%A8%8E%E4%B9%90%E6%94%B9%E7%89%88002.jpg%2Forigine%2Fe0a71b99-739a-4eb6-a34a-d7147c05231b?imageMogr2/auto-orient/strip/crop/!1920x200a0a2600/quality/90) center 0 no-repeat"
          ></div>
          <div
            class="bgl-edit-bg-item"
            style="background:url(//bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%BC%81%E7%A8%8E%E4%B9%90%E6%94%B9%E7%89%88002.jpg%2Forigine%2Fe0a71b99-739a-4eb6-a34a-d7147c05231b?imageMogr2/auto-orient/strip/crop/!1920x200a0a2800/quality/90) center 0 no-repeat"
          ></div>
          <div
            class="bgl-edit-bg-item"
            style="background:url(//bgl.zbjimg.com/bgl%2Fbjclound%2F%E4%BC%81%E7%A8%8E%E4%B9%90%E6%94%B9%E7%89%88002.jpg%2Forigine%2Fe0a71b99-739a-4eb6-a34a-d7147c05231b?imageMogr2/auto-orient/strip/crop/!1920x200a0a3000/quality/90)  center 0 no-repeat"
          ></div>
          <a
            class="bgl-edit-bg-item"
            href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
    <m-modal v-if="success" @getStatus="getStatus"></m-modal>
  </div>
</template>

<script>
import City from "../components/City";
import mModal from "../components/Modal";
export default {
  components: {
    City,
    mModal
  },
  data() {
    return {
      telphone: "",
      contactName: "",
      city: "广州市",
      success: false
    };
  },
  methods: {
    getStatus(res) {
      this.success = false;
    },
    choiceCity(value) {
      this.city = value;
    },
    submitConsult() {
      if (!this.telphone) {
        this.$message({
          message: "请填写您的手机号码",
          type: "warning"
        });
        return;
      }
      if (!/^1[34578]\d{9}$/.test(this.telphone)) {
        this.$message({
          message: "请输入正确的手机号码",
          type: "warning"
        });
        return;
      }
      const params = {
        type: "optimalTax",
        phone: this.telphone,
        name: this.contactName
      };

      this.$post(params).then(res => {
        if (res.ret == 0) {
          this.success = true;
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
