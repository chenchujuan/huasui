<template>
  <el-dialog title :visible="true" @close="sure">
    <div slot="title">
      <div class="application-received-title">
        <span class="received-title-icon">
          <i class="el-icon-check"></i>
        </span>
        <div class="received-title-content">
          <p class="received-title-name">您的申请我们已经收到</p>
          <p class="received-title-desc">您的专属顾问预计在10分钟内与您联系，请保持电话畅通！</p>
        </div>
      </div>
    </div>
    <!-- <span class="chancel-dialog-title-box">
    <div class="el-dialog__body">-->
    <p class="other-company-do">其他企业正在办理以下业务</p>
    <div class="application-received-content">
      <div class="received-content-wrap">
        <div
          class="received-content-wrap-item"
          style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2FPC%E6%B3%A8%E5%86%8C.jpg%2Forigine%2F72c02c36-a4f8-4ae9-9ca0-9915be7638b6&quot;);"
        >
          <a href="/#/gszc" target="_blank" class="content-wrap-item-link"></a>
        </div>
        <div class="received-content-wrap-item">
          <a href="/#/dljz" target="_blank" class="content-wrap-item-link"></a>
        </div>
        <div
          class="received-content-wrap-item"
          style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2FPC%E8%B5%84%E8%B4%A8.jpg%2Forigine%2F709587b3-eb4d-4473-972b-aeba2878b3eb&quot;);"
        >
          <a href="/#/zzbl" target="_blank" class="content-wrap-item-link"></a>
        </div>
        <div
          class="received-content-wrap-item"
          style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2FPC%E6%B3%A8%E9%94%80.jpg%2Forigine%2F43abec42-659d-43cb-accb-ac88d50d4900&quot;);"
        >
          <a href="/#" target="_blank" class="content-wrap-item-link"></a>
        </div>
      </div>
    </div>
    <!-- </div>
    </span>-->
    <div slot="footer" class="dialog-footer">
      <!-- <div class="ensure"> -->
      <button class="application-received-sure-btn" @click="sure">确定</button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible2: true
    };
  },
  methods: {
    sure() {
      this.$emit("getStatus", "false");
    }
  }
};
</script>

<style scoped>
.chance-dialog-title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.dialog-footer {
  display: flex;
  justify-content: center;
}
.application-received-title {
  text-align: left;
  margin-bottom: 30px;
}
.chance-dialog-title .chancel-dialog-title-icon {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  background-color: #ffe7e1;
}

.chance-dialog-title .chancel-dialog-title-icon i {
  position: relative;
  top: 5px;
  font-size: 22px;
  color: #ff7b57;
}

.chance-dialog-title .chancel-dialog-title-box {
  padding-left: 5px;
  text-align: left;
}
.el-dialog__body {
}

.chance-dialog-title .chancel-dialog-title-box .chancel-dialog-title-word {
  color: #2e2f33;
  font-size: 18px;
  height: 40px;
}

.chance-dialog-title .chancel-dialog-title-box .sub-title {
  color: #9f9f9f;
  text-align: left;
  font-size: 12px;
  display: block;
}
.received-content-wrap-item:nth-child(2) {
  background-image: url("../assets/zljz.jpg") !important;
}
.received-title-icon {
  float: left;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  background-color: #ffe7e1;
  display: inline-block;
  text-align: center;
  margin-right: 12px;
  font-size: 30px;
  color: #ff7954;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
}
.other-company-do {
  text-align: center;
  color: #878d99;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: -40px;
}
.application-received-content .received-content-wrap {
  font-size: 0;
  margin-bottom: 5px;
}

.application-received-content
  .received-content-wrap
  .received-content-wrap-item {
  font-size: 0;
  border: 1px solid #dbdce5;
  display: inline-block;
  margin: 1px 7px 13px;
  width: 218px;
  height: 90px;
  background: center no-repeat;
  background-size: 182px 66px;
}

.application-received-content
  .received-content-wrap
  .received-content-wrap-item
  .content-wrap-item-link {
  display: block;
  width: 100%;
  height: 100%;
}

.application-received-sure-btn {
  margin: 0 auto;
  padding: 0;
  border: none;
  color: #fff;
  width: 150px;
  height: 40px;
  line-height: 40px;
  background-color: #ff7955;
  border-radius: 5px;
  cursor: pointer;
}

.application-received-content .application-received-sure-btn:hover {
  background-color: #ff9072;
}
.received-title-desc {
  white-space: pre-line;
  font-size: 12px;
  color: #878d99;
}
</style>
