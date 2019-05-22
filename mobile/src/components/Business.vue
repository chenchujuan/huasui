
<template>
  <div id="__nuxt">
    <!---->
    <div id="__layout">
      <div>
        <div>
          <div class="register-content">
            <div class="register-content__top">
              <img src="../assets/2.jpg" alt="工商注册" class="register-content__top-img">
            </div>
            <form action method="post" class="form-register">
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
                    <input type="text" id="company-name" placeholder="如：骅穗财务" v-model="companyName">
                  </div>
                  <div class="forms-div">
                    <span>手机号码</span>
                    <input type="text" id="user-phone" placeholder="10分钟回复查询结果" v-model="userPhone">
                  </div>
                  <input
                    type="button"
                    @click="searchResister"
                    value="免费查询能否注册"
                    class="sub-button main-btn"
                  >
                </div>
                <h4 class="forms-tip">
                  已有
                  <span>123063</span>人提交注册需求
                </h4>
              </div>
            </form>
            <div class="main-cont">
              <ul class="cont-list">
                <li class="list-item">
                  <img
                    src="https://homesitetask.zbjimg.com/homesite/task/1.jpg/origine/570175c3-7f6f-40c2-b0c8-c47aad369233"
                    alt="不查询的后果"
                  >
                </li>
                <li class="list-item">
                  <img src="../assets/1.jpg" alt="选骅穗财务">
                </li>
                <li class="list-item">
                  <img
                    src="https://homesitetask.zbjimg.com/homesite/task/3.jpg/origine/d8175e84-f167-44d4-8264-9a560584a5ed"
                    alt="流程"
                  >
                </li>
                <li class="list-item">
                  <img src="../assets/3.jpg" alt="骅穗查询的优势">
                </li>
                <li class="list-item">
                  <a
                    href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  >
                    <img
                      src="https://homesitetask.zbjimg.com/homesite/task/wap工商注册底部banner-办理资质.jpg/origine/fba34db5-160a-4ef5-82de-386aaaf54c11"
                      alt="gszccon.title"
                    >
                  </a>
                </li>
              </ul>
            </div>
            <div class="main-foot main-foot-bottom">
              <a
                type="button"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="sub-button"
              >免费查询领福利</a>
            </div>
          </div>
        </div>
        <div
          class="cs-wap-back-top m-cs-index-back-top"
          style="bottom: 150px; right: 0px; display: none;"
        >
          <div>
            <i class="icon-zhiding"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Picker, Popup, Toast, MessageBox } from "mint-ui";
import myaddress from "../server/pc.json";
export default {
  name: "Business",
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
  created() {},
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
        type: "business",
        phone: this.userPhone,
        province: this.myAddressProvince,
        city: this.myAddressCity,
        name: this.companyName
      };

      this.$post(params).then(res => {
        if (res.ret == 0) {
          MessageBox(
            "您的申请我们已经收到！",
            "请耐心等待，您的财税顾问会在10分钟内联系您，请保持电话畅通"
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
@import "../styles/business.css";
</style>

