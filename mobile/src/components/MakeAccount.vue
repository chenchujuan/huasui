<template>
  <div id="__nuxt">
    <!---->
    <div id="__layout">
      <div>
        <div>
          <div class="account-content">
            <div class="header">
              <div class="banner">
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E4%BB%A3%E7%90%86%E8%AE%B0%E8%B4%A6wap%E7%AB%AF%E4%B8%93%E9%A2%98banner.jpg%2Forigine%2F6b7c0510-255f-45af-ac4a-121895594197"
                  alt="dzbanner[0].title"
                >
              </div>
            </div>
            <div>
              <form action method="post" class="form-account">
                <div id="main-form" class="forms-box">
                  <div class="box-cont">
                    <div class="forms-div">
                      <span>所在城市</span>
                      <p class="select" @click="showCity">{{myAddressProvince}}{{myAddressCity}}</p>
                      <mt-popup v-model="popupVisible" position="bottom">
                        <mt-picker
                          :showToolbar="true"
                          :slots="myAddressSlots"
                          @change="onValuesChange"
                        >
                          <div class="picker-toolbar-title">
                            <p class="btn-cancel" @click="cancelAddress">取消</p>
                            <p class="btn-sure" @click="sureAddress">确定</p>
                          </div>
                        </mt-picker>
                      </mt-popup>

                      <i class="icon-triangle-down"></i>
                    </div>
                    <div class="forms-div">
                      <span>企业名称</span>
                      <input
                        type="text"
                        v-model="companyName"
                        id="company-name"
                        placeholder="如：骅穗财务"
                        value
                      >
                    </div>
                    <div class="forms-div">
                      <span>手机号码</span>
                      <input
                        v-model="userPhone"
                        type="text"
                        id="user-phone"
                        placeholder="获取资深会计团队服务"
                      >
                    </div>
                    <input
                      type="button"
                      @click="searchResister"
                      value="立即获取"
                      class="sub-button main-btn"
                    >
                  </div>
                  <h4 class="forms-tip">
                    已有
                    <span>18216</span>人提交代账需求
                  </h4>
                </div>
              </form>
            </div>
            <div class="main-cont main-cont-bottom">
              <ul class="cont-list">
                <li class="list-item">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F1.jpg%2Forigine%2F58b122bc-79f0-455c-ad98-39693a4363cb"
                    alt="dzcontent[0].name"
                  >
                  <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1" class="service-btn">咨询本地代账服务及价格</a>
                </li>
              </ul>
              <div class="account-plan">
                <h3>
                  <span class="line">/</span>请根据您公司的营业额选择代账方案
                  <span class="line">/</span>
                </h3>
                <p class="desc">灵活定制代账方案，每月省钱高至30%</p>
                <ul class="plan-list">
                  <li class="plan-list-item">
                    <p>
                      <span class="letter">A</span>无票据来往
                    </p>
                  </li>
                  <li class="plan-list-item">
                    <p>
                      <span class="letter">B</span>0-100万
                    </p>
                  </li>
                  <li class="plan-list-item">
                    <p>
                      <span class="letter">C</span>100-500万
                    </p>
                  </li>
                  <li class="plan-list-item active">
                    <p>
                      <span class="letter">D</span>500万以上
                    </p>
                  </li>
                </ul>
                <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1" class="plan-btn">免费获取代账方案及价格</a>
              </div>
              <ul class="cont-list">
                <!---->
                <li class="list-item">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E4%BC%98%E5%8A%BF.jpg%2Forigine%2F428c35c8-8b93-4b4f-aa6c-8441d37ed051"
                    alt="dzcon.name"
                  >
                  <!---->
                </li>
                <li class="list-item">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E6%B5%81%E7%A8%8B.jpg%2Forigine%2F349ca553-3e44-47cc-b90f-78f285c29ceb"
                    alt="dzcon.name"
                  >
                  <!---->
                </li>
                <li class="list-item">
                  <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
                    <img
                      src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E4%B8%AD%E9%83%A8%E5%B9%BB%E7%81%AF.jpg%2Forigine%2F6ff9444a-480c-43f7-819e-d09086d80400"
                      alt="dzcon.name"
                    >
                  </a>
                  <!---->
                </li>
                <li class="list-item">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E4%BB%A3%E8%B4%A6WAP-180428_02.jpg%2Forigine%2F5c0af777-1291-4767-a657-92fb1ee57ea8"
                    alt="dzcon.name"
                  >
                  <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1" class="service-btn">更多代账问题在线咨询</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Picker, Popup, button, Toast, MessageBox } from "mint-ui";
import myaddress from "../server/pc.json";
export default {
  name: "MakeAccount",
  data() {
    return {
      companyName: "", //企业名
      userPhone: "", //手机号
      popupVisible: false,
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        }
      ],
      myAddressProvince: "",
      myAddressCity: ""
    };
  },
  methods: {
    sureAddress() {
      this.popupVisible = false;
    },
    cancelAddress() {
      this.popupVisible = false;
      this.myAddressProvince = "广东省";
      this.myAddressCity = "广州市";
    },
    showCity() {
      this.popupVisible = true;
    },
    closeShowAddress(e) {
      if (e.target == this.$refs.selectAddress) {
        this.isShowAddress = !this.isShowAddress;
      }
    },
    onValuesChange(picker, values) {
      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, myaddress[values[0]]); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        this.myAddressProvince = values[0];
        this.myAddressCity = values[1];
      }
    },
    searchResister() {
      if (!this.userPhone || !this.companyName) {
        Toast("为了快速享受服务，请补充相关信息");
        return;
      }
      if (!/^1[34578]\d{9}$/.test(this.userPhone)) {
        Toast("请输入正确的手机号码");
        return;
      }
      const params = {
        type: "mackaccount",
        phone: this.userPhone,
        name: this.companyName,
        province: this.myAddressProvince,
        city: this.myAddressCity
      };

      this.$post(params).then(res => {
        if (res.ret == 0) {
          MessageBox(
            "您的申请我们已经收到！",
            "请耐心等待，您的专属顾问会在10分钟内联系您，请保持电话畅通"
          );
          this.companyName = ""; //企业名
          this.userPhone = ""; //手机号
          this.myAddressProvince = "北京市";
          this.myAddressCity = "东城区";
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      //vue里面全部加载好了再执行的函数 （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0; // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化 //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    });
  }
};
</script>
<style scoped>
@import "../styles/makeaccount.css";
</style>