<template>
  <div>
    <div class="block">
      <el-carousel :autoplay="false" height="464px">
        <el-carousel-item
          v-for="item in swiper"
          :key="item"
          :style="{'background-image':'url('+(item)+')'}"
        ></el-carousel-item>
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
                  <div class="account-mask-words-small">八戒财税出错全额赔付</div>
                </div>
              </div>
              <div class="account-mask-hover">
                <div class="account-mask-hover-inner account-mask-hover-inner-back_1">
                  <div class="account-mask-pic_6 account-mask-pic-common">
                    <div class="account-mask-words">出错全额赔付</div>
                    <div class="account-mask-words-small">八戒财税出错全额赔付</div>
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
            <span class="account-price-words">免费获取代账方案及价格</span>
          </div>
        </div>
      </div>
      <div class="makeaccount-popup-chance">
        <div class="el-dialog__wrapper chance-dialog" left style="display: none;">
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
            <div class="el-dialog__footer">
              <div class="ensure">
                <div class="ensure-word">提 交</div>
              </div>
            </div>
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
          <a class="block-btn apply-btn">立即代账</a>
        </div>
      </div>
      <div class="makeaccount-popup-chance">
        <div class="el-dialog__wrapper chance-dialog" left style="display: none;">
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
        <a class="block-btn free-btn">更多问题咨询在线客服</a>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Carousel, CarouselItem } from "element-ui";
Vue.use(Carousel);
Vue.use(CarouselItem);

export default {
  name: "MakeAccount",
  data() {
    return {
      swiper: [
        "https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_15534976942675.png%2Forigine%2F504b21b7-b3e2-4af4-8ab3-996a70874500",
        "https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E4%BB%A3%E8%B4%A6%E4%B8%93%E9%A2%98%E9%A1%B6%E9%83%A8banner2.jpg%2Forigine%2F79e9b531-7953-43c6-8b62-dc17749f18da"
      ]
    };
  }
};
</script>

<style scoped>
@import "../styles/makeaccount.css";
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item {
  width: 100%;
  height: 464px;
  background-size: cover;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>