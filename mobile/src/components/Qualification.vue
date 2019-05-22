<template>
  <div class="wrapper">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../assets/swipe1.png" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/swipe2.png" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/swipe3.png" alt>
      </mt-swipe-item>
    </mt-swipe>
    <form method="post" class="qualification-form">
      <h3>
        <span>免费查询</span>您需要办理哪些许可证？
      </h3>
      <div class="form-item">
        <i class="icon-xingming"></i>
        <input type="text" placeholder="请输入您的姓名" v-model="username" value>
      </div>
      <div class="form-item">
        <i class="icon-hangye"></i>
        <input type="text" placeholder="请输入您的行业" v-model="job" value>
      </div>
      <div class="form-item">
        <i class="icon-shouji"></i>
        <input type="text" placeholder="请输入您的手机号码" v-model="telphone" value>
      </div>
      <div class="submit-btn" @click="receivePrice">获取办证类型及价格</div>
    </form>
    <div class="qualification-intro">
      <div class="intro-item">
        <div class="item-content">
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/5741427.png">
          <div class="intro-item-text">
            <p class="item-text-des">速度更快</p>
            <p class="item-text-con">绿色通道，提速20%</p>
          </div>
          <div class="intro-item-line"></div>
        </div>
      </div>
      <div class="intro-item">
        <div class="item-content">
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/a425e24.png">
          <div class="intro-item-text">
            <p class="item-text-des">通过率更高</p>
            <p class="item-text-con">首次 98.6%</p>
          </div>
        </div>
      </div>
      <div class="intro-item">
        <div class="item-content">
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/3abdf40.png">
          <div class="intro-item-text">
            <p class="item-text-des">价格更真</p>
            <p class="item-text-con">没有隐形收费</p>
          </div>
          <div class="intro-item-line"></div>
        </div>
      </div>
      <div class="intro-item">
        <div class="item-content">
          <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/e7d3e07.png">
          <div class="intro-item-text">
            <p class="item-text-des">十年品牌</p>
            <p class="item-text-con">骅穗旗下网站</p>
          </div>
        </div>
      </div>
    </div>
    <div class="qualification-select">
      <div class="qualification-select-title">高效的人 会选择这里</div>
      <div class="qualification-select-des">节约时间成本，专注自身业务及公司管理</div>
      <div class="qualification-select-pic">
        <img src="../assets/swipe4.png">
      </div>
    </div>
    <div class="qualification-hot">
      <div class="qualification-hot-title">
        <i class="icon-hot2"></i>热门资质类型
      </div>
      <div class="qualification-hot-des">热门行业全覆盖，办理更快价更低</div>
      <div
        class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-thumbs"
        id="thumbs"
      >
        <ul class="hot-content swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
          <li class="content-item swiper-slide swiper-slide-active">
            <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F01.jpg%2Forigine%2F2e0ea1c8-ae14-4ad0-b03c-072555cfb399"
                class="item-bg"
              >
              <h3 class="item-title">网络文化经营许可证</h3>
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="item-btn"
              >了解详情</a>
            </a>
          </li>
          <li class="content-item swiper-slide swiper-slide-next">
            <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F04.jpg%2Forigine%2F9b50f701-5663-4528-b1a5-1001b10622e6"
                class="item-bg"
              >
              <h3 class="item-title">建筑行业资质</h3>
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="item-btn"
              >了解详情</a>
            </a>
          </li>
          <li class="content-item swiper-slide">
            <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F03.jpg%2Forigine%2F5b338c66-06b9-4296-82e8-2cf87b628e01"
                class="item-bg"
              >
              <h3 class="item-title">网络游戏资质</h3>
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="item-btn"
              >了解详情</a>
            </a>
          </li>
          <li class="content-item swiper-slide">
            <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F02.jpg%2Forigine%2F831a0ba8-356d-48a8-baf2-164ee01ee72d"
                class="item-bg"
              >
              <h3 class="item-title">ICP许可证</h3>
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="item-btn"
              >了解详情</a>
            </a>
          </li>
          <li class="content-item swiper-slide">
            <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F06.jpg%2Forigine%2Ffb3de725-311b-47c9-b2b2-57898c11f8cf"
                class="item-bg"
              >
              <h3 class="item-title">广播电视节目制作经营许可证</h3>
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="item-btn"
              >了解详情</a>
            </a>
          </li>
          <li class="content-item swiper-slide">
            <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F05.jpg%2Forigine%2F2ce02ae7-a322-41f8-a69d-3feb43761854"
                class="item-bg"
              >
              <h3 class="item-title">食品经营许可证</h3>
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="item-btn"
              >了解详情</a>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="qualification">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">建筑行业</mt-tab-item>
        <mt-tab-item id="2">电商行业</mt-tab-item>
        <mt-tab-item id="3">网络游戏</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap180223_23.jpg%2Forigine%2F0ceb1094-2bcc-4e22-bdf3-06e361e43dcd"
                class="item-pic"
              >
              <h3 class="item-title">建筑专业设计资质</h3>
              <p class="item-des">￥20000起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap180223_17.jpg%2Forigine%2F5e67b925-0383-4cf4-aec7-35f47291f32b"
                class="item-pic"
              >
              <h3 class="item-title">安全生产许可证</h3>
              <p class="item-des">￥20000起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap180223_11.jpg%2Forigine%2F1366e3f8-3fe8-4241-8e17-0005c18a62ce"
                class="item-pic"
              >
              <h3 class="item-title">建筑专业承包资质</h3>
              <p class="item-des">￥20000起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap180223_05.jpg%2Forigine%2Fe000af94-59ec-4324-b0ad-586b4abb692e"
                class="item-pic"
              >
              <h3 class="item-title">建筑施工总承包资质</h3>
              <p class="item-des">￥20000起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_50.jpg%2Forigine%2F51944fe1-efac-4f82-94f4-8e86fa1982a7"
                class="item-pic"
              >
              <h3 class="item-title">食品经营许可证</h3>
              <p class="item-des">￥1000起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_56.jpg%2Forigine%2F04795197-45c5-492a-9724-ac95ead60b0c"
                class="item-pic"
              >
              <h3 class="item-title">食品生产许可证</h3>
              <p class="item-des">￥1000起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_80.jpg%2Forigine%2F162a6f82-b04a-4f65-810e-5a3a30405a67"
                class="item-pic"
              >
              <h3 class="item-title">小餐饮小作坊登记证</h3>
              <p class="item-des">￥1000起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_74.jpg%2Forigine%2F430156ba-52b2-48ca-8614-b2c4012cb8a2"
                class="item-pic"
              >
              <h3 class="item-title">绿色食品标志</h3>
              <p class="item-des">￥1200起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_62.jpg%2Forigine%2F8eddf977-ddba-4527-88cf-abb12f2393d0"
                class="item-pic"
              >
              <h3 class="item-title">有机食品认证</h3>
              <p class="item-des">￥10000起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_110.jpg%2Forigine%2F64545c2a-b0cb-4612-84ee-55fc315a4d9e"
                class="item-pic"
              >
              <h3 class="item-title">进出口权</h3>
              <p class="item-des">￥2000起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_116.jpg%2Forigine%2F8ab4d4ec-ea45-425d-9e9f-1a877f380061"
                class="item-pic"
              >
              <h3 class="item-title">人力资源服务许可证</h3>
              <p class="item-des">￥5000起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_122.jpg%2Forigine%2F7a0ed0c0-7ecd-48c9-8658-dd2b636b2c8b"
                class="item-pic"
              >
              <h3 class="item-title">特种行业经营许可证</h3>
              <p class="item-des">￥1500起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
          <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
            <div class="item-block">
              <img
                src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_128.jpg%2Forigine%2Fb74cfd8c-41f8-4f77-a3b0-f3e366ee3cd7"
                class="item-pic"
              >
              <h3 class="item-title">医疗器械经营许可证</h3>
              <p class="item-des">￥2500起</p>
              <p class="item-btn">
                <a
                  href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                  class="btn-word"
                >了解详情</a>
                <i class="icon-chakangengduotubiao"></i>
              </p>
            </div>
          </a>
        </mt-tab-container-item>
      </mt-tab-container>
      <a
        href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
        class="essential-more-btn"
      >查看更多业务</a>
    </div>
    <mt-navbar v-model="selected1">
      <mt-tab-item id="4">食品行业</mt-tab-item>
      <mt-tab-item id="5">文化出版行业</mt-tab-item>
      <mt-tab-item id="6">其他行业</mt-tab-item>
    </mt-navbar>
    <mt-tab-container class="qua-bg" v-model="selected1">
      <mt-tab-container-item id="4">
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_50.jpg%2Forigine%2F51944fe1-efac-4f82-94f4-8e86fa1982a7"
              class="item-pic"
            >
            <h3 class="item-title">食品经营许可证</h3>
            <p class="item-des">￥1000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_56.jpg%2Forigine%2F04795197-45c5-492a-9724-ac95ead60b0c"
              class="item-pic"
            >
            <h3 class="item-title">食品生产许可证</h3>
            <p class="item-des">￥1000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_80.jpg%2Forigine%2F162a6f82-b04a-4f65-810e-5a3a30405a67"
              class="item-pic"
            >
            <h3 class="item-title">小餐饮小作坊登记证</h3>
            <p class="item-des">￥1000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_74.jpg%2Forigine%2F430156ba-52b2-48ca-8614-b2c4012cb8a2"
              class="item-pic"
            >
            <h3 class="item-title">绿色食品标志</h3>
            <p class="item-des">￥1200起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_62.jpg%2Forigine%2F8eddf977-ddba-4527-88cf-abb12f2393d0"
              class="item-pic"
            >
            <h3 class="item-title">有机食品认证</h3>
            <p class="item-des">￥10000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_26.jpg%2Forigine%2Fe0142973-d6a5-4303-9783-771c7403a192"
              class="item-pic"
            >
            <h3 class="item-title">ICP[ 互联网信息服务业务 ]</h3>
            <p class="item-des">￥3000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_44.jpg%2Forigine%2Fb2846ec7-0c53-4428-9503-ae0fcb0865a2"
              class="item-pic"
            >
            <h3 class="item-title">网络文化经营许可证</h3>
            <p class="item-des">￥6000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_32.jpg%2Forigine%2Ff2dde550-abe5-420f-853d-3c8a078df6df"
              class="item-pic"
            >
            <h3 class="item-title">EDI[ 在线数据处理与交易处理业务 ]</h3>
            <p class="item-des">￥6000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_14.jpg%2Forigine%2Ff2f8e13f-99f8-4c68-8b51-143b0c2aa993"
              class="item-pic"
            >
            <h3 class="item-title">ISP[ 互联网接入服务业务 ]</h3>
            <p class="item-des">￥35000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_20.jpg%2Forigine%2Fd1ac16f5-f411-465d-817d-19effd609251"
              class="item-pic"
            >
            <h3 class="item-title">IDC[ 互联网数据中心业务 ]</h3>
            <p class="item-des">￥35000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E8%B5%84%E8%B4%A8%E5%8A%9E%E7%90%86wap1802228%E5%88%87%E5%9B%BE_38.jpg%2Forigine%2F9258f438-efa2-4e9f-997d-c2b848daa5bd"
              class="item-pic"
            >
            <h3 class="item-title">呼叫中心业务</h3>
            <p class="item-des">￥8000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
      </mt-tab-container-item>
      <mt-tab-container-item id="6">
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F1.jpg%2Forigine%2F1addd56a-2fad-490c-bc2f-d286d878a72d"
              class="item-pic"
            >
            <h3 class="item-title">游戏类文网文</h3>
            <p class="item-des">￥8000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F3.jpg%2Forigine%2Fc649ea81-b4d7-4b8c-b588-b13302d9f80f"
              class="item-pic"
            >
            <h3 class="item-title">游戏版号</h3>
            <p class="item-des">￥5000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F4.jpg%2Forigine%2F8b481b16-2f07-4dde-b6af-7879ea5f1104"
              class="item-pic"
            >
            <h3 class="item-title">游戏运营备案</h3>
            <p class="item-des">￥4000起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
        <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">
          <div class="item-block">
            <img
              src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F2.jpg%2Forigine%2Fc627ab9c-9415-4798-b9eb-3055fb370640"
              class="item-pic"
            >
            <h3 class="item-title">游戏软件著作权登记</h3>
            <p class="item-des">￥1200起</p>
            <p class="item-btn">
              <a
                href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
                class="btn-word"
              >了解详情</a>
              <i class="icon-chakangengduotubiao"></i>
            </p>
          </div>
        </a>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="qualification-essential">
      <a
        href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
        class="more-btn"
      >查看更多业务</a>
    </div>
    <div class="qualification-questions">
      <img src="//as.zbjimg.com/static/nodejs-caishui-mobile-web/img/4ef3f4f.jpg">
      <a class="question-item question-item-1">一个正常经营的网站需要办理哪些资质？</a>
      <a class="question-item question-item-2">做人力劳务外包应该办理《人力资源许可证》还是《劳务派遣许可证》？</a>
      <a class="question-item question-item-3">微信小程序上线需要提交哪些资质许可？</a>
      <a class="question-item question-item-4">建筑总承包和专业承包申办资料和流程有何区别？</a>
      <div class="question-answer-list">
        <div
          class="answer-list-item"
        >答：一般经营性网站上线需要办理《ICP许可证》；涉及文化内容还需要办理《网络文化经营许可证》；涉及线上直接交易行为，还要有《EDI许可证》</div>
        <div
          class="answer-list-item"
        >答：根据新颁的《人力资源市场暂行条例》规定，经营性人力资源服务机构从事职业中介活动的，须取得人力资源服务许可证。经营性人力资源服务机构从事劳务派遣业务的，须办理《劳务派遣许可证》</div>
        <div
          class="answer-list-item"
        >答：根据微信小程序的管理规定，上线小程序需要企业提交对应的行业资质。比如食品需提交《食品经营许可证》等；电商、社交、医疗等类目小程序，除提交行业资质外，还需提交《增值电信业务经营许可证》</div>
        <div
          class="answer-list-item"
        >答：建筑总承包和专业承包资质本身就有质的区别，总承包资质下设12个类别，专业承包下设36个类别；从人员到业绩要求均有不同，因此需准备的材料也是各异</div>
      </div>
      <a
        href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1"
        class="qualification-question-btn"
      >更多问题</a>
    </div>
    <div class="qualification-why">
      <img src="../assets/swipe6.jpg">
    </div>
    <div class="qualification-steps">
      <img src="../assets/swipe7.jpg">
      <a href="https://rytk20.kuaishang.cn/bs/im.htm?cas=122910___910193&fi=125371&ism=1">立即咨询</a>
    </div>
    <div class="qualification-more">
      <img src="../assets/swipe8.jpg">
      <div class="qualification-more-title">更多服务</div>
      <div class="qualification-more-des">就是快人一步 全程代办 持续追踪</div>
      <div class="qualification-more-list">
        <a href="/#/gszc" class="more-list-item">工商注册</a>
        <a href="/#/dljz" class="more-list-item">代理记账</a>
        <a href="/#/zzbl" class="more-list-item">资质办理</a>
        <a href="/#/ssch" class="more-list-item">税收筹划</a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Swipe,
  SwipeItem,
  Navbar,
  TabItem,
  Cell,
  Toast,
  MessageBox
} from "mint-ui";

import Swiper from "swiper";
export default {
  name: "Qualification",
  data() {
    return {
      selected: "1",
      selected1: "4",
      username: "",
      telphone: "",
      job: ""
    };
  },
  methods: {
    receivePrice() {
      if (!this.telphone || !this.username || !this.job) {
        Toast("为了快速享受服务，请补充相关信息");
        return;
      }
      if (!/^1[34578]\d{9}$/.test(this.telphone)) {
        Toast("请输入正确的手机号码");
        return;
      }
      const params = {
        type: "qualification",
        phone: this.telphone,
        industry: this.job,
        name: this.username
      };

      this.$post(params).then(res => {
        if (res.ret == 0) {
          MessageBox(
            "您的申请我们已经收到！",
            "请耐心等待，您的专属顾问会在10分钟内联系您，请保持电话畅通"
          );
          this.username = ""; //企业名
          this.telphone = ""; //手机号
          this.job = "";
          this.myAddressProvince = "北京市";
          this.myAddressCity = "东城区";
        }
      });
    }
  },
  mounted() {
    var thumbsSwiper = new Swiper("#thumbs", {
      spaceBetween: 20,
      slidesPerView: 3,
      watchSlidesVisibility: true //防止不可点击
    });
  }
};
</script>
<style scoped>
@import "../styles/qualification.css";
</style>
