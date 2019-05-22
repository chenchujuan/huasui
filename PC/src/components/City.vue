<template>
  <div class="item-bd J-city-body">
    <div class="city-list-box">
      <div class="city-list-content-box j-city-list-content-box">
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">A</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="安康市" @click="choiceCity">安康市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">B</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="巴中市" @click="choiceCity">巴中市</li>
            <li class="j-item-cityname" data-city="宝鸡市" @click="choiceCity">宝鸡市</li>
            <li class="j-item-cityname" data-city="保定市" @click="choiceCity">保定市</li>
            <li class="j-item-cityname" data-city="亳州市" @click="choiceCity">亳州市</li>
            <li class="j-item-cityname" data-city="巴音郭楞蒙古自治州" @click="choiceCity">巴音郭楞蒙古自治州</li>
            <li class="j-item-cityname" data-city="白山市" @click="choiceCity">白山市</li>
            <li class="j-item-cityname" data-city="白山市" @click="choiceCity">白山市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">C</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="长春市" @click="choiceCity">长春市</li>
            <li class="j-item-cityname" data-city="承德市" @click="choiceCity">承德市</li>
            <li class="j-item-cityname" data-city="滁州市" @click="choiceCity">滁州市</li>
            <li class="j-item-cityname" data-city="沧州市" @click="choiceCity">沧州市</li>
            <li class="j-item-cityname" data-city="重庆市" @click="choiceCity">重庆市</li>
            <li class="j-item-cityname" data-city="成都市" @click="choiceCity">成都市</li>
            <li class="j-item-cityname" data-city="常州市" @click="choiceCity">常州市</li>
            <li class="j-item-cityname" data-city="楚雄彝族自治州" @click="choiceCity">楚雄彝族自治州</li>
            <li class="j-item-cityname" data-city="长沙市" @click="choiceCity">长沙市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">D</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="达州市" @click="choiceCity">达州市</li>
            <li class="j-item-cityname" data-city="德阳市" @click="choiceCity">德阳市</li>
            <li class="j-item-cityname" data-city="东莞市" @click="choiceCity">东莞市</li>
            <li class="j-item-cityname" data-city="大同市" @click="choiceCity">大同市</li>
            <li class="j-item-cityname" data-city="德州市" @click="choiceCity">德州市</li>
            <li class="j-item-cityname" data-city="大连市" @click="choiceCity">大连市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">E</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="鄂尔多斯市" @click="choiceCity">鄂尔多斯市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">F</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="福州市" @click="choiceCity">福州市</li>
            <li class="j-item-cityname" data-city="佛山市" @click="choiceCity">佛山市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">G</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="广州市" @click="choiceCity">广州市</li>
            <li class="j-item-cityname" data-city="赣州市" @click="choiceCity">赣州市</li>
            <li class="j-item-cityname" data-city="贵阳市" @click="choiceCity">贵阳市</li>
            <li class="j-item-cityname" data-city="桂林市" @click="choiceCity">桂林市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">H</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="呼和浩特市" @click="choiceCity">呼和浩特市</li>
            <li class="j-item-cityname" data-city="衡阳市" @click="choiceCity">衡阳市</li>
            <li class="j-item-cityname" data-city="衡水市" @click="choiceCity">衡水市</li>
            <li class="j-item-cityname" data-city="杭州市" @click="choiceCity">杭州市</li>
            <li class="j-item-cityname" data-city="哈尔滨市" @click="choiceCity">哈尔滨市</li>
            <li class="j-item-cityname" data-city="怀化市" @click="choiceCity">怀化市</li>
            <li class="j-item-cityname" data-city="呼伦贝尔市" @click="choiceCity">呼伦贝尔市</li>
            <li class="j-item-cityname" data-city="呼伦贝尔市" @click="choiceCity">黄冈市</li>
            <li class="j-item-cityname" data-city="黄石市" @click="choiceCity">黄石市</li>
            <li class="j-item-cityname" data-city="湖州市" @click="choiceCity">湖州市</li>
            <li class="j-item-cityname" data-city="合肥市" @click="choiceCity">合肥市</li>
            <li class="j-item-cityname" data-city="邯郸市" @click="choiceCity">邯郸市</li>
            <li class="j-item-cityname" data-city="惠州市" @click="choiceCity">惠州市</li>
            <li class="j-item-cityname" data-city="淮安市" @click="choiceCity">淮安市</li>
            <li class="j-item-cityname" data-city="汉中市" @click="choiceCity">汉中市</li>
            <li class="j-item-cityname" data-city="海口市" @click="choiceCity">海口市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">J</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="景德镇市" @click="choiceCity">景德镇市</li>
            <li class="j-item-cityname" data-city="江门市" @click="choiceCity">江门市</li>
            <li class="j-item-cityname" data-city="荆州市" @click="choiceCity">荆州市</li>
            <li class="j-item-cityname" data-city="济南市" @click="choiceCity">济南市</li>
            <li class="j-item-cityname" data-city="荆门市" @click="choiceCity">荆门市</li>
            <li class="j-item-cityname" data-city="济宁市" @click="choiceCity">济宁市</li>
            <li class="j-item-cityname" data-city="锦州市" @click="choiceCity">锦州市</li>
            <li class="j-item-cityname" data-city="吉安市" @click="choiceCity">吉安市</li>
            <li class="j-item-cityname" data-city="九江市" @click="choiceCity">九江市</li>
            <li class="j-item-cityname" data-city="酒泉市" @click="choiceCity">酒泉市</li>
            <li class="j-item-cityname" data-city="嘉兴市" @click="choiceCity">嘉兴市</li>
            <li class="j-item-cityname" data-city="金华市" @click="choiceCity">金华市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">K</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="昆明市" @click="choiceCity">昆明市</li>
            <li class="j-item-cityname" data-city="开封市" @click="choiceCity">开封市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">L</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="临沂市" @click="choiceCity">临沂市</li>
            <li class="j-item-cityname" data-city="凉山彝族自治州" @click="choiceCity">凉山彝族自治州</li>
            <li class="j-item-cityname" data-city="拉萨市" @click="choiceCity">拉萨市</li>
            <li class="j-item-cityname" data-city="六盘水市" @click="choiceCity">六盘水市</li>
            <li class="j-item-cityname" data-city="漯河市" @click="choiceCity">漯河市</li>
            <li class="j-item-cityname" data-city="洛阳市" @click="choiceCity">洛阳市</li>
            <li class="j-item-cityname" data-city="柳州市" @click="choiceCity">柳州市</li>
            <li class="j-item-cityname" data-city="连云港市" @click="choiceCity">连云港市</li>
            <li class="j-item-cityname" data-city="廊坊市" @click="choiceCity">廊坊市</li>
            <li class="j-item-cityname" data-city="聊城市" @click="choiceCity">聊城市</li>
            <li class="j-item-cityname" data-city="泸州市" @click="choiceCity">泸州市</li>
            <li class="j-item-cityname" data-city="六安市" @click="choiceCity">六安市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">N</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="南昌市" @click="choiceCity">南昌市</li>
            <li class="j-item-cityname" data-city="宁波市" @click="choiceCity">宁波市</li>
            <li class="j-item-cityname" data-city="南通市" @click="choiceCity">南通市</li>
            <li class="j-item-cityname" data-city="南宁市" @click="choiceCity">南宁市</li>
            <li class="j-item-cityname" data-city="南阳市" @click="choiceCity">南阳市</li>
            <li class="j-item-cityname" data-city="南京市" @click="choiceCity">南京市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">P</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="普洱市" @click="choiceCity">普洱市</li>
            <li class="j-item-cityname" data-city="濮阳市" @click="choiceCity">濮阳市</li>
            <li class="j-item-cityname" data-city="平顶山市" @click="choiceCity">平顶山市</li>
            <li class="j-item-cityname" data-city="莆田市" @click="choiceCity">莆田市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">Q</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="衢州市" @click="choiceCity">衢州市</li>
            <li class="j-item-cityname" data-city="曲靖市" @click="choiceCity">曲靖市</li>
            <li class="j-item-cityname" data-city="泉州市" @click="choiceCity">泉州市</li>
            <li class="j-item-cityname" data-city="青岛市" @click="choiceCity">青岛市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">R</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="日照市" @click="choiceCity">日照市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">S</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="沈阳市" @click="choiceCity">沈阳市</li>
            <li class="j-item-cityname" data-city="石家庄市" @click="choiceCity">石家庄市</li>
            <li class="j-item-cityname" data-city="随州市" @click="choiceCity">随州市</li>
            <li class="j-item-cityname" data-city="四平市" @click="choiceCity">四平市</li>
            <li class="j-item-cityname" data-city="上饶市" @click="choiceCity">上饶市</li>
            <li class="j-item-cityname" data-city="深圳市" @click="choiceCity">深圳市</li>
            <li class="j-item-cityname" data-city="商丘市" @click="choiceCity">商丘市</li>
            <li class="j-item-cityname" data-city="上海市" @click="choiceCity">上海市</li>
            <li class="j-item-cityname" data-city="遂宁市" @click="choiceCity">遂宁市</li>
            <li class="j-item-cityname" data-city="汕头市" @click="choiceCity">汕头市</li>
            <li class="j-item-cityname" data-city="绍兴市" @click="choiceCity">绍兴市</li>
            <li class="j-item-cityname" data-city="苏州市" @click="choiceCity">苏州市</li>
            <li class="j-item-cityname" data-city="三门峡市" @click="choiceCity">三门峡市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">T</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="台州市" @click="choiceCity">台州市</li>
            <li class="j-item-cityname" data-city="泰安市" @click="choiceCity">泰安市</li>
            <li class="j-item-cityname" data-city="天津市" @click="choiceCity">天津市</li>
            <li class="j-item-cityname" data-city="太原市" @click="choiceCity">太原市</li>
            <li class="j-item-cityname" data-city="天水市" @click="choiceCity">天水市</li>
            <li class="j-item-cityname" data-city="铁岭市" @click="choiceCity">铁岭市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">W</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="武汉市" @click="choiceCity">武汉市</li>
            <li class="j-item-cityname" data-city="潍坊市" @click="choiceCity">潍坊市</li>
            <li class="j-item-cityname" data-city="乌鲁木齐市" @click="choiceCity">乌鲁木齐市</li>
            <li class="j-item-cityname" data-city="温州市" @click="choiceCity">温州市</li>
            <li class="j-item-cityname" data-city="威海市" @click="choiceCity">威海市</li>
            <li class="j-item-cityname" data-city="芜湖市" @click="choiceCity">芜湖市</li>
            <li class="j-item-cityname" data-city="无锡市" @click="choiceCity">无锡市</li>
            <li class="j-item-cityname" data-city="文山壮族苗族自治州" @click="choiceCity">文山壮族苗族自治州</li>
            <li class="j-item-cityname" data-city="乌兰察布市" @click="choiceCity">乌兰察布市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">X</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="襄阳市" @click="choiceCity">襄阳市</li>
            <li class="j-item-cityname" data-city="邢台市" @click="choiceCity">邢台市</li>
            <li class="j-item-cityname" data-city="许昌市" @click="choiceCity">许昌市</li>
            <li class="j-item-cityname" data-city="西宁市" @click="choiceCity">西宁市</li>
            <li class="j-item-cityname" data-city="西安市" @click="choiceCity">西安市</li>
            <li class="j-item-cityname" data-city="湘潭市" @click="choiceCity">湘潭市</li>
            <li class="j-item-cityname" data-city="信阳市" @click="choiceCity">信阳市</li>
            <li class="j-item-cityname" data-city="咸阳市" @click="choiceCity">咸阳市</li>
            <li class="j-item-cityname" data-city="西双版纳傣族自治州" @click="choiceCity">西双版纳傣族自治州</li>
            <li class="j-item-cityname" data-city="宣城市" @click="choiceCity">宣城市</li>
            <li class="j-item-cityname" data-city="徐州市" @click="choiceCity">徐州市</li>
            <li class="j-item-cityname" data-city="厦门市" @click="choiceCity">厦门市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">Y</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="扬州市" @click="choiceCity">扬州市</li>
            <li class="j-item-cityname" data-city="运城市" @click="choiceCity">运城市</li>
            <li class="j-item-cityname" data-city="延边朝鲜族自治州" @click="choiceCity">延边朝鲜族自治州/市</li>
            <li class="j-item-cityname" data-city="玉溪市" @click="choiceCity">玉溪市</li>
            <li class="j-item-cityname" data-city="益阳市" @click="choiceCity">益阳市</li>
            <li class="j-item-cityname" data-city="银川市" @click="choiceCity">银川市</li>
            <li class="j-item-cityname" data-city="宜昌市" @click="choiceCity">宜昌市</li>
            <li class="j-item-cityname" data-city="宜春市" @click="choiceCity">宜春市</li>
            <li class="j-item-cityname" data-city="伊犁哈萨克自治州/市" @click="choiceCity">伊犁哈萨克自治州/市</li>
            <li class="j-item-cityname" data-city="烟台市" @click="choiceCity">烟台市</li>
            <li class="j-item-cityname" data-city="宜宾市" @click="choiceCity">宜宾市</li>
            <li class="j-item-cityname" data-city="盐城市" @click="choiceCity">盐城市</li>
          </ul>
        </div>
        <div class="city-list-content j-city-list-content">
          <span class="city-letter">Z</span>
          <ul class="city-items j-city-items">
            <li class="j-item-cityname" data-city="自贡市" @click="choiceCity">自贡市</li>
            <li class="j-item-cityname" data-city="周口市" @click="choiceCity">周口市</li>
            <li class="j-item-cityname" data-city="郑州市" @click="choiceCity">郑州市</li>
            <li class="j-item-cityname" data-city="淄博市" @click="choiceCity">淄博市</li>
            <li class="j-item-cityname" data-city="中山市" @click="choiceCity">中山市</li>
            <li class="j-item-cityname" data-city="遵义市" @click="choiceCity">遵义市</li>
            <li class="j-item-cityname" data-city="株洲市" @click="choiceCity">株洲市</li>
            <li class="j-item-cityname" data-city="珠海市" @click="choiceCity">珠海市</li>
            <li class="j-item-cityname" data-city="镇江市" @click="choiceCity">镇江市</li>
          </ul>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    choiceCity(e) {
      const city = e.target.dataset.city;
      this.$emit("choiceCity", city);
    }
  }
};
</script>

<style scoped>
.item-bd {
  display: none;
  z-index: 99;
  overflow-y: scroll;
  position: absolute;
  line-height: 0;
  top: 60px;
  background: #fff;
  width: 500px;
  box-shadow: 0 2px 5px 0 #e6ebf5;
}

/* {
  padding: 20px;
} */

.city-list-content-box {
  height: 300px;
  padding: 20px;
}

.city-list-content {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  line-height: 20px;
}

.city-list-content-box .city-list-content .city-letter {
  color: #999;
  display: inline-block;
  font-size: 14px;
  margin-right: 15px;
}

.city-list-content-box .city-list-content .city-items {
  display: flex;
  flex-wrap: wrap;
}

.city-list-content-box .city-list-content .city-items li {
  display: inline-block;
  cursor: pointer;
  margin-right: 15px;
  font-size: 14px;
}

.city-list-content-box .city-list-content .city-items li:hover {
  color: #ff7955;
}

.city-list-content-box .city-list-content .city-items .high-light {
  color: #ff7955;
}
</style>
