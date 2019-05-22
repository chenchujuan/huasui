<template>
  <div>
    <div class="new-business-content">
      <div class="new-business-banner">
        <div class="el-carousel">
          <div class="el-carousel__container" style="height: 500px;">
            <!---->
            <!---->
            <div
              class="el-carousel__item is-active is-animating"
              style="transform: translateX(0px) scale(1);"
            >
              <!---->
              <div
                class="header-back"
                style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2Fbanner.jpg%2Forigine%2F6f7ea317-b79c-4865-a8ed-9689443947f4&quot;);"
              ></div>
            </div>
          </div>
          <!---->
        </div>
      </div>
      <div class="new-business-advantage">
        <div class="business-advantage-content zbj-grid-1200">
          <div class="business-advantage-chance">
            <div class="advantage-chance-title">
              <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/eaa2e9a.png">创业必备神器
              <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/eaa2e9a.png">
            </div>
            <div
              class="advantage-chance-entry"
              style="animation: fadeInUp 1s ease 0s 1 normal both running;"
            >
              <div class="chance-entry-nuclear">
                <div class="chance-entry-big">
                  <p class="chance-big-title">注册前，查询公司名称是否能注册</p>
                  <p class="chance-big-des">同步工商系统，注册成功率提高3倍</p>
                  <div class="chance-big-input">
                    <div class="border-gray">
                      <input
                        placeholder="请输入公司名称，例：广州骅穗财务顾问有限公司"
                        v-model="company"
                        class="big-input-name"
                      >
                      <input placeholder="输入联系方式，立刻获取核名结果" v-model="telphone" class="big-input-num">
                    </div>
                    <div class="big-button" @click="receiveMaterial">免费核名</div>
                  </div>
                </div>
              </div>
              <div class="chance-entry-register">
                <div class="chance-entry-small">
                  <p class="chance-small-title">公司名字</p>
                  <p class="chance-small-des">还没确定?</p>
                  <div class="chance-small-change">
                    免费起名
                    <i class="icon-arrow1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="business-advantage-list">
            <div class="advantage-list-title">
              <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/eaa2e9a.png">5大服务优势，保证安心快速注册公司
              <img
                src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/eaa2e9a.png"
              >
            </div>
            <div class="advantage-list-list">
              <div class="advantage-list-item">
                <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/c3ad049.png">
                <div class="list-item-content">
                  <p class="item-content-title">极速拿证快一步</p>
                  <p class="item-content-des">3-5个工作日领证开业</p>
                </div>
              </div>
              <div class="advantage-list-item">
                <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/a1f1964.png">
                <div class="list-item-content">
                  <p class="item-content-title">成功率高至98%</p>
                  <p class="item-content-des">先核名后注册成功率更高</p>
                </div>
              </div>
              <div class="advantage-list-item">
                <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/37a6a0f.png">
                <div class="list-item-content">
                  <p class="item-content-title">全程托管不跑腿</p>
                  <p class="item-content-des">材料准备提交一站搞定</p>
                </div>
              </div>
              <div class="advantage-list-item">
                <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/f684a6c.png">
                <div class="list-item-content">
                  <p class="item-content-title">报价真实0增项</p>
                  <p class="item-content-des">无隐形收费，不成功退款</p>
                </div>
              </div>
              <div class="advantage-list-item">
                <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/9778308.png">
                <div class="list-item-content">
                  <p class="item-content-title">十二年品牌保障</p>
                  <p class="item-content-des">骅穗旗下企业服务机构</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="new-business-industry">
        <div class="business-industry-step">
          <div class="zbj-grid-1200 industry-step-content">
            <div class="industry-step-entry">
              <p class="step-entry-logo">CS.ZBJ.COM</p>
              <div class="step-entry-content">
                <div class="step-entry-title">
                  找骅穗财务
                  <span>只需两步</span>
                </div>
                <div class="step-entry-des">
                  <span>第1步:</span> 提交你的注册资料 &gt;
                  <span>第2步:</span> 坐等拿证！
                </div>
                <input v-model="telphone2" placeholder="输入手机号码，免费领取注册全套资料">
                <button @click="receiveMaterial2">马上领取</button>
              </div>
            </div>
          </div>
        </div>
        <div class="business-industry-content">
          <div class="zbj-grid-1200">
            <div class="industry-content-title">
              <div class="industry-title-name">
                <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/eaa2e9a.png">承接各种行业类型公司注册
                <img
                  src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/eaa2e9a.png"
                >
              </div>
              <div class="industry-title-des">可提供注册地址，轻松解决注册难题</div>
            </div>
            <div class="industry-content-list">
              <div class="industry-list-left">
                <div class="industry-left-big">
                  <div class="industry-title">
                    批发和零售行业
                    <span>
                      <i class="icon-huo"></i>Hot
                    </span>
                  </div>
                  <div class="industry-left-big-list">
                    <div class="industry-left-big-item">食品</div>
                    <div class="industry-left-big-item">饮料和烟草制品</div>
                    <div class="industry-left-big-item">服装及日用品</div>
                    <div class="industry-left-big-item">纺织</div>
                    <div class="industry-left-big-item">文化</div>
                    <div class="industry-left-big-item">体育用品及器材</div>
                    <div class="industry-left-big-item">机械设备</div>
                    <div class="industry-left-big-item">五金交电及电子产品</div>
                    <div class="industry-left-big-item">医药及医疗器</div>
                    <div class="industry-left-big-item">百货等</div>
                  </div>
                </div>
                <div class="industry-left-small">
                  <div class="industry-title">
                    信息技术行业
                    <span>
                      <i class="icon-huo"></i>Hot
                    </span>
                  </div>
                  <div class="industry-des">互联网信息、计算机服务、电信和其他信息传输服务、计算机维修、计算机系统、广播电视传输等</div>
                </div>
              </div>
              <div class="industry-list-right">
                <div class="industry-right-item">
                  <div class="industry-title">
                    制造行业
                    <!---->
                  </div>
                  <div
                    class="industry-des"
                  >农副食品加工、饮料制造、纺织服装、鞋、帽制造、文化、体育用品及器材、五金、家具及室内装修材料、家用电器及电子产品等</div>
                  <!---->
                </div>
                <div class="industry-right-item">
                  <div class="industry-title">
                    服务行业
                    <span>
                      <i class="icon-huo"></i>Hot
                    </span>
                  </div>
                  <div class="industry-des">广告、知识产权、中介、旅行社、计算机及通讯、商务服务、企业管理服务、会议及展览、法律服务、包装、汽车、租赁等</div>
                  <!---->
                </div>
                <div class="industry-right-item">
                  <div class="industry-title">
                    科学技术行业
                    <span>
                      <i class="icon-huo"></i>Hot
                    </span>
                  </div>
                  <div class="industry-des">专业技术服务、科技交流和推广服务、环境监测、技术检测、工程技术与规划管理等</div>
                  <!---->
                </div>
                <div class="industry-right-item">
                  <div class="industry-title">
                    农林牧渔行业
                    <!---->
                  </div>
                  <div class="industry-des">农业、林业、畜牧业、渔业、农、林、牧、渔服务等</div>
                  <!---->
                </div>
                <div class="industry-right-item">
                  <div class="industry-title">
                    住宿和餐饮行业
                    <!---->
                  </div>
                  <div class="industry-des">餐饮、住宿、旅游饭店、一般旅馆等</div>
                  <!---->
                </div>
                <div class="industry-right-item">
                  <div class="industry-title">
                    更多行业
                    <!---->
                  </div>
                  <div class="industry-des-last">建筑、娱乐、交通运输、仓储和邮政、清洁服务、修理与维护、居民服务、广播、电视等</div>
                  <div class="industry-des-more">
                    <span>了解更多注册行业详情</span>
                    <i class="icon-arrow1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="new-business-register">
        <div class="business-register-step">
          <div class="zbj-grid-1200">
            <div class="register-step-title">
              <div class="step-title-name">
                <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/eaa2e9a.png">绿色通道注册，创业快人一步
                <img
                  src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/eaa2e9a.png"
                >
              </div>
              <div class="step-title-des">4步全程代办，快至3天拿证</div>
            </div>
            <div class="register-step-list">
              <div class="step-list-item">
                <img
                  src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/12835ea.png"
                  class="step-item-logo"
                >
                <div class="step-item-content">
                  <p class="step-item-title">下单合作</p>
                  <p class="step-item-des">明确注册需求</p>
                </div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAYCAMAAACGPf6pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQ5QTFRFp9L9qdP9oM78+vz/os/9s9j9nMz8+fz/wuD9tdn9ns38pND96PP+msv87/f/7PX++Pv/9/v/m8z82Ov+3+7+zOX+4fD+1On+9vr/8vj/8/n/z+b+vd39x+L+utz93O3+5/L+sdf9pdH96vT+uNv90ef+xeH95fL+yeP+8fj/wN791ur+rtX94/D+9Pr/2uz+sNf97vb/rNT97fb/n878q9T92+z+o9D99fr/yuT+mcv84/H+mcr88Pf/v9791er+5PH+6fT+5/P+rdX9xOH90ej+u9z9uNr9w+D9stf96/X+wd/9rtb9oc/8tNj9yOP+ttn9tNn9/P3/udv9mMr8t9r93e3+stj9+/3/////lbQeGAAAAFp0Uk5T//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A0daKbwAAAUBJREFUeNqc1FlbgkAUBmBixIVA22zTEFrUFpOKUkzTtHJp30///480wwwMUBc6XHHzPt85Z+aM9DP1Z2r8X5qezUn3b0Js20BCLPGCBNh8Q35FAizx6ChIoEhZTY6JkwBQamFx/XhzYz97kptoZuVydeWrvny4tlfIV7du0ldFYzej2A/njC1ZqQjrZM9yO5SVLjC7LeRdzA6KxhCzo1NSJGE6dpE0wvq9GmZBWpkwnGZ5rOEx3YZYkSStxtICdhcwmtZqp33WZOy6X6FpXcJczgaUOSSt7cR6m7C0Ou2NF2kPeFqINf3ezF4orfpcJpMckiKDSeqtj1G8SDbJf0YSYhaEWMfrLTISN8pYb2P4ewA+6/pp7Lh52jfMfpXVpAKzX2VZfQKRxcmAyJp+gsh2v4PIozACgSdICz14vwIMABtANEbgWfWiAAAAAElFTkSuQmCC"
                  class="step-item-arrow"
                >
              </div>
              <div class="step-list-item">
                <img
                  src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/64cdea4.png"
                  class="step-item-logo"
                >
                <div class="step-item-content">
                  <p class="step-item-title">提交材料</p>
                  <p class="step-item-des">准备注册资料</p>
                </div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAYCAMAAACGPf6pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQ5QTFRFp9L9qdP9oM78+vz/os/9s9j9nMz8+fz/wuD9tdn9ns38pND96PP+msv87/f/7PX++Pv/9/v/m8z82Ov+3+7+zOX+4fD+1On+9vr/8vj/8/n/z+b+vd39x+L+utz93O3+5/L+sdf9pdH96vT+uNv90ef+xeH95fL+yeP+8fj/wN791ur+rtX94/D+9Pr/2uz+sNf97vb/rNT97fb/n878q9T92+z+o9D99fr/yuT+mcv84/H+mcr88Pf/v9791er+5PH+6fT+5/P+rdX9xOH90ej+u9z9uNr9w+D9stf96/X+wd/9rtb9oc/8tNj9yOP+ttn9tNn9/P3/udv9mMr8t9r93e3+stj9+/3/////lbQeGAAAAFp0Uk5T//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A0daKbwAAAUBJREFUeNqc1FlbgkAUBmBixIVA22zTEFrUFpOKUkzTtHJp30///480wwwMUBc6XHHzPt85Z+aM9DP1Z2r8X5qezUn3b0Js20BCLPGCBNh8Q35FAizx6ChIoEhZTY6JkwBQamFx/XhzYz97kptoZuVydeWrvny4tlfIV7du0ldFYzej2A/njC1ZqQjrZM9yO5SVLjC7LeRdzA6KxhCzo1NSJGE6dpE0wvq9GmZBWpkwnGZ5rOEx3YZYkSStxtICdhcwmtZqp33WZOy6X6FpXcJczgaUOSSt7cR6m7C0Ou2NF2kPeFqINf3ezF4orfpcJpMckiKDSeqtj1G8SDbJf0YSYhaEWMfrLTISN8pYb2P4ewA+6/pp7Lh52jfMfpXVpAKzX2VZfQKRxcmAyJp+gsh2v4PIozACgSdICz14vwIMABtANEbgWfWiAAAAAElFTkSuQmCC"
                  class="step-item-arrow"
                >
              </div>
              <div class="step-list-item">
                <img
                  src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/e0f12db.png"
                  class="step-item-logo"
                >
                <div class="step-item-content">
                  <p class="step-item-title">办理执照</p>
                  <p class="step-item-des">一切交给我们</p>
                </div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAYCAMAAACGPf6pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQ5QTFRFp9L9qdP9oM78+vz/os/9s9j9nMz8+fz/wuD9tdn9ns38pND96PP+msv87/f/7PX++Pv/9/v/m8z82Ov+3+7+zOX+4fD+1On+9vr/8vj/8/n/z+b+vd39x+L+utz93O3+5/L+sdf9pdH96vT+uNv90ef+xeH95fL+yeP+8fj/wN791ur+rtX94/D+9Pr/2uz+sNf97vb/rNT97fb/n878q9T92+z+o9D99fr/yuT+mcv84/H+mcr88Pf/v9791er+5PH+6fT+5/P+rdX9xOH90ej+u9z9uNr9w+D9stf96/X+wd/9rtb9oc/8tNj9yOP+ttn9tNn9/P3/udv9mMr8t9r93e3+stj9+/3/////lbQeGAAAAFp0Uk5T//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A0daKbwAAAUBJREFUeNqc1FlbgkAUBmBixIVA22zTEFrUFpOKUkzTtHJp30///480wwwMUBc6XHHzPt85Z+aM9DP1Z2r8X5qezUn3b0Js20BCLPGCBNh8Q35FAizx6ChIoEhZTY6JkwBQamFx/XhzYz97kptoZuVydeWrvny4tlfIV7du0ldFYzej2A/njC1ZqQjrZM9yO5SVLjC7LeRdzA6KxhCzo1NSJGE6dpE0wvq9GmZBWpkwnGZ5rOEx3YZYkSStxtICdhcwmtZqp33WZOy6X6FpXcJczgaUOSSt7cR6m7C0Ou2NF2kPeFqINf3ezF4orfpcJpMckiKDSeqtj1G8SDbJf0YSYhaEWMfrLTISN8pYb2P4ewA+6/pp7Lh52jfMfpXVpAKzX2VZfQKRxcmAyJp+gsh2v4PIozACgSdICz14vwIMABtANEbgWfWiAAAAAElFTkSuQmCC"
                  class="step-item-arrow"
                >
              </div>
              <div class="step-list-item">
                <img
                  src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/b0759ae.png"
                  class="step-item-logo"
                >
                <div class="step-item-content">
                  <p class="step-item-title">完成注册</p>
                  <p class="step-item-des">领取营业执照</p>
                </div>
                <!---->
              </div>
            </div>
          </div>
        </div>
        <div class="business-done-register">
          <div class="zbj-grid-1200 done-register-content">
            <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371" target="_blank">马上咨询活动享优惠</a>
          </div>
        </div>
      </div>
      <div class="new-business-hotmore">
        <div class="business-hot-question">
          <div class="zbj-grid-1200">
            <div class="hot-question-title">
              <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/eaa2e9a.png">工商注册热门问题，你都了解吗？
              <img
                src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/eaa2e9a.png"
              >
            </div>
            <div class="hot-question-list">
              <div class="hot-question-item">
                <p class="hot-question-num">1</p>
                <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371" target="_blank">注册公司的流程是什么？</a>
              </div>
              <div class="hot-question-item">
                <p class="hot-question-num">2</p>
                <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371" target="_blank">注册哪种类型公司更省钱？</a>
              </div>
              <div class="hot-question-item">
                <p class="hot-question-num">3</p>
                <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371" target="_blank">公司注册资本可以使用吗？</a>
              </div>
              <div class="hot-question-item">
                <p class="hot-question-num">4</p>
                <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371" target="_blank">注册资金大小什么区别？</a>
              </div>
            </div>
            <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371" target="_blank" class="more-hot-question">点我了解更多热门问题 &gt;</a>
          </div>
        </div>
      </div>
      <div class="el-carousel">
        <div class="el-carousel__container" style="height: 103px;">
          <!---->
          <!---->
          <div
            class="el-carousel__item is-active is-animating"
            style="transform: translateX(0px) scale(1);"
          >
            <!---->
            <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371" target="_blank">
              <div
                class="header-back"
                style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E5%85%AC%E5%8F%B8%E6%B3%A8%E5%86%8C%E5%BA%95%E9%83%A8banner-%E5%90%88%E5%90%8C.jpg%2Forigine%2F66f27ff9-4a16-4185-8d3d-f77e9e37cc25&quot;);"
              ></div>
            </a>
          </div>
        </div>
        <!---->
      </div>
      <div
        class="el-dialog__wrapper application-received"
        applicationsdialog="[object Object]"
        style="display: none;"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="dialog"
          class="el-dialog"
          style="margin-top: 15vh; width: 520px;"
        >
          <div class="el-dialog__header">
            <div class="application-received-title">
              <span class="received-title-icon">
                <i class="el-icon-check"></i>
              </span>
              <div class="received-title-content">
                <p class="received-title-name">您的申请我们已经收到</p>
                <p class="received-title-desc">您的专属顾问预计在10分钟内与您联系，请保持电话畅通！</p>
              </div>
            </div>
            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
          <!---->
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      company: "",
      telphone: "",
      telphone2: ""
    };
  },
  methods: {
    receiveMaterial() {
      if (!this.company || !this.telphone) {
        this.$message.error("请输入公司名称或手机号码");
        return;
      }
      if (!/^1[34578]\d{9}$/.test(this.telphone)) {
        this.$message.error("请输入正确的手机号码");
        return;
      }
      const params = {
        type: "heming",
        phone: this.telphone
      };
      this.$post(params).then(res => {
        if (res.ret == 0) {
          MessageBox(
            "您的核名需求我们已经收到！",
            "请耐心等待，财税顾问会在10分钟内联系您"
          );
        }
      });
    },
    receiveMaterial2() {
      if (!this.telphone2 || !/^1[34578]\d{9}$/.test(this.telphone2)) {
        this.$message.error("请输入正确的手机号码");
        return;
      }
      const params = {
        type: "heming",
        phone: this.telphone2
      };
      this.$post(params).then(res => {
        if (res.ret == 0) {
          MessageBox(
            "您的核名需求我们已经收到！",
            "请耐心等待，财税顾问会在10分钟内联系您"
          );
        }
      });
    }
  }
};
</script>
<style scoped>
@import "../styles/gszc.css";
</style>
