<template>
  <div class="wrapper">
    <div class="index-header">
      <div class="logo">
        <img src="../assets/1.png" alt>
      </div>
      <div class="common-banner" style="height:192px;">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <a href="/#/gszc">
              <img
                src="https://homesitetask.zbjimg.com/homesite/task/核名图片.jpg/origine/7e85f167-667a-4c58-bd97-38261e453318"
                alt
                class="common-banner__image"
              >
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="/#/ssch">
              <img
                src="https://homesitetask.zbjimg.com/homesite/task/工商变更.jpg/origine/3c439d2d-126d-4e9c-a02e-74611d279905"
                alt
                class="common-banner__image"
              >
            </a>
          </mt-swipe-item>

          <mt-swipe-item>
            <a href="/#/zzbl">
              <img src="../assets/5.jpg" alt class="common-banner__image">
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <!-- 工商注册；代理记账；资质办理；税收筹划 -->
    <div class="service">
      <div class="service-item">
        <a href="/#/gszc">
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/08c2dfb.png">
          <span>工商注册</span>
        </a>
      </div>
      <div class="service-item">
        <a href="/#/dljz">
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/fd7356b.png">
          <span>代理记账</span>
        </a>
      </div>
      <div class="service-item">
        <a href="/#/zzbl">
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/0504b37.png">
          <span>资质办理</span>
        </a>
      </div>
      <div class="service-item">
        <a href="/#/ssch">
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/e76b0ae.png">
          <span>税收筹划</span>
        </a>
      </div>
    </div>
    <!-- part3 -->
    <div class="gszc-advantage">
      <div class="gszc-advantage-chance" v-show="showRename">
        <div class="advantage-chance-title">
          <p class="chance-title-name">注册前，查询公司名称是否能注册</p>
          <p class="chance-title-des">同步工商系统，注册成功率提高3倍</p>
        </div>
        <div class="advantage-chance-input">
          <input placeholder="输入公司名，如广州骅穗财务顾问有限公司" v-model="comName">
          <input placeholder="输入联系方式，立刻获取核名结果" v-model="mobilePhone">
          <button @click="getName" data-type="get">免费核名</button>
        </div>
        <div class="advantage-chance-tip has-private-policy" data-type="get" @click="setName">
          还没确定公司名字？
          <span>马上起名</span>
          <i class="icon-chakangengduotubiao"></i>
        </div>
      </div>
      <div class="gszc-advantage-chance" v-show="!showRename">
        <div class="advantage-chance-title">
          <p class="chance-title-name">公司名字还没确定？</p>
          <p class="chance-title-des">科学起名不重名，注册通过率高</p>
        </div>
        <div class="advantage-chance-input">
          <input placeholder="输入城市+行业类型，如广州骅穗财务顾问有限公司" v-model="cityIndustry">
          <input placeholder="输入联系方式，立刻获取起名结果" v-model="mobilePhone">
          <button @click="getName" data-type="set">免费起名</button>
        </div>
        <div class="advantage-chance-tip has-private-policy" data-type="set" @click="setName">
          注册前，查询
          <span>公司名称是否能注册</span>
          <i class="icon-chakangengduotubiao"></i>
        </div>
      </div>
      <div class="gszc-advantage-content">
        <div class="advantage-content-title">
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/ed99dc5.png">
          <span>5大服务优势，保证安心快速注册公司</span>
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/ed99dc5.png">
        </div>
        <div class="advantage-content-main">
          <div class="content-main-list">
            <img
              src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/4484951.png"
              class="content-main-icon"
            >
            <p class="content-main-title">极速拿证快一步</p>
            <p class="content-main-des">3-5个工作日领证开业</p>
          </div>
          <div class="content-main-list">
            <img
              src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/32f0e72.png"
              class="content-main-icon"
            >
            <p class="content-main-title">成功率高至98%</p>
            <p class="content-main-des">先核名后注册成功率更高</p>
          </div>
          <div class="content-main-list">
            <img
              src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/d85a0ba.png"
              class="content-main-icon"
            >
            <p class="content-main-title">全程托管不跑腿</p>
            <p class="content-main-des">材料准备提交一站搞定</p>
          </div>
          <div class="content-main-list">
            <img
              src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/616670c.png"
              class="content-main-icon"
            >
            <p class="content-main-title">报价真实0增项</p>
            <p class="content-main-des">无隐形收费，不成功退款</p>
          </div>
          <div class="content-main-list">
            <img
              src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/d9bb42d.png"
              class="content-main-icon"
            >
            <p class="content-main-title">十二年品牌保障</p>
            <p class="content-main-des">骅穗旗下企业服务机构</p>
          </div>
        </div>
      </div>
    </div>
    <!-- part4 -->
    <div class="gszc-industry">
      <img
        src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/1fcf911.jpg"
        class="gszc-industry-que"
      >
      <div class="gszc-industry-content">
        <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/5cb186f.jpg">
        <div class="industry-content-step">
          <div class="content-step-title">
            找骅穗财务
            <span>只需两步</span>
          </div>
          <div class="content-step-des">
            <span>第1步:</span> 提交你的注册资料 &gt;
            <span>第2步:</span> 坐等拿证！
          </div>
          <div class="content-step-form">
            <input v-model="mobilePhone2" placeholder="输入手机号码，免费领取注册全套资料" value>
            <button @click="receiveMaterial">马上领取</button>
          </div>
        </div>
        <div class="industry-content-list">
          <div class="content-list-title">
            <p class="list-title-name">承接各种行业类型公司注册</p>
            <p class="list-title-des">可提供注册地址，轻松解决注册难题</p>
          </div>
          <div
            class="swiper-container content-list-industry swiper-container-coverflow swiper-container-3d swiper-container-initialized swiper-container-horizontal swiper-container-android"
            id="thumbs"
          >
            <div class="swiper-wrapper list-industry-swipe">
              <div
                class="item-industry-swipe swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="0"
              >
                <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/a2151f2.jpg">
                <div class="item-industry-text">
                  <div class="industry-text-title">
                    批发和零售行业
                    <span class="industry-title-fire">
                      <i class="icon-huo"></i>Hot
                    </span>
                  </div>
                  <div
                    class="industry-text-des"
                  >食品、饮料和烟草制品、服装及日用品、纺织、文化、体育用品及器材、机械设备、五金交电及电子产品、医药及医疗器、百货等</div>
                </div>
              </div>
              <div
                class="item-industry-swipe swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index="1"
              >
                <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/a2151f2.jpg">
                <div class="item-industry-text">
                  <div class="industry-text-title">
                    制造行业
                    <!---->
                  </div>
                  <div
                    class="industry-text-des"
                  >农副食品加工、饮料制造、纺织服装、鞋、帽制造、文化、体育用品及器材、五金、家具及室内装修材料、家用电器及电子产品等</div>
                </div>
              </div>
              <div
                class="item-industry-swipe swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index="2"
              >
                <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/a2151f2.jpg">
                <div class="item-industry-text">
                  <div class="industry-text-title">
                    服务行业
                    <span class="industry-title-fire">
                      <i class="icon-huo"></i>Hot
                    </span>
                  </div>
                  <div
                    class="industry-text-des"
                  >广告、知识产权、中介、旅行社、计算机及通讯、商务服务、企业管理服务、会议及展览、法律服务、包装、汽车、租赁等</div>
                </div>
              </div>
              <div
                class="item-industry-swipe swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                data-swiper-slide-index="3"
              >
                <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/a2151f2.jpg">
                <div class="item-industry-text">
                  <div class="industry-text-title">
                    科学技术行业
                    <span class="industry-title-fire">
                      <i class="icon-huo"></i>Hot
                    </span>
                  </div>
                  <div class="industry-text-des">专业技术服务、科技交流和推广服务、环境监测、技术检测、工程技术与规划管理等</div>
                </div>
              </div>
              <div
                class="item-industry-swipe swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="4"
              >
                <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/a2151f2.jpg">
                <div class="item-industry-text">
                  <div class="industry-text-title">
                    农林牧渔行业
                    <!---->
                  </div>
                  <div class="industry-text-des">农业、林业、畜牧业、渔业、农、林、牧、渔服务等</div>
                </div>
              </div>
              <div
                class="item-industry-swipe swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="5"
              >
                <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/a2151f2.jpg">
                <div class="item-industry-text">
                  <div class="industry-text-title">
                    信息技术行业
                    <span class="industry-title-fire">
                      <i class="icon-huo"></i>Hot
                    </span>
                  </div>
                  <div class="industry-text-des">互联网信息、计算机服务、电信和其他信息传输服务、计算机维修、计算机系统、广播电视传输等</div>
                </div>
              </div>
              <div
                class="item-industry-swipe swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="6"
              >
                <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/a2151f2.jpg">
                <div class="item-industry-text">
                  <div class="industry-text-title">
                    住宿和餐饮行业
                    <!---->
                  </div>
                  <div class="industry-text-des">餐饮、住宿、旅游饭店、一般旅馆等</div>
                </div>
              </div>
              <div
                class="item-industry-swipe swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="7"
              >
                <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/a2151f2.jpg">
                <div class="item-industry-text">
                  <div class="industry-text-title">
                    更多行业
                    <!---->
                  </div>
                  <div class="industry-text-des">建筑、娱乐、交通运输、仓储和邮政、清洁服务、修理与维护、居民服务、广播、电视等</div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets">
              <span class="my-bullet"></span>
              <span class="my-bullet"></span>
              <span class="my-bullet"></span>
              <span class="my-bullet"></span>
              <span class="my-bullet"></span>
              <span class="my-bullet"></span>
              <span class="my-bullet"></span>
              <span class="my-bullet"></span>
            </div>
          </div>
          <a
            href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
            class="content-list-more"
          >
            <span>了解更多注册行业详情</span>
            <i class="icon-chakangengduotubiao"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- part5 -->
    <div>
      <div class="gszc-step">
        <div class="gszc-step-title">
          <div class="step-title-name">
            <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/ed99dc5.png">绿色通道注册，创业快人一步
            <img
              src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/ed99dc5.png"
            >
          </div>
          <div class="step-title-des">4步全程代办，快至3天拿证</div>
        </div>
        <div class="gszc-step-list">
          <div class="gszc-step-item">
            <div class="step-item-content">
              <img
                src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/1dab8ec.png"
                class="step-item-icon"
              >
              <div class="step-content-name">
                <p class="step-item-name">1.下单合作</p>
                <p class="step-item-des">明确注册需求</p>
              </div>
            </div>
            <img
              src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/5660d1b.png"
              class="step-item-arrow"
            >
          </div>
          <div class="gszc-step-item">
            <div class="step-item-content">
              <img
                src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/c65cd97.png"
                class="step-item-icon"
              >
              <div class="step-content-name">
                <p class="step-item-name">2.提交材料</p>
                <p class="step-item-des">准备注册资料</p>
              </div>
            </div>
            <img
              src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/5660d1b.png"
              class="step-item-arrow"
            >
          </div>
          <div class="gszc-step-item">
            <div class="step-item-content">
              <img
                src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/c4bde81.png"
                class="step-item-icon"
              >
              <div class="step-content-name">
                <p class="step-item-name">3.办理执照</p>
                <p class="step-item-des">一切交给我们</p>
              </div>
            </div>
            <img
              src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/5660d1b.png"
              class="step-item-arrow"
            >
          </div>
          <div class="gszc-step-item">
            <div class="step-item-content">
              <img
                src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/084dbb0.png"
                class="step-item-icon"
              >
              <div class="step-content-name">
                <p class="step-item-name">4.完成注册</p>
                <p class="step-item-des">领取营业执照</p>
              </div>
            </div>
            <img
              src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/5660d1b.png"
              class="step-item-arrow"
            >
          </div>
        </div>
      </div>
      <div class="gszc-done-register">
        <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/5b82b65.jpg">
        <div class="done-register-title">完成注册，你将获得以下资料</div>
      </div>
      <div class="gszc-enjoy-free">
        <img src="../assets/6.jpg">
        <a
          href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
          class="enjoy-free-btn"
        >
          马上咨询活动享优惠
          <i class="icon-arrow-right"></i>
        </a>
      </div>
    </div>
    <!-- part6 -->
    <div class="gszc-hot">
      <div class="gszc-hot-que">
        <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/2ffdd1f.jpg">
        <div class="hot-que-content">
          <p class="hot-que-title">工商注册热门问题，你都了解吗？</p>
          <div class="hot-que-list">
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
              target="_blank"
              class="hot-que-item"
            >注册公司的流程是什么？</a>
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
              target="_blank"
              class="hot-que-item"
            >注册哪种类型公司更省钱？</a>
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
              target="_blank"
              class="hot-que-item"
            >公司注册资本可以使用吗？</a>
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
              target="_blank"
              class="hot-que-item"
            >注册资金大小什么区别？</a>
          </div>
          <a
            href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
            target="_blank"
            class="hot-que-more"
          >
            点我了解更多热门问题
            <i class="icon-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="gszc-more-service">
        <div class="more-service-title">
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/ed99dc5.png">您可能还需要一下服务
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/ed99dc5.png">
        </div>
        <div class="more-service-content">
          <div class="more-service-item">
            <div class="service-item-content">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E7%A4%BE%E4%BF%9D%E5%BC%80%E6%88%B7.png%2Forigine%2F816fa6c7-94f4-475d-97fd-db69f724bd1b"
              >
              <div class="service-item-name">
                <p class="service-item-title">社保开户</p>
                <p class="service-item-des">快速开户,即办即生效</p>
              </div>
            </div>
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
              target="_blank"
            >查看详情</a>
          </div>
          <div class="more-service-item">
            <div class="service-item-content">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E5%85%AC%E5%8F%B8%E7%BB%8F%E8%90%A5%E5%BF%85%E5%A4%87%E5%90%88%E5%90%8C.png%2Forigine%2F7946baae-cf2e-49eb-b48b-498e6fc8d421"
              >
              <div class="service-item-name">
                <p class="service-item-title">公司经营必备合同</p>
                <p class="service-item-des">创业/股权/用工等合同文书</p>
              </div>
            </div>
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
              target="_blank"
            >查看详情</a>
          </div>
          <div class="more-service-item">
            <div class="service-item-content">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E6%9C%8D%E5%8A%A1%E8%AE%B8%E5%8F%AF%E8%AF%81.png%2Forigine%2F4d1ad054-c4ba-467c-bbfd-a7df6e33734c"
              >
              <div class="service-item-name">
                <p class="service-item-title">人力资源服务许可证</p>
                <p class="service-item-des">人力资源服务机构必备</p>
              </div>
            </div>
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
              target="_blank"
            >查看详情</a>
          </div>
          <div class="more-service-item">
            <div class="service-item-content">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E9%A3%9F%E5%93%81%E7%BB%8F%E8%90%A5%E8%AE%B8%E5%8F%AF%E8%AF%81.png%2Forigine%2Fe4ac666c-ef46-4703-a7d6-5dc7239c40f7"
              >
              <div class="service-item-name">
                <p class="service-item-title">食品经营许可证</p>
                <p class="service-item-des">餐饮及食品销售企业必备</p>
              </div>
            </div>
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
              target="_blank"
            >查看详情</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Toast, MessageBox } from "mint-ui";
import Swiper from "swiper";
export default {
  data() {
    return {
      comName: "",
      mobilePhone: "",
      cityIndustry: "",
      mobilePhone2: "",
      showRename: true
    };
  },
  methods: {
    setName(e) {
      const type = e.currentTarget.dataset.type;
      if (type == "get") {
        this.showRename = false;
      } else {
        this.showRename = true;
      }
    },
    getName(e) {
      const type = e.currentTarget.dataset.type;

      if (!/^1[34578]\d{9}$/.test(this.mobilePhone)) {
        Toast("请输入正确的手机号码");
        return;
      }
      if (type == "get") {
        if (!this.comName || !this.mobilePhone) {
          Toast("公司名或手机号不能为空！");
          return;
        }
        const params = {
          type: "heming",
          phone: this.mobilePhone,
          name: this.comName
        };

        this.$post(params).then(res => {
          if (res.ret == 0) {
            MessageBox(
              "您的核名需求我们已经收到！",
              "请耐心等待，财税顾问会在10分钟内联系您"
            );
            this.mobilePhone = "";
            this.comName = "";
          }
        });
      } else {
        if (!this.cityIndustry || !this.mobilePhone) {
          Toast("公司名或手机号不能为空！");
          return;
        }
        const params = {
          type: "getName",
          phone: this.mobilePhone,
          cityIndustry: this.cityIndustry
        };

        this.$post(params).then(res => {
          if (res.ret == 0) {
            MessageBox(
              "您的核名需求我们已经收到！",
              "请耐心等待，财税顾问会在10分钟内联系您"
            );
            this.cityIndustry = "";
            this.comName = "";
          }
        });
      }
    },
    receiveMaterial() {
      if (!/^1[34578]\d{9}$/.test(this.mobilePhone2)) {
        Toast("请输入正确的手机号码");
        return;
      }
      const params = {
        type: "collectData",
        phone: this.mobilePhone2
      };
      this.$post(params).then(res => {
        if (res.ret == 0) {
          MessageBox(
            "您的核名需求我们已经收到！",
            "请耐心等待，财税顾问会在10分钟内联系您"
          );
          this.mobilePhone2 = "";
        }
      });
    }
  },
  mounted() {
    console.log("44444444");
    var thumbsSwiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      // effect: "coverflow",
      slidesPerView: 3,
      // loop: true,
      autoplay: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows: false
      }
    });
  }
};
</script>

<style scoped>
@import url("../styles/gszc.css");
</style>
