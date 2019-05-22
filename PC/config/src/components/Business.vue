<template>
  <div class="zt-business">
    <div
      class="el-carousel__item is-active is-animating"
      style="transform: translateX(0px) scale(1);"
    >
      <!---->
      <div
        class="header-back"
        style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2F1.banner_02.jpg%2Forigine%2F56663bbd-deb7-45cc-bca9-0e570e372f97&quot;);position:absolute"
      >
        <div class="search-form-main">
          <div class="search-form">
            <!---->
            <span>
              <div class="choice-btn">
                <el-button slot="reference" @click="showCity">{{city}}</el-button>
              </div>
            </span>
            <input
              type="text"
              placeholder="请输入查询公司名称，例 ：重庆猪八戒网络有限公司"
              v-model="userPhone"
              class="search-box ph-input"
            >
            <a class="search-btn" @click="open">免费查询能否注册</a>
          </div>
        </div>
      </div>
    </div>

    <div class="search-part">
      <div class="search-part-block">
        <ul>
          <li class="search-part-item">
            <div class="search-part-box">
              <h3>免费查询</h3>
              <div class="single-line"></div>
              <p class="item-text">轻轻一点即可</p>
              <p class="item-word">知晓查询结果</p>
              <p>不产生费用</p>
              <div class="search-part-pic search-part-free-pic"></div>
            </div>
          </li>
          <li class="search-part-item">
            <div class="search-part-box">
              <h3>人工查询</h3>
              <div class="single-line"></div>
              <p class="item-text">结果更精准</p>
              <p class="item-word">注册成功率更高</p>
              <div class="search-part-pic search-part--rengong-pic"></div>
            </div>
          </li>
          <li class="search-part-item">
            <div class="search-part-box">
              <h3>急速响应</h3>
              <div class="single-line"></div>
              <p class="item-text">提交申请后</p>
              <p class="item-word">10分钟内</p>
              <p>告知查询结果</p>
              <div class="search-part-pic search-part-quick-pic"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="why-select"></div>
    <div class="service-intro">
      <a href class="get-price"></a>
    </div>
    <div class="register-step"></div>
    <div class="common-help">
      <div class="more-problem">
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371" target="_blank"></a>
      </div>
    </div>
    <div class="other-service">
      <ul class="service-list">
        <li
          class="service-item"
          style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E5%B7%A5%E5%95%86%E6%B3%A8%E5%86%8C%E4%B8%93%E9%A2%98%E5%8F%98%E6%9B%B4%E6%9C%8D%E5%8A%A1.jpg%2Forigine%2F1b17b90a-7929-4805-945c-8c383c206815&quot;);"
        >
          <a
            href="https://webchat.7moor.com/wapchat.html?accessId=0f85f790-630e-11e8-8844-e5960d00251a&amp;fromUrl=https%3A%2F%2Fcs.zbj.com%2Fbusiness%2F&amp;urlTitle=公司注册-开办公司-无地址注册公司找「八戒财税」"
            target="_blank"
          ></a>
        </li>
        <li
          class="service-item"
          style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E5%B7%A5%E5%95%86%E6%B3%A8%E5%86%8C%E4%B8%93%E9%A2%98%E4%BB%A3%E5%BC%80%E7%A5%A8.jpg%2Forigine%2F1357789f-fa05-4029-911b-9a1b0212d040&quot;);"
        >
          <a
            href="https://webchat.7moor.com/wapchat.html?accessId=0f85f790-630e-11e8-8844-e5960d00251a&amp;fromUrl=https%3A%2F%2Fcs.zbj.com%2Fbusiness%2F&amp;urlTitle=公司注册-开办公司-无地址注册公司找「八戒财税」"
            target="_blank"
          ></a>
        </li>
        <li
          class="service-item"
          style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E5%B7%A5%E5%95%86%E6%B3%A8%E5%86%8C%E4%B8%93%E9%A2%98%E4%BB%A3%E8%B4%A6.jpg%2Forigine%2Ff0110bac-4d6d-4691-b894-28498b6db20c&quot;);"
        >
          <a href="/#/dljz" target="_blank"></a>
        </li>
        <li
          class="service-item"
          style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E9%A6%99%E6%B8%AF%E6%B3%A8%E5%86%8C.jpg%2Forigine%2Fbbeebfdc-38d2-4b13-af62-3870fea439e5&quot;);"
        >
          <a
            href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371" target="_blank"
            target="_blank"
          ></a>
        </li>
      </ul>
    </div>
    <div class="popup-chance">
      <div class="el-dialog__wrapper chance-dialog" left style="display: none;">
        <div
          role="dialog"
          aria-modal="true"
          aria-label="dialog"
          class="el-dialog"
          style="margin-top: 15vh;"
        >
          <div class="el-dialog__header">
            <div class="chance-dialog-title">
              <span class="chancel-dialog-title-icon">
                <i class="icon-inquire"></i>
              </span>
              <span class="chancel-dialog-title-box">
                <span class="chancel-dialog-title-word"></span>
                <span class="sub-title">专业顾问人工查询，10分钟内精准回复</span>
              </span>
            </div>
            <button type="button" aria-label="Close" class="el-dialog__headerbtn">
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
          <!---->
          <div class="el-dialog__footer">
            <div class="ensure">
              <div class="ensure-word">获取查询结果</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="https://zt.zbj.com/dist/20180521-5002589/icp.html?cssource=csgshd_icp">
      <div
        class="header-back"
        style="background-image: url(&quot;https://caishui.zbjimg.com/caishui%2Fcaishui%2FICPbanner%E6%8B%B7%E8%B4%9D.jpg%2Forigine%2Fea243541-76fe-490a-ba35-3f155689bf3b&quot;);"
      ></div>
    </a>
    <el-popover
      visible-arrow
      v-model="visible"
      placement="right"
      width="600"
      trigger="click"
      style="top:519px"
      popper-class="cs-common-city-select-panel"
    >
      <el-tabs type="border-card" class="cate">
        <el-tab-pane label="ABCDE">
          <div class="cities el-row">
            <div class="city-wrapper clear">
              <div class="city-letter">A</div>
              <ul class="city-items clear">
                <li data-city="安康市" @click="choiceCity">安康市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">B</div>
              <ul class="city-items clear">
                <li data-city="巴中市" @click="choiceCity">巴中市</li>
                <li data-city="保定市" @click="choiceCity">保定市</li>
                <li data-city="巴音郭楞蒙古自治州" @click="choiceCity">巴音郭楞蒙古自治州</li>
                <li data-city="白山市" @click="choiceCity">白山市</li>
                <li data-city="北京市" @click="choiceCity">北京市</li>
                <li data-city="亳州市" @click="choiceCity">亳州市</li>
                <li data-city="宝鸡市" @click="choiceCity">宝鸡市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">C</div>
              <ul class="city-items clear">
                <li data-city="长春市" @click="choiceCity">长春市</li>
                <li data-city="承德市" @click="choiceCity">承德市</li>
                <li data-city="滁州市" @click="choiceCity">滁州市</li>
                <li data-city="沧州市" @click="choiceCity">沧州市</li>
                <li data-city="重庆市" @click="choiceCity">重庆市</li>
                <li data-city="成都市" @click="choiceCity">成都市</li>
                <li data-city="常州市" @click="choiceCity">常州市</li>
                <li data-city="楚雄彝族自治州" @click="choiceCity">楚雄彝族自治州</li>
                <li data-city="长沙市" @click="choiceCity">长沙市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">D</div>
              <ul class="city-items clear">
                <li data-city="达州市" @click="choiceCity">达州市</li>
                <li data-city="德阳市" @click="choiceCity">德阳市</li>
                <li data-city="东莞市" @click="choiceCity">东莞市</li>
                <li data-city="大同市" @click="choiceCity">大同市</li>
                <li data-city="大连市" @click="choiceCity">大连市</li>
                <li data-city="德州市" @click="choiceCity">德州市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">E</div>
              <ul class="city-items clear">
                <li data-city="鄂尔多斯市" @click="choiceCity">鄂尔多斯市</li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="FGHJ">
          <div class="cities el-row">
            <div class="city-wrapper clear">
              <div class="city-letter">F</div>
              <ul class="city-items clear">
                <li data-city="佛山市" @click="choiceCity">佛山市</li>
                <li data-city="福州市" @click="choiceCity">福州市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">G</div>
              <ul class="city-items clear">
                <li data-city="广州市" @click="choiceCity">广州市</li>
                <li data-city="赣州市" @click="choiceCity">赣州市</li>
                <li data-city="贵阳市" @click="choiceCity">贵阳市</li>
                <li data-city="桂林市" @click="choiceCity">桂林市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">H</div>
              <ul class="city-items clear">
                <li data-city="衡阳市" @click="choiceCity">衡阳市</li>
                <li data-city="呼和浩特市" @click="choiceCity">呼和浩特市</li>
                <li data-city="杭州市" @click="choiceCity">杭州市</li>
                <li data-city="衡水市" @click="choiceCity">衡水市</li>
                <li data-city="怀化市" @click="choiceCity">怀化市</li>
                <li data-city="哈尔滨市" @click="choiceCity">哈尔滨市</li>
                <li data-city="呼伦贝尔市" @click="choiceCity">呼伦贝尔市</li>
                <li data-city="黄冈市" @click="choiceCity">黄冈市</li>
                <li data-city="黄石市" @click="choiceCity">黄石市</li>
                <li data-city="湖州市" @click="choiceCity">湖州市</li>
                <li data-city="汉中市" @click="choiceCity">汉中市</li>
                <li data-city="合肥市" @click="choiceCity">合肥市</li>
                <li data-city="邯郸市" @click="choiceCity">邯郸市</li>
                <li data-city="惠州市" @click="choiceCity">惠州市</li>
                <li data-city="淮安市" @click="choiceCity">淮安市</li>
                <li data-city="海口市" @click="choiceCity">海口市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">J</div>
              <ul class="city-items clear">
                <li data-city="景德镇市" @click="choiceCity">景德镇市</li>
                <li data-city="江门市" @click="choiceCity">江门市</li>
                <li data-city="荆州市" @click="choiceCity">荆州市</li>
                <li data-city="济南市" @click="choiceCity">济南市</li>
                <li data-city="济宁市" @click="choiceCity">济宁市</li>
                <li data-city="荆门市" @click="choiceCity">荆门市</li>
                <li data-city="锦州市" @click="choiceCity">锦州市</li>
                <li data-city="吉安市" @click="choiceCity">吉安市</li>
                <li data-city="九江市" @click="choiceCity">九江市</li>
                <li data-city="酒泉市" @click="choiceCity">酒泉市</li>
                <li data-city="嘉兴市" @click="choiceCity">嘉兴市</li>
                <li data-city="金华市" @click="choiceCity">金华市</li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="KLMNP">
          <div class="cities el-row">
            <div class="city-wrapper clear">
              <div class="city-letter">K</div>
              <ul class="city-items clear">
                <li data-city="昆明市" @click="choiceCity">昆明市</li>
                <li data-city="开封市" @click="choiceCity">开封市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">L</div>
              <ul class="city-items clear">
                <li data-city="拉萨市" @click="choiceCity">拉萨市</li>
                <li data-city="临沂市" @click="choiceCity">临沂市</li>
                <li data-city="凉山彝族自治州" @click="choiceCity">凉山彝族自治州</li>
                <li data-city="六盘水市" @click="choiceCity">六盘水市</li>
                <li data-city="柳州市" @click="choiceCity">柳州市</li>
                <li data-city="连云港市" @click="choiceCity">连云港市</li>
                <li data-city="漯河市" @click="choiceCity">漯河市</li>
                <li data-city="洛阳市" @click="choiceCity">洛阳市</li>
                <li data-city="廊坊市" @click="choiceCity">廊坊市</li>
                <li data-city="聊城市" @click="choiceCity">聊城市</li>
                <li data-city="泸州市" @click="choiceCity">泸州市</li>
                <li data-city="六安市" @click="choiceCity">六安市</li>
              </ul>
            </div>
            <!---->
            <div class="city-wrapper clear">
              <div class="city-letter">N</div>
              <ul class="city-items clear">
                <li data-city="南昌市" @click="choiceCity">南昌市</li>
                <li data-city="宁波市" @click="choiceCity">宁波市</li>
                <li data-city="南宁市" @click="choiceCity">南宁市</li>
                <li data-city="南通市" @click="choiceCity">南通市</li>
                <li data-city="南阳市" @click="choiceCity">南阳市</li>
                <li data-city="南京市" @click="choiceCity">南京市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">P</div>
              <ul class="city-items clear">
                <li data-city="普洱市" @click="choiceCity">普洱市</li>
                <li data-city="濮阳市" @click="choiceCity">濮阳市</li>
                <li data-city="平顶山市" @click="choiceCity">平顶山市</li>
                <li data-city="莆田市" @click="choiceCity">莆田市</li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="QRSTW">
          <div class="cities el-row">
            <div class="city-wrapper clear">
              <div class="city-letter">Q</div>
              <ul class="city-items clear">
                <li data-city="衢州市" @click="choiceCity">衢州市</li>
                <li data-city="曲靖市" @click="choiceCity">曲靖市</li>
                <li data-city="青岛市" @click="choiceCity">青岛市</li>
                <li data-city="泉州市" @click="choiceCity">泉州市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">R</div>
              <ul class="city-items clear">
                <li data-city="日照市" @click="choiceCity">日照市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">S</div>
              <ul class="city-items clear">
                <li data-city="沈阳市" @click="choiceCity">沈阳市</li>
                <li data-city="石家庄市" @click="choiceCity">石家庄市</li>
                <li data-city="随州市" @click="choiceCity">随州市</li>
                <li data-city="四平市" @click="choiceCity">四平市</li>
                <li data-city="深圳市" @click="choiceCity">深圳市</li>
                <li data-city="上饶市" @click="choiceCity">上饶市</li>
                <li data-city="商丘市" @click="choiceCity">商丘市</li>
                <li data-city="上海市" @click="choiceCity">上海市</li>
                <li data-city="遂宁市" @click="choiceCity">遂宁市</li>
                <li data-city="绍兴市" @click="choiceCity">绍兴市</li>
                <li data-city="苏州市" @click="choiceCity">苏州市</li>
                <li data-city="三门峡市" @click="choiceCity">三门峡市</li>
                <li data-city="汕头市" @click="choiceCity">汕头市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">T</div>
              <ul class="city-items clear">
                <li data-city="台州市" @click="choiceCity">台州市</li>
                <li data-city="天津市" @click="choiceCity">天津市</li>
                <li data-city="泰安市" @click="choiceCity">泰安市</li>
                <li data-city="太原市" @click="choiceCity">太原市</li>
                <li data-city="天水市" @click="choiceCity">天水市</li>
                <li data-city="铁岭市" @click="choiceCity">铁岭市</li>
              </ul>
            </div>
            <div class="city-wrapper clear">
              <div class="city-letter">W</div>
              <ul class="city-items clear">
                <li data-city="武汉市" @click="choiceCity">武汉市</li>
                <li data-city="潍坊市" @click="choiceCity">潍坊市</li>
                <li data-city="乌鲁木齐市" @click="choiceCity">乌鲁木齐市</li>
                <li data-city="温州市" @click="choiceCity">温州市</li>
                <li data-city="威海市" @click="choiceCity">威海市</li>
                <li data-city="芜湖市" @click="choiceCity">芜湖市</li>
                <li data-city="无锡市" @click="choiceCity">无锡市</li>
                <li data-city="文山壮族苗族自治州" @click="choiceCity">文山壮族苗族自治州</li>
                <li data-city="乌兰察布市" @click="choiceCity">乌兰察布市</li>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="XYZ">
          <div class="city-wrapper clear">
            <div class="city-letter">X</div>
            <ul class="city-items clear">
              <li data-city="邢台市" @click="choiceCity">邢台市</li>
              <li data-city="襄阳市" @click="choiceCity">襄阳市</li>
              <li data-city="许昌市" @click="choiceCity">许昌市</li>
              <li data-city="西宁市" @click="choiceCity">西宁市</li>
              <li data-city="西安市" @click="choiceCity">西安市</li>
              <li data-city="湘潭市" @click="choiceCity">湘潭市</li>
              <li data-city="信阳市" @click="choiceCity">信阳市</li>
              <li data-city="咸阳市" @click="choiceCity">咸阳市</li>
              <li data-city="西双版纳傣族自治州" @click="choiceCity">西双版纳傣族自治州</li>
              <li data-city="宣城市" @click="choiceCity">宣城市</li>
              <li data-city="徐州市" @click="choiceCity">徐州市</li>
              <li data-city="厦门市" @click="choiceCity">厦门市</li>
            </ul>
          </div>
          <div class="city-wrapper clear">
            <div class="city-letter">Y</div>
            <ul class="city-items clear">
              <li data-city="延边朝鲜族自治州" @click="choiceCity">延边朝鲜族自治州/市</li>
              <li data-city="盐城市" @click="choiceCity">盐城市</li>
              <li data-city="扬州市" @click="choiceCity">扬州市</li>
              <li data-city="运城市" @click="choiceCity">运城市</li>
              <li data-city="玉溪市" @click="choiceCity">玉溪市</li>
              <li data-city="益阳市" @click="choiceCity">益阳市</li>
              <li data-city="银川市" @click="choiceCity">银川市</li>
              <li data-city="宜昌市" @click="choiceCity">宜昌市</li>
              <li data-city="宜春市" @click="choiceCity">宜春市</li>
              <li data-city="伊犁哈萨克自治州" @click="choiceCity">伊犁哈萨克自治州/市</li>
              <li data-city="烟台市" @click="choiceCity">烟台市</li>
              <li data-city="宜宾市" @click="choiceCity">宜宾市</li>
            </ul>
          </div>
          <div class="city-wrapper clear">
            <div class="city-letter">Z</div>
            <ul class="city-items clear">
              <li data-city="自贡市" @click="choiceCity">自贡市</li>
              <li data-city="周口市" @click="choiceCity">周口市</li>
              <li data-city="郑州市" @click="choiceCity">郑州市</li>
              <li data-city="遵义市" @click="choiceCity">遵义市</li>
              <li data-city="淄博市" @click="choiceCity">淄博市</li>
              <li data-city="中山市" @click="choiceCity">中山市</li>
              <li data-city="珠海市" @click="choiceCity">珠海市</li>
              <li data-city="株洲市" @click="choiceCity">株洲市</li>
              <li data-city="镇江市" @click="choiceCity">镇江市</li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      city: "选择城市",
      userPhone: ""
    };
  },
  methods: {
    showCity() {
      if (this.visible) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    },
    choiceCity(e) {
      console.log(e.target.dataset);
      this.city = e.target.dataset.city;
      this.visible = false;
    },
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
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
  }
};
</script>
<style scoped>
@import "../styles/business.css";
</style>
