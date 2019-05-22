<template>
  <div class="zj-makeaccount">
    <div class="block">
      <el-carousel :autoplay="false" height="464px">
        <el-carousel-item
          v-for="item in swiper"
          :key="item"
          :style="{'background-image':'url('+(item)+')'}"
        ></el-carousel-item>
        <div class="search-form-main">
          <div class="search-form">
            <!---->
            <span>
              <div class="choice-btn">
                <el-popover
                  visible-arrow="false"
                  v-model="disabled"
                  placement="bottom-start"
                  width="600"
                  trigger="click"
                >
                  <el-tabs type="border-card">
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
                      <div class="cities el-row">
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
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                  <el-button slot="reference">
                    <input
                      type="text"
                      readonly="readonly"
                      autocomplete="off"
                      :placeholder="city"
                      class="el-input__inner"
                    >
                    <span class="el-input__suffix">
                      <i v-if="disabled" class="btn-icon el-icon-arrow-up"></i>
                      <i v-if="!disabled" class="btn-icon el-icon-arrow-down"></i>
                      <!---->
                      <!---->
                      <!---->
                      <!---->
                    </span>
                  </el-button>
                </el-popover>
              </div>
            </span>
            <input
              type="text"
              placeholder="请输入您的电话号码，获取资深会计团队服务"
              v-model="form.phone"
              class="search-box ph-input"
            >
            <a class="search-btn" @click="open">立即获取</a>
          </div>
        </div>
      </el-carousel>
    </div>
    <!-- part2 -->
    <div class="account-block block-choose">
      <div class="account-adv">
        <div class="account-adv-pic">
          <div class="account-adv_1 account-adv-common">
            <div class="account-mask-fa">
              <div class="account-mask account-mask-back">
                <div class="account-mask-pic_1 account-mask-pic-common">
                  <div class="account-mask-words">避免税务处罚</div>
                  <div class="account-mask-words-small">及时报税、提供税负预警、避免处罚</div>
                </div>
              </div>
              <div class="account-mask-hover">
                <div class="account-mask-hover-inner account-mask-hover-inner-back">
                  <div class="account-mask-pic_1 account-mask-pic-common">
                    <div class="account-mask-words">避免税务处罚</div>
                    <div class="account-mask-words-small">及时报税、提供税负预警、避免处罚</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="account-adv_4 account-adv-common">
            <div class="account-mask-fa">
              <div class="account-mask account-mask-back-1">
                <div class="account-mask-pic_4 account-mask-pic-common">
                  <div class="account-mask-words">资深会计服务</div>
                  <div class="account-mask-words-small">为您解决公司各发展阶段的服务需求</div>
                </div>
              </div>
              <div class="account-mask-hover">
                <div class="account-mask-hover-inner account-mask-hover-inner-back_1">
                  <div class="account-mask-pic_4 account-mask-pic-common">
                    <div class="account-mask-words">资深会计服务</div>
                    <div class="account-mask-words-small">为您解决公司各发展阶段的服务需求</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="account-adv_3 account-adv-common">
            <div class="account-mask-fa">
              <div class="account-mask account-mask-back">
                <div class="account-mask-pic_3 account-mask-pic-common">
                  <div class="account-mask-words">日常财税指导</div>
                  <div class="account-mask-words-small">定期在线培训、税务问题专人解答</div>
                </div>
              </div>
              <div class="account-mask-hover">
                <div class="account-mask-hover-inner account-mask-hover-inner-back">
                  <div class="account-mask-pic_3 account-mask-pic-common">
                    <div class="account-mask-words">日常财税指导</div>
                    <div class="account-mask-words-small">定期在线培训、税务问题专人解答</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="account-adv-pic">
          <div class="account-adv_5 account-adv-common">
            <div class="account-mask-fa">
              <div class="account-mask account-mask-back-1">
                <div class="account-mask-pic_5 account-mask-pic-common">
                  <div class="account-mask-words">手机随时查账</div>
                  <div class="account-mask-words-small">营收情况、应缴税款一目了然</div>
                </div>
              </div>
              <div class="account-mask-hover">
                <div class="account-mask-hover-inner account-mask-hover-inner-back_1">
                  <div class="account-mask-pic_5 account-mask-pic-common">
                    <div class="account-mask-words">手机随时查账</div>
                    <div class="account-mask-words-small">营收情况、应缴税款一目了然</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="account-adv_2 account-adv-common">
            <div class="account-mask-fa">
              <div class="account-mask account-mask-back">
                <div class="account-mask-pic_2 account-mask-pic-common">
                  <div class="account-mask-words">上门取票/代购发票</div>
                  <div class="account-mask-words-small">避免奔波，为您节约每一分钟</div>
                </div>
              </div>
              <div class="account-mask-hover">
                <div class="account-mask-hover-inner account-mask-hover-inner-back">
                  <div class="account-mask-pic_2 account-mask-pic-common">
                    <div class="account-mask-words">上门取票/代购发票</div>
                    <div class="account-mask-words-small">避免奔波，为您节约每一分钟</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="account-adv_6 account-adv-common">
            <div class="account-mask-fa">
              <div class="account-mask account-mask-back-1">
                <div class="account-mask-pic_6 account-mask-pic-common">
                  <div class="account-mask-words">出错全额赔付</div>
                  <div class="account-mask-words-small">骅穗财务出错全额赔付</div>
                </div>
              </div>
              <div class="account-mask-hover">
                <div class="account-mask-hover-inner account-mask-hover-inner-back_1">
                  <div class="account-mask-pic_6 account-mask-pic-common">
                    <div class="account-mask-words">出错全额赔付</div>
                    <div class="account-mask-words-small">骅穗财务出错全额赔付</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- part3 -->
    <div>
      <div class="account-block block-apply">
        <table class="alt-rows-table">
          <tbody>
            <tr class="even-row-color">
              <td>
                <div class="circle">
                  <span class="num">1</span>
                </div>
                <div class="table-words-1">
                  每月代理记账
                  <div class="table-words-small">(整理原始凭证、编制记账凭证等)</div>
                </div>
              </td>
              <td>
                <div class="circle">
                  <span class="num">9</span>
                </div>
                <div class="table-words">年末装订总账明细</div>
              </td>
            </tr>
            <tr class="odd-row-color">
              <td>
                <div class="circle">
                  <span class="num">2</span>
                </div>
                <div class="table-words-1">
                  出具财务报表
                  <div class="table-words-small">(资产负债表、利润表、现金流量表)</div>
                </div>
              </td>
              <td>
                <div class="circle">
                  <span class="num">10</span>
                </div>
                <div class="table-words-1">
                  年度企业所得税汇算清缴
                  <div class="table-words-small">(税务年报)</div>
                </div>
              </td>
            </tr>
            <tr class="even-row-color">
              <td>
                <div class="circle">
                  <span class="num">3</span>
                </div>
                <div class="table-words">财税专家审核</div>
              </td>
              <td>
                <div class="circle">
                  <span class="num">11</span>
                </div>
                <div class="table-words-1">
                  企业组织机构代码证年检
                  <div class="table-words-small">(未三证合一的企业)</div>
                </div>
              </td>
            </tr>
            <tr class="odd-row-color">
              <td>
                <div class="circle">
                  <span class="num">4</span>
                </div>
                <div class="table-words">每月纳税申报</div>
              </td>
              <td>
                <div class="circle">
                  <span class="num">12</span>
                </div>
                <div class="table-words-1">
                  企业工商年报
                  <div class="table-words-small">(签约代账服务满一年送一次)</div>
                </div>
              </td>
            </tr>
            <tr class="even-row-color">
              <td>
                <div class="circle">
                  <span class="num">5</span>
                </div>
                <div class="table-words">税务申报表及时推送</div>
              </td>
              <td>
                <div class="circle">
                  <span class="num">13</span>
                </div>
                <div class="table-words">报送企业年度财务资料给国地税</div>
              </td>
            </tr>
            <tr class="odd-row-color">
              <td>
                <div class="circle">
                  <span class="num">6</span>
                </div>
                <div class="table-words">每月经营月报及时推送</div>
              </td>
              <td>
                <div class="circle">
                  <span class="num">14</span>
                </div>
                <div class="table-words-1">
                  根据企业需求安排专业人员到税务局购买发票
                  <div class="table-words-small">(300份/年，小规模只能购买万元版)</div>
                </div>
              </td>
            </tr>
            <tr class="even-row-color">
              <td>
                <div class="circle">
                  <span class="num">7</span>
                </div>
                <div class="table-words">日常的财税咨询及建议</div>
              </td>
              <td>
                <div class="circle">
                  <span class="num">15</span>
                </div>
                <div class="table-words">每月安排专业人员上门取票，并现场指导财税问题</div>
              </td>
            </tr>
            <tr class="odd-row-color">
              <td>
                <div class="circle">
                  <span class="num">8</span>
                </div>
                <div class="table-words">每月装订凭证</div>
              </td>
              <td>
                <div class="circle">
                  <span class="num">16</span>
                </div>
                <div class="table-words">根据公司经营状况，给予专业的税负预警</div>
              </td>
            </tr>
            <tr class="odd-row-color">
              <td colspan="2">
                <div class="table-words-2">注：服务内容和价格或因地区，政策不同有所区别，具体请联系当地财税顾问。</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="choose-account-plan">
          <div class="account-pic">
            <span class="account-words">A. 无票据来往</span>
          </div>
          <div class="account-pic selected">
            <span class="account-words">B. 0-100万</span>
          </div>
          <div class="account-pic">
            <span class="account-words">C. 100-500万</span>
          </div>
          <div class="account-pic">
            <span class="account-words">D. 500万以上</span>
          </div>
          <div class="account-price">
            <a
              style="background:none"
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              target="_blank"
              class="block-btn apply-btn"
            >
              <span class="account-price-words">免费获取代账方案及价格</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- part4 -->
    <div>
      <div class="account-block block-process">
        <div class="account-process">
          <div class="process-pic-words">
            <div class="process_1 process-common"></div>
            <div class="process_word_1 process_word-common"></div>
            <div class="process_words">与客户进行沟通，根据企业情况提供可选代账套餐</div>
          </div>
          <div class="arrow"></div>
          <div class="process-pic-words">
            <div class="process_2 process-common"></div>
            <div class="process_word_2 process_word-common"></div>
            <div class="process_words">签订协议后，2个工作日内会计联系客户提交相关资料</div>
          </div>
          <div class="arrow"></div>
          <div class="process-pic-words">
            <div class="process_3 process-common"></div>
            <div class="process_word_3 process_word-common"></div>
            <div class="process_words">客户每月通过快递提供企业生产经营相关票据</div>
          </div>
          <div class="arrow"></div>
          <div class="process-pic-words">
            <div class="process_4 process-common"></div>
            <div class="process_word_4 process_word-common"></div>
            <div class="process_words">核算会计逐步记账，审核会计对账务审核把关</div>
          </div>
        </div>
        <div class="account-process">
          <div class="process-pic-words">
            <div class="process_5 process-common"></div>
            <div class="process_word_5 process_word-common"></div>
            <div class="process_words">对增值税、附加税、个税、企业所得税等进行申报</div>
          </div>
          <div class="arrow"></div>
          <div class="process-pic-words">
            <div class="process_6 process-common"></div>
            <div class="process_word_6 process_word-common"></div>
            <div class="process_words">包含企业资产负债表、利润表、现金流量表、总账、明细账等</div>
          </div>
          <div class="arrow"></div>
          <div class="process-pic-words">
            <div class="process_7 process-common"></div>
            <div class="process_word_7 process_word-common"></div>
            <div class="process_words">通过微信端"易查账"功能，可查看公司账务情况、注册进度等</div>
          </div>
          <div class="arrow"></div>
          <div class="process-pic-words">
            <div class="process_8 process-common"></div>
            <div class="process_word_8 process_word-common"></div>
            <div class="process_words">由专业会计为您免费提供日常财税咨询，解决相关问题</div>
          </div>
        </div>
        <div class="account-process">
          <a
            href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
            target="_blank"
            class="block-btn apply-btn"
          >立即代账</a>
        </div>
      </div>
      <div class="makeaccount-popup-chance">
        <div class="el-dialog__wrapper chance-dialog" style="display: none;">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="dialog"
            class="el-dialog"
            style="margin-top: 15vh;"
          >
            <div class="el-dialog__header">
              <div class="makeaccount-popup-title">
                <span class="title-icon">
                  <i class="icon-Bookkeeping"></i>
                </span>
                <span class="title-word"></span>
              </div>
              <button type="button" aria-label="Close" class="el-dialog__headerbtn">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
            </div>
            <!---->
            <div class="el-dialog__footer">
              <div class="ensure">
                <div class="ensure-word">提 交</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- part5 -->
    <div>
      <div class="account-block block-free">
        <!-- <img src="http://as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/a465c74.jpg" alt> -->
        <a
          href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
          target="_blank"
          class="block-btn free-btn"
        >更多问题咨询在线客服</a>
      </div>
    </div>
    <!-- part6 -->
    <div class="parters">
      <div class="makeaccount">
        <el-carousel indicator-position="none" :interval="4000" type="card" height="270px">
          <el-carousel-item v-for="item in swiper2" :key="item">
            <img :src="item" alt>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="popup-chance">
      <el-dialog title :visible.sync="dialogFormVisible">
        <div slot="title">
          <div class="makeaccount-popup-title">
            <span class="title-icon">
              <i class="icon-Bookkeeping"></i>
            </span>
            <span class="title-word">享受无忧代账</span>
          </div>
        </div>
        <el-form :model="form">
          <div class="layout">
            <div class="query-people">
              已有
              <span class="query-num">201909</span>人正在免费体验中
            </div>
          </div>
          <div class="layout">
            <el-form-item :label-width="formLabelWidth">
              <div class="chance">
                <span class="chance-word">联系人：</span>
              </div>
              <div class="chance-input">
                <el-input v-model="form.name" autocomplete="off" placeholder="如：吴先生"></el-input>
              </div>
            </el-form-item>
          </div>
          <div class="layout">
            <el-form-item :label-width="formLabelWidth">
              <div class="chance">
                <span class="chance-word">
                  <i>*</i>手机号码：
                </span>
              </div>
              <div class="chance-input">
                <el-input v-model="form.phone" autocomplete="off" placeholder="输入电话号码，七天无理由退款"></el-input>
              </div>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <div class="ensure" @click="searchResister">
            <div class="ensure-word">提交</div>
          </div>
        </div>
      </el-dialog>
      <!---->
    </div>
    <m-modal v-if="success" @getStatus="getStatus"></m-modal>
  </div>
</template>
<script>
import Vue from "vue";
import { Carousel, CarouselItem } from "element-ui";
import mModal from "../components/Modal";

Vue.use(Carousel);
Vue.use(CarouselItem);

export default {
  name: "MakeAccount",
  components: {
    mModal
  },
  data() {
    return {
      form: {
        name: "",
        contact: "",
        phone: ""
      },
      success: false,
      formLabelWidth: "25",
      disabled: false,
      dialogFormVisible: false,
      visible: false,
      city: "广州市",
      swiper: [
        "https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_15534976942675.png%2Forigine%2F504b21b7-b3e2-4af4-8ab3-996a70874500",
        "https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E4%BB%A3%E8%B4%A6%E4%B8%93%E9%A2%98%E9%A1%B6%E9%83%A8banner2.jpg%2Forigine%2F79e9b531-7953-43c6-8b62-dc17749f18da"
      ],
      swiper2: [
        "https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E6%9D%AD%E5%B7%9E%E6%94%B9.jpg%2Forigine%2F1724a339-cdc1-47ff-953f-2b68c79ae9a4",
        "https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E5%8D%97%E4%BA%AC.jpg%2Forigine%2F16a43621-b4fc-491a-ab4a-8324b0dd7411",
        "https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E6%B7%B1%E5%9C%B3.jpg%2Forigine%2F65c36881-88d9-43b9-b3d3-9633e5c941a5"
      ]
    };
  },
  methods: {
    getStatus(res) {
      this.success = false;
    },

    choiceCity(e) {
      this.city = e.target.dataset.city;
      this.disabled = false;
    },
    open() {
      this.dialogFormVisible = true;
    },
    searchResister() {
      // const params = {
      //   type: "mackaccount",
      //   phone: this.userPhone,
      //   name: this.companyName,
      //   province: this.myAddressProvince,
      //   city: this.myAddressCity
      // };
      const { name, phone } = this.form;
      if (!phone) {
        this.$message({
          message: "请填写联系方式！",
          type: "warning"
        });
        return;
      }

      if (!/^1[34578]\d{9}$/.test(phone)) {
        this.$message({
          message: "请输入正确的手机号码！",
          type: "warning"
        });
        return;
      }
      const params = {
        type: "mackaccount",
        phone: phone,
        province: "",
        city: this.city,
        name: name
      };

      this.$post(params).then(res => {
        if (res.ret == 0) {
          this.success = true;
          this.name = ""; //企业名
          this.phone = ""; //手机号
          this.city = "东城区";
          this.dialogFormVisible = false;
        }
      });
    }
  }
};
</script>

<style scoped>
@import "../styles/makeaccount.css";

.block .el-carousel__item {
  width: 100%;
  background-size: cover;
  background-position: center;
}
.block .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.block .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>