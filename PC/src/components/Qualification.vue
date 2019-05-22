<template>
  <div>
    <div class="header">
      <div class="zzbl-banner">
        <el-carousel :autoplay="false" height="464px" arrow="never">
          <el-carousel-item
            v-for="item in swiper"
            :key="item"
            :style="{'background-image':'url('+(item)+')'}"
          ></el-carousel-item>
        </el-carousel>
        <div class="form-info">
          <h3>获取资质报价</h3>
          <h4>人工核价更精准，无隐形收费</h4>
          <div class="el-input el-input--prefix">
            <!---->
            <input
              type="text"
              autocomplete="off"
              placeholder="请输入所需资质"
              v-model="job"
              class="el-input__inner"
            >
            <span class="el-input__prefix">
              <i class="el-input__icon icon-guide"></i>
              <!---->
            </span>
            <!---->
            <!---->
          </div>
          <div class="el-input el-input--prefix">
            <!---->
            <input
              type="text"
              autocomplete="off"
              v-model="telphone"
              placeholder="请输入您的手机号码"
              class="el-input__inner"
            >
            <span class="el-input__prefix">
              <i class="el-input__icon icon-telephone2"></i>
              <!---->
            </span>
            <!---->
            <!---->
          </div>
          <button @click="receivePrice" type="button" class="el-button form-btn el-button--default">
            <!---->
            <!---->
            <span>免费获取报价</span>
          </button>
        </div>
      </div>
      <!-- part2 -->
      <div class="zzbl-banner-bottom">
        <div class="zbj-grid-1200">
          <div class="bottom-item bottom-item1">
            <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/9b324d3.png">
            <div class="item-content-des">
              <p class="des-blue">速度更快</p>
              <p class="des-orange">绿色通道，提速20%</p>
            </div>
            <div class="des-border"></div>
          </div>
          <div class="bottom-item bottom-item2">
            <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/0affc14.png">
            <div class="item-content-des">
              <p class="des-blue">通过率更高</p>
              <p class="des-orange">首次 98.6%</p>
            </div>
            <div class="des-border"></div>
          </div>
          <div class="bottom-item bottom-item3">
            <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/d9614cb.png">
            <div class="item-content-des">
              <p class="des-blue">价格更真</p>
              <p class="des-orange">没有隐形收费</p>
            </div>
            <div class="des-border"></div>
          </div>
          <div class="bottom-item bottom-item4">
            <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/153d82b.png">
            <div class="item-content-des">
              <p class="des-blue">覆盖更广</p>
              <p class="des-orange">重点城市全覆盖</p>
            </div>
            <div class="des-border"></div>
          </div>
          <div class="bottom-item bottom-item5">
            <img src="//as.zbjimg.com/static/nodejs-caishui-pc-web/client/img/bc372aa.png">
            <div class="item-content-des">
              <p class="des-blue">十年品牌</p>
              <p class="des-orange">骅穗旗下网站</p>
            </div>
          </div>
        </div>
      </div>
      <!-- part3 -->
      <div class="zzbl-banner-select" id="zzbl-banner-select">
        <div class="zbj-grid-1200">
          <div class="zzbl-select-title">
            <h2>高效的人 会选择这里</h2>
            <span>节约时间成本，专注自身业务及公司管理</span>
          </div>
        </div>
      </div>
    </div>
    <div id="content">
      <!-- part4 -->
      <div id="hot" name="hot" class="item hot">
        <div class="hot-title">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAXCAMAAACVt1cFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURUdwTP92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv////+hiv/w7f+1o//g2f/PxW8+KaQAAAAZdFJOUwB/kPks/dcGlfy7KviPlI7z1CvYCb3W+pihNNj6AAAAuElEQVQ4y5XT2RKCMAwFUERWQXHXpKX8/1+SLqDjlJrcByiZnBmgTZZRuqHqIZ3+OXTZkvpUAifl+x7AAbh51E40wE9jQdEKRFuQOIIkOYkqrBWiotuI2j1qRLuiqo/yXRcS+5gYl75fcSYBMYFfV7W222yICTGUxrTwIWHQuBrixBQ6CP1PrG9lxOLzHYopVPJfJfcDYmJjz22/gaiQnSuQnl0nRPPhhWAGg2DPucvOj/o1v73YZAb7lWZGy5qbSAAAAABJRU5ErkJggg=="
          >
          <h2>热门资质类型</h2>
          <span>热门行业全覆盖，办理更快价更低</span>
        </div>
        <div class="hot-scroll">
          <ul class="hot-content">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <li class="hot-item">
                    <div>
                      <div class="item-pic">
                        <img
                          src="https://caishui.zbjimg.com/caishui%2Fcaishui%2Ftopic3_15.jpg%2Forigine%2Ff57f6adc-68ed-4c49-8a84-304f8d627dad"
                        >
                        <img
                          src="https://bgl.zbjimg.com/bgl%2Fbjclound%2Ftopic3-click_15.jpg%2Forigine%2F0e69146c-2969-44ab-9cfc-4f2a3e740563?imageMogr2/auto-orient/strip/quality/90"
                          alt
                        >
                      </div>
                      <div class="no-active-content">
                        <h3>广播电视制作经营许可证</h3>
                        <p>涉及广播电视节目相关制作/节目版权交易/代理交易的行为，必须办理《广播电视节目经营许可证》</p>
                        <a
                          href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                          target="_blank"
                        >查看更多</a>
                      </div>
                    </div>
                  </li>
                </div>
                <div class="swiper-slide">
                  <li class="hot-item">
                    <div>
                      <div class="item-pic">
                        <img
                          src="https://caishui.zbjimg.com/caishui%2Fcaishui%2Ftopic3_17.jpg%2Forigine%2Fd4f2cc84-975d-4d7d-8ebe-34760a4f5450"
                        >
                        <img
                          src="https://bgl.zbjimg.com/bgl%2Fbjclound%2Ftopic3-click_17.jpg%2Forigine%2F8f552288-2154-4505-9d8a-4c440f790acc?imageMogr2/auto-orient/strip/quality/90"
                          alt
                        >
                      </div>
                      <div class="no-active-content">
                        <h3>网络文化经营许可证</h3>
                        <p>简称文网文，凡从事经营性互联网文化活动的互联网信息服务提供者，都必须进行此项审批，否则属于非法经营</p>
                        <a
                          href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                          target="_blank"
                        >查看更多</a>
                      </div>
                    </div>
                  </li>
                </div>
                <div class="swiper-slide">
                  <li class="hot-item">
                    <div style>
                      <div class="item-pic">
                        <img
                          src="https://caishui.zbjimg.com/caishui%2Fcaishui%2Ftopic3_19.jpg%2Forigine%2Feaec7e75-1428-41d9-853f-ab122bbfce68"
                        >
                        <img
                          src="https://bgl.zbjimg.com/bgl%2Fbjclound%2Ftopic3-click_19.jpg%2Forigine%2Ffdf490f3-4642-4c72-9bed-a61ceb3b92db?imageMogr2/auto-orient/strip/quality/90"
                          alt
                        >
                      </div>
                      <div class="no-active-content">
                        <h3>ICP许可证</h3>
                        <p>通过互联网提供信息获得盈利的网站，必须办理ICP证，否则属于非法经营</p>
                        <a
                          href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                          target="_blank"
                        >查看更多</a>
                      </div>
                    </div>
                  </li>
                </div>
                <div class="swiper-slide">
                  <li class="hot-item">
                    <div style>
                      <div class="item-pic">
                        <img
                          src="https://caishui.zbjimg.com/caishui%2Fcaishui%2Ftopic3_21.jpg%2Forigine%2F10d0d816-f5b8-4f5a-9fd9-1ffac4ed1c91"
                        >
                        <img
                          src="https://bgl.zbjimg.com/bgl%2Fbjclound%2Ftopic3-click_21.jpg%2Forigine%2Fba72f0c0-a7f4-4406-bd03-bb983d749131?imageMogr2/auto-orient/strip/quality/90"
                        >
                      </div>
                      <div class="no-active-content">
                        <h3>网络游戏资质</h3>
                        <p>凡是运营网络游戏的公司必须办理相应的网游运营资质，否则将被强制停运和罚款</p>
                        <a
                          href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                          target="_blank"
                        >查看更多</a>
                      </div>
                    </div>
                  </li>
                </div>
                <div class="swiper-slide">
                  <li class="hot-item">
                    <div style>
                      <div class="item-pic">
                        <img
                          src="https://caishui.zbjimg.com/caishui%2Fcaishui%2Ftopic3_23.jpg%2Forigine%2F0b5cc645-4289-440b-a50f-4c8ef214c252"
                        >
                        <img
                          src="https://bgl.zbjimg.com/bgl%2Fbjclound%2Ftopic3-click_23.jpg%2Forigine%2Fec8f5e4d-1f9b-44da-879e-9e632f6c120d?imageMogr2/auto-orient/strip/quality/90"
                          alt
                        >
                      </div>
                      <div class="no-active-content">
                        <h3>建筑行业资质</h3>
                        <p>凡是建筑、市政、装修、土木等建筑工程项目，必须具备相应资质才可承担</p>
                        <a
                          href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                          target="_blank"
                        >查看更多</a>
                      </div>
                    </div>
                  </li>
                </div>
                <div class="swiper-slide">
                  <li class="hot-item">
                    <div>
                      <div class="item-pic">
                        <img
                          src="https://caishui.zbjimg.com/caishui%2Fcaishui%2Ftopic3_25.jpg%2Forigine%2F027f66db-5ba0-4af4-843f-53dd7fc42a97"
                        >
                        <img
                          src="https://bgl.zbjimg.com/bgl%2Fbjclound%2Ftopic3-click_25.jpg%2Forigine%2Ff40170ab-a728-4dff-8d92-2d00ad22f549?imageMogr2/auto-orient/strip/quality/90"
                          alt
                        >
                      </div>
                      <div class="no-active-content">
                        <h3>食品经营许可证</h3>
                        <p>涉及食品经营企业和食品商贩,必须先取得食品经营许可证</p>
                        <a
                          href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                          target="_blank"
                        >查看更多</a>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <!-- part5 -->
      <div id="architecture" name="architecture" class="item construct-industry">
        <div class="construct-title">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAXCAMAAACVt1cFAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUdwTP92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv92Tv////92Tv/Pxf+hiv/g2f+1o//w7cgu9VwAAAAVdFJOUwAq+P38j5TXBvmOK7uVgH8JvSzWmFeHN0IAAAD/SURBVDjLlZTnFoMgDIXds7sNYbz/ezYEZLRq7f2h52C+mwCJRUEqp74S+6qeU1ksGrpaHFH9unngJI7qPjBxzhaN3EM6C8xNuqQAUgTAZEQzE9HmLg4B7YEg79MS0YsvRCBH0BOUXdIxVU/EmIYjhRgpweZA9jbsEWobiUjDEdnUOGvnDksmp4xQoJkgTzQZoTcIKt4SdhMuiKORq8M1QlK1RKD9bEkVzWWsLCW8P/tJd8aJ1nIgOeJSgLIvj7HB6j5CBgGod3KMydUt5for3sgR75z3ofhMjdgh8r4yaRdtVPVoNns79F+e42M+funPGfTE4TlnXd2oH/iXBF3eCmVY24T8LXIAAAAASUVORK5CYII="
          >
          <h2>行业必备资质</h2>
          <span>拿证快人一步，助力企业新突破</span>
        </div>
        <div class="construct-content zbj-grid-1200">
          <div class="content-left">
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              target="_blank"
              class="left-more-btn"
            >查看更多业务</a>
          </div>
          <ul class="content-right">
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <div class="item-img small-pic">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_09.jpg%2Forigine%2Fdabe81ff-3989-4fc3-b1e3-eb1be5fd6e09"
                  >
                </div>
                <div class="construct-content-des">
                  <div class="content-des-title">建筑施工总承包资质</div>
                  <div class="content-des-co">资质办理/增项/升级/续期</div>
                  <div class="content-des-money">¥20000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <div class="item-img small-pic">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_11.jpg%2Forigine%2Fccd06a24-54a0-4883-a39e-f98a230f2d05"
                  >
                </div>
                <div class="construct-content-des">
                  <div class="content-des-title">建筑专业承包资质</div>
                  <div class="content-des-co">资质办理/增项/升级/续期</div>
                  <div class="content-des-money">¥20000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <div class="item-img small-pic">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_13.jpg%2Forigine%2F4637261a-e472-482c-858d-4cdaae645d08"
                  >
                </div>
                <div class="construct-content-des">
                  <div class="content-des-title">安全生产许可证</div>
                  <div class="content-des-co">资质办理/续期</div>
                  <div class="content-des-money">¥20000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <div class="item-img big-pic">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E6%9C%AA%E6%A0%87%E9%A2%98-34t51.jpg%2Forigine%2F76384860-61bd-480d-a98c-1327c09f9868"
                  >
                </div>
                <div class="construct-content-des">
                  <div class="content-des-title">建筑工程设计资质</div>
                  <div class="content-des-co">资质办理/增项/升级/续期</div>
                  <div class="content-des-money">¥20000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="browse-more">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                target="_blank"
              >
                <div class="cont-block">
                  <div class="info-desc">
                    <p class="browse-title">了解更多</p>
                    <p class="browse-desc">MORE+</p>
                  </div>
                  <i class="icon-arrow1"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- part6 -->
      <div id="internet" name="internet" class="item business-industry">
        <div class="business-content zbj-grid-1200">
          <div class="content-left">
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              target="_blank"
              class="left-more-btn"
            >查看更多业务</a>
          </div>
          <ul class="content-right">
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_41.jpg%2Forigine%2F2a746d46-720d-4dce-a9b3-02497a63dc3c"
                >
                <div class="business-content-des">
                  <div class="content-des-title">网络文化经营许可证</div>
                  <div class="content-des-co">经营性互联网文化活动的市场准入资质</div>
                  <div class="content-des-money">¥6000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_27.jpg%2Forigine%2F6859fa57-aa68-4c23-b721-1878407a37f5"
                >
                <div class="business-content-des">
                  <div class="content-des-title">ICP[互联网信息服务业务]</div>
                  <div class="content-des-co">经营性互联网网站的必备资质</div>
                  <div class="content-des-money">¥3000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_23.jpg%2Forigine%2Fc31de8fe-f352-4876-ba09-4132ff549e55"
                >
                <div class="business-content-des">
                  <div class="content-des-title">ISP[互联网接入服务业务]</div>
                  <div class="content-des-co">许可证办理/年检/变更/续期</div>
                  <div class="content-des-money">¥35000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_37.jpg%2Forigine%2F03b0f23a-a039-4b38-b23e-5da3e253df2e"
                >
                <div class="business-content-des">
                  <div class="content-des-title">EDI[在线数据处理与交易处理业务]</div>
                  <div class="content-des-co">涉及互联网线上交易业务的必备文件</div>
                  <div class="content-des-money">¥6000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_25.jpg%2Forigine%2Fdf525c39-6f06-48eb-9851-269a6031fac1"
                >
                <div class="business-content-des">
                  <div class="content-des-title">IDC[互联网数据中心业务]</div>
                  <div class="content-des-co">许可证办理/年检/变更/续期</div>
                  <div class="content-des-money">¥35000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_39.jpg%2Forigine%2F77a8947a-2de9-47eb-b22d-e5dc8cd930e1"
                >
                <div class="business-content-des">
                  <div class="content-des-title">呼叫中心业务</div>
                  <div class="content-des-co"></div>
                  <div class="content-des-money">¥8000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- part7 -->
      <div id="game" name="game" class="item games-industry">
        <div class="games-content zbj-grid-1200">
          <div class="content-left">
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              target="_blank"
              class="left-more-btn"
            >查看更多业务</a>
          </div>
          <ul class="content-right">
            <li class="list-item">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_07.jpg%2Forigine%2F6f802a99-29cd-4650-90fb-ac988f900a59"
              >
              <div class="games-content-des">
                <div class="content-des-title">游戏类文网文</div>
                <div class="content-des-co">网络游戏运营平台必备的前置审批</div>
                <div class="content-des-money">¥8000起</div>
              </div>
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                target="_blank"
              >立即查看</a>
            </li>
            <li class="list-item">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_17.jpg%2Forigine%2Fdc5dc56f-6eae-4f77-93ce-cd69cd032e80"
              >
              <div class="games-content-des">
                <div class="content-des-title">游戏版号</div>
                <div class="content-des-co">与游戏发行和代理公司合作的必备文件</div>
                <div class="content-des-money">¥5000起</div>
              </div>
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                target="_blank"
              >立即查看</a>
            </li>
            <li class="list-item">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_99.jpg%2Forigine%2F6a096e27-76e2-4497-8bce-16a90fa3f6ec"
              >
              <div class="games-content-des">
                <div class="content-des-title">游戏软件著作权登记</div>
                <div class="content-des-co">对游戏软件开发者的版权及权益的保护</div>
                <div class="content-des-money">¥1200起</div>
              </div>
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                target="_blank"
              >立即查看</a>
            </li>
            <li class="list-item">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_19.jpg%2Forigine%2Fd19f8a1f-3d87-41ec-b6c8-372090dc05e6"
              >
              <div class="games-content-des">
                <div class="content-des-title">游戏运营备案</div>
                <div class="content-des-co">游戏运营公司必须办理的强制性备案</div>
                <div class="content-des-money">¥4000起</div>
              </div>
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                target="_blank"
              >立即查看</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- part8 -->
      <div id="food" name="food" class="item food-industry">
        <div class="food-content zbj-grid-1200">
          <div class="content-left">
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              target="_blank"
              class="left-more-btn"
            >查看更多业务</a>
          </div>
          <ul class="content-right">
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_53.jpg%2Forigine%2F48222784-1fc2-4215-987d-a8b55ae971ae"
                >
                <div class="food-content-des">
                  <div class="content-des-title">食品经营许可证</div>
                  <div class="content-des-co">
                    餐饮及食品销售
                    企业必备资质
                  </div>
                  <div class="content-des-money">¥1000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_55.jpg%2Forigine%2Fcd181666-6312-45ec-8601-a06201e7f21e"
                >
                <div class="food-content-des">
                  <div class="content-des-title">食品生产许可证</div>
                  <div class="content-des-co">食品生产单位必备</div>
                  <div class="content-des-money">¥1000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_51.jpg%2Forigine%2Fa651330f-b08e-4ac3-855f-5034adece22f"
                >
                <div class="food-content-des">
                  <div class="content-des-title">有机食品认证</div>
                  <div class="content-des-co"></div>
                  <div class="content-des-money">¥10000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_65.jpg%2Forigine%2F05fdb13c-5a03-4555-8bd2-25266ac9a925"
                >
                <div class="food-content-des">
                  <div class="content-des-title">绿色食品标志</div>
                  <div class="content-des-co"></div>
                  <div class="content-des-money">¥1200起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_67.jpg%2Forigine%2Fa54b02d3-f3bf-48db-8127-4b450c34041d"
                >
                <div class="food-content-des">
                  <div class="content-des-title">小餐饮小作坊登记证</div>
                  <div class="content-des-co"></div>
                  <div class="content-des-money">¥1000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="browse-more">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                target="_blank"
              >
                <div class="cont-block">
                  <div class="info-desc">
                    <p class="browse-title">了解更多</p>
                    <p class="browse-desc">MORE+</p>
                  </div>
                  <i class="icon-arrow1"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- part9 -->
      <div id="culture" name="culture" class="item cultura-industry">
        <div class="cultura-content zbj-grid-1200">
          <div class="content-left">
            <a
              href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              target="_blank"
              class="left-more-btn"
            >查看更多业务</a>
          </div>
          <ul class="content-right">
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <div class="item-img small-pic">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_79.jpg%2Forigine%2Ff286f20c-ffd7-4c1e-b1e1-431e4542f17b"
                  >
                </div>
                <div class="cultura-content-des">
                  <div class="content-des-title">广播电视制作经营许可证</div>
                  <div class="content-des-co">与影视发行和代理公司合作的必备文件</div>
                  <div class="content-des-money">¥3000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <div class="item-img small-pic">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_81.jpg%2Forigine%2F104794a5-49fb-4bd0-a06c-de68c667d268"
                  >
                  <img
                    src="https://bgl.zbjimg.com/bgl%2Fbjclound%2Ftopic3-click_17.jpg%2Forigine%2F8f552288-2154-4505-9d8a-4c440f790acc?imageMogr2/auto-orient/strip/quality/90"
                    alt
                  >
                </div>
                <div class="cultura-content-des">
                  <div class="content-des-title">网络出版许可证</div>
                  <div class="content-des-co">从事互联网出版业务的必备资质</div>
                  <div class="content-des-money">¥10000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <div class="item-img small-pic">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_83.jpg%2Forigine%2F903afea9-1a4e-4867-9e46-6994fc0333f4"
                  >
                </div>
                <div class="cultura-content-des">
                  <div class="content-des-title">网络视听许可证</div>
                  <div class="content-des-co">
                    视听节目通过自建网站
                    进行网络传播必须办理
                  </div>
                  <div class="content-des-money">¥20000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <div class="item-img big-pic">
                  <img
                    src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F56565651.jpg%2Forigine%2Fc7a036ef-13a8-4491-8135-1ce391c28c4f"
                  >
                </div>
                <div class="cultura-content-des">
                  <div class="content-des-title">出版物经营许可证</div>
                  <div class="content-des-co">从事出版物（图书、报刊、电子出版物）的零售、批发或租赁工作，应当依法办理</div>
                  <div class="content-des-money">¥2000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="browse-more">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                target="_blank"
              >
                <div class="cont-block">
                  <div class="info-desc">
                    <p class="browse-title">了解更多</p>
                    <p class="browse-desc">MORE+</p>
                  </div>
                  <i class="icon-arrow1"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- part10 -->
      <div class="item other-industry">
        <div class="other-content zbj-grid-1200">
          <div class="content-left">
            <a class="left-more-btn">咨询办理细节</a>
          </div>
          <ul class="content-right">
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_177.jpg%2Forigine%2Fdce4399c-389e-4d86-88a5-aa5870a99d06"
                >
                <div class="other-content-des">
                  <div class="content-des-title">医疗器械经营许可证</div>
                  <div class="content-des-co">医疗器械经营企业必须具备的证件</div>
                  <div class="content-des-money">¥2500起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_133.jpg%2Forigine%2F5413bca0-573a-4b13-bf13-339776f02ebd"
                >
                <div class="other-content-des">
                  <div class="content-des-title">人力资源服务许可证</div>
                  <div class="content-des-co">人力资源服务机构设立的必备前提条件</div>
                  <div class="content-des-money">¥5000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_111.jpg%2Forigine%2F84a4f230-27d5-4378-902f-08268a5d0df0"
                >
                <div class="other-content-des">
                  <div class="content-des-title">进出口权</div>
                  <div class="content-des-co">对外贸易经营者必须办理进出口权</div>
                  <div class="content-des-money">¥2000起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
            <li class="list-item">
              <a
                target="_blank"
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
              >
                <img
                  src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%81%9A%E5%90%88%E9%A1%B5%E4%BC%98%E5%8C%960408-%E5%88%87%E4%B8%AA%E5%9B%BE_155.jpg%2Forigine%2F20e42840-1b14-44f2-afc7-ad8d96ae1e9e"
                >
                <div class="other-content-des">
                  <div class="content-des-title">特种行业经营许可证</div>
                  <div class="content-des-co">经营业务涉及特殊行业的企业需要办理</div>
                  <div class="content-des-money">¥1500起</div>
                </div>
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
                  target="_blank"
                  class="go-look"
                >立即查看</a>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- part11 -->
      <div>
        <div id="service" name="service" class="item zzbl-question">
          <div class="zbj-grid-1200">
            <div class="zzbl-question-list">
              <a class="question-item">一个正常经营的网站需要办理哪些资质？</a>
              <a class="question-item">做人力劳务外包应该办理《人力资源许可证》还是《劳务派遣许可证》?</a>
              <a class="question-item">微信小程序上线需要提交哪些资质许可？</a>
              <a class="question-item">建筑总承包和专业承包申办资料和流程有何区别？</a>
            </div>
            <div class="zzbl-answer-list">
              <div
                class="answer-item"
              >答：一般经营性网站上线需要办理《ICP许可证》；涉及文化内容还需要办理《网络文化经营许可证》；涉及线上直接交易行为，还要有《EDI许可证》</div>
              <div
                class="answer-item"
              >答：根据新颁的《人力资源市场暂行条例》规定，经营性人力资源服务机构从事职业中介活动的，须取得人力资源服务许可证。经营性人力资源服务机构从事劳务派遣业务的，须办理《劳务派遣许可证》</div>
              <div
                class="answer-item"
              >答：根据微信小程序的管理规定，上线小程序需要企业提交对应的行业资质。比如食品需提交《食品经营许可证》等；电商、社交、医疗等类目小程序，除提交行业资质外，还需提交《增值电信业务经营许可证》</div>
              <div
                class="answer-item"
              >答：建筑总承包和专业承包资质本身就有质的区别，总承包资质下设12个类别，专业承包下设36个类别；从人员到业绩要求均有不同，因此需准备的材料也是各异</div>
            </div>
          </div>
          <a
            href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
            target="_blank"
            class="zzbl-question-more"
          >更多疑难问题，专业顾问为你答</a>
        </div>
        <div class="why"></div>
        <div class="steps">
          <a
            href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371"
            target="_blank"
          >立即咨询</a>
        </div>
      </div>
      <!-- part12 -->
      <div id="more" name="more" class="zzbl-more item">
        <div class="zbj-grid-1200">
          <div class="zzbl-more-title">
            <h2>更多服务</h2>
            <span>就是快人一步 全程代办 持续追踪</span>
          </div>
          <div class="zzbl-more-list">
            <a href="/#/dljz" target="_blank" class="more-list-item">代理记账</a>
            <a href="/#/gszc" target="_blank" class="more-list-item">工商注册</a>
            <a href="/#//zzbl" target="_blank" class="more-list-item">资质办理</a>
            <a href="/#/ssch" target="_blank" class="more-list-item">税收筹划</a>
          </div>
        </div>
      </div>
    </div>
    <div class="left-nav" id="left-nav" v-if="show">
      <a class="left-nav-list" data-id="hot" href="#hot">热门资质</a>
      <a class="left-nav-list" data-id="architecture" href="#architecture">建筑行业</a>
      <a class="left-nav-list" data-id="internet" href="#internet">互联网电商</a>
      <a class="left-nav-list" data-id="game" href="#game">网络游戏</a>
      <a class="left-nav-list" data-id="food" href="#food">食品行业</a>
      <a class="left-nav-list" data-id="culture" href="#culture">文化传媒</a>
      <a class="left-nav-list" data-id="service" href="#service">服务优势</a>
      <a class="left-nav-list" data-id="more" href="#more">更多服务</a>
      <a class="left-nav-return" href="#top">
        <i class="icon-shouqi"></i>
        <p>返回顶部</p>
      </a>
    </div>
    <m-modal v-if="success" @getStatus="getStatus"></m-modal>
  </div>
</template>
<script>
import Vue from "vue";
import { Carousel, CarouselItem } from "element-ui";
Vue.use(Carousel);
Vue.use(CarouselItem);
import Swiper from "swiper";
import mModal from "../components/Modal";

export default {
  name: "Qualification",
  components: {
    mModal
  },
  data() {
    return {
      swiper: [
        "https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8banner1.jpg%2Forigine%2Fd81a2116-8ce0-4352-b4dd-501c72d1ae82",
        "https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E4%B8%93%E9%A2%98%E6%96%B0%E5%A2%9EPCbanner2.jpg%2Forigine%2Fdfa3daa3-0026-4401-a5e0-7bfc7d6d82b4"
      ],
      telphone: "",
      show: false,
      job: "",
      success: false
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      slidesPerView: 4,
      loop: false
    });
    this.initScroll();
  },
  methods: {
    getStatus(res) {
      this.success = false;
    },
    receivePrice() {
      if (!this.telphone || !/^1[34578]\d{9}$/.test(this.telphone)) {
        this.$message.error("请输入正确的手机号码");
        return;
      }
      const params = {
        type: "qualification",
        phone: this.telphone,
        industry: this.job,
        name: this.username
      };
      this.$post(params).then(res => {
        console.log(res.ret);
        if (res.ret == 0) {
          console.log(3333333);
          this.success = true;
          this.username = ""; //企业名
          this.telphone = ""; //手机号
          this.job = "";
          this.myAddressProvince = "北京市";
          this.myAddressCity = "东城区";
        }
      });
    },
    initScroll() {
      let _this = this;
      // 监听页面滚动事件
      window.addEventListener("scroll", function() {
        var removeClass = function(obj, cls) {
          if (obj.className == cls) {
            obj.className = "";
          }
        };
        var addClass = function(obj, cls) {
          if (obj.className != cls) {
            obj.className = cls;
          }
        };

        let pos = document.documentElement.scrollTop;
        let headerTop = document.querySelector(".header").offsetHeight;
        if (pos > headerTop) {
          _this.show = true;
        } else {
          _this.show = false;
        }

        // 获取全部导航dom与元素dom
        var navList;
        if (document.querySelector("#left-nav")) {
          navList = document.querySelector("#left-nav").querySelectorAll("a");
        } else {
          return false;
        }
        var items = document
          .querySelector("#content")
          .querySelectorAll(".item");

        // 滚动后遍历元素，如果页面滚动位置大于元素的位置，赋值给变量
        var currentId = "";
        for (var i = 0; i < items.length; i++) {
          var _item = items[i];
          var _itemTop = _item.offsetTop;
          if (pos > _itemTop - 200) {
            currentId = _item.id;
          } else {
            break;
          }
        }
        // 如果已赋值了变量，进行匹配，如果匹配则添加class其他删除
        if (currentId) {
          for (var j = 0; j < navList.length; j++) {
            var _navItem = navList[j];
            var _navId = _navItem.getAttribute("data-id");

            if (_navId != currentId) {
              removeClass(_navItem, "cur");
            } else {
              addClass(_navItem, "cur");
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
@import "../styles/qualification.css";
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item {
  /* height: 464px; */
  background-size: cover;
}
.el-carousel--horizontal {
  width: 100%;
}

.hot .el-carousel__item--card.is-active {
  transform: translateX(180%) scale(1) !important;
}
</style>