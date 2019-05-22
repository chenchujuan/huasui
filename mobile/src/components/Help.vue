<template>
    <div>
        <div class="p_rl_10">
            <div class="titlebox">
                <span>关于我们</span>
                <i>Online Message</i>
                <em></em>
            </div>
            <div class="aboutcon">
                <img src="../assets/aboutpic.jpg">
                <p>广州骅穗财务顾问有限公司，是经广州市相关部门核立批准的一家代理机构。骅穗拥有良好的社会资源，与工商、税务、银行等系统建立了友好的合作关系；与此同时，骅穗也培养出一支实力雄厚的专业队伍，致力为广州各地区各类型各行业的中小企业提供优质服务。</p>
                <p>“骅穗”汇聚了一支由注册会计师、注册税务师、以及资深企业管理专业组成的专业队伍,是一个专业、睿智、稳健而又富于热情的团队。现已设立各个专业部门：工商部、会计部、税务部、业务部、客服部。专门从事工商注册、代理记账、审计验资、财务咨询、税务咨询等业务。</p>
                <p>本着诚信务实，专业效率的奋斗理念。期待与您合作，携手共进，共创辉煌！企业是社会经济的蓝海，为企业服务是为未来服务，我们愿与企业共成长。</p>
            </div>
        </div>
        <div class="p_rl_10">
            <div class="titlebox">
                <span>核心业务</span>
                <i>MAIN BUSINESS</i>
                <em></em>
            </div>
            <div class="businessbox1">
                <ul class="ztlist" id="ztlist">
                    <li>
                        <a href="/#/gszc">
                            <div class="ztpic">
                                <img src="../assets/azt1.png">
                            </div>
                            <span class="zttlecn">工商注册</span>
                            <i class="zttleen">各种类型公司注册
                                <br>工商变更、股权变更
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="/#/dljz">
                            <div class="ztpic">
                                <img src="../assets/azt2.png">
                            </div>
                            <span class="zttlecn">代理记账</span>
                            <i class="zttleen">记账审账、代理税务
                                <br>出口退税、财务报关
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="/#/zzbl">
                            <div class="ztpic">
                                <img src="../assets/azt3.png">
                            </div>
                            <span class="zttlecn">资质办理</span>
                            <i class="zttleen">1v1专业顾问服务
                                <br>更快、更省、更专业
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="/#/ssch">
                            <div class="ztpic">
                                <img src="../assets/azt4.png">
                            </div>
                            <span class="zttlecn">税务筹划</span>
                            <i class="zttleen">为企业和个人
                                <br>量身定制节税方案
                            </i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.titlebox {
  text-align: center;
}
.p_rl_10 {
  padding-top: 1.4rem;
  background: #fff;
}
.titlebox span {
  color: #ff8900;
  font-size: 0.6rem;
  font-weight: bold;
  display: block;
}
.businessbox1 {
  background: #ebebeb;
  width: 100%;
  height: 10rem;
}

.titlebox em {
  display: block;
  margin: 0 auto;
  width: 0.8rem;
  height: 0.3rem;
  border-top: 2px solid #ff8900;
}
.titlebox i {
  display: block;
  color: #999;
  font-family: arial;
  font-size: 0.24rem;
  text-transform: uppercase;
}
.aboutcon {
  line-height: 1.2rem;
  font-size: 0.24rem;
}
.aboutcon img {
  width: 100%;
  padding: 0 0.3rem;
}
.aboutcon p {
  color: #666;
  font-size: 0.3rem;
  line-height: 1.8;
  margin: 0 0.3rem 0.2rem;
}
.ztpic {
  margin: 0 auto;
  width: 64%;
}
.ztpic img {
  display: block;
  width: 100%;
  vertical-align: bottom;
}
.ztlist li {
  float: left;
  width: 50%;
  text-align: center;
  margin: 0.5rem 0 0;
}
.zttlecn {
  font-size: 0.3rem;
  margin: 0.2rem 0 0;
  display: block;
  font-weight: bold;
}
.zttleen {
  display: block;
  font-size: 0.2rem;
  font-style: normal;
}
</style>
