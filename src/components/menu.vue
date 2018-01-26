<template>
<div class="whole">
  <div class="menu" @click="menuClick">菜单</div>
  <div style="height:100%; overflow:auto" @click="ShutMenuClick">
    <router-view></router-view>
  </div>
  <div class="menuMask">
    <div class="user">
      <div v-show="subMenu">
        <div @click="reportClick">
          <i class="iconfont icon-huanzhebaogao"></i>
          报告
        </div>
        <el-collapse-transition>
          <ul v-show="report">
            <li v-for="item in reportList" :key="item.name" @click="ruoteSwitch(item)">{{item.name}}</li>
          </ul>
        </el-collapse-transition>
      </div>
    </div>
    <div class="index">
      <div class="content">
        <div @click="indexEvent" class="selected">
          <i class="iconfont icon-home"></i>首页
        </div>
        <div @click="personalEvent">
          <i class="iconfont icon-wode"></i>我的
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
import '../font/iconfont.css';
export default {
  data(){
    return{
      subMenu:true,
      report:false,//报告
      reportList: [
        {name:"压疮报告",path:"/PressureReport"},
        {name:"入院评估",path:"/toHospital"},
        {name:"Morse跌倒坠床评估",path:"/Fall"},
        {name:"导管风险评估及干预",path:"/RiskCatheter"},
        {name:"Barthel指数评定",path:"/Barthel"},
        {name:"疼痛评估记录表",path:"/painAssessment"}
      ]
    }
  },
  methods:{
    //点击菜单
    menuClick(){
      let nmb = $(".menuMask").css("left").indexOf("px");
      nmb = Number($(".menuMask").css("left").substring(1,nmb));
      if(document.body.clientWidth>document.body.clientHeight){
        if(nmb>=document.body.clientWidth){
          $(".menuMask").animate({"left":"-80%"},500);
          $(".menu").animate({"left":"20%"},500);
        }else{
          $(".menuMask").animate({"left":"-100%"},500);
          $(".menu").animate({"left":0},500);
          $(".menu").css("right","")
        }
      }else{
        if(nmb>=document.body.clientWidth){
          $(".menuMask").animate({"left":"0px"},500);
          $(".menu").animate({"right":"0px"},500);
          $(".menu").css("left","");
        }else{
          $(".menuMask").animate({"left":"-100%"},500);
          $(".menu").animate({"left":"0"},500);
          $(".menu").css("right","");
        }
      }
    },
    //内容点击关闭菜单
    ShutMenuClick(){
      $(".menuMask").animate({"left":"-100%"},500);
      if(document.body.clientWidth>document.body.clientHeight){
        $(".menu").animate({"left":0},500);
      }else{
        $(".menu").animate({"left":0},500);
        $(".menu").css("right","");
      }
    },
    //首页点击
    indexEvent(){
      this.subMenu = true;
      $(".content div:last-child").removeClass("selected");
      $(".content div:first-child").addClass("selected");
    },
    //个人点击
    personalEvent(){
      this.subMenu = false;
      $(".content div:first-child").removeClass("selected");
      $(".content div:last-child").addClass("selected");
      this.ShutMenuClick();
      this.$router.push('/User');
    },
    //报告点击
    reportClick(){
      if(this.report){
        this.report = false;
      }else{
        this.report = true;
      }
    },
    //路由切换
    ruoteSwitch(obj){
      if(obj.path){
        this.$router.push(obj.path);
        this.ShutMenuClick();
      }
    }
  }
}
</script>

<style>
  .whole{
    height:100%;
    width: 100%;
    position: relative;
  }
  .menu{
    font-size: 16px;
    width: 30px;
    height: 45px;
    text-align: center;
    color: white;
    line-height: 22px;
    padding: 10px 0px;
    background-color: rgba(25, 158, 216, 1);
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    position: absolute;
    /* left: 0; */
    z-index: 9999;
    top: calc(50% - 45px);
  }
  .menuMask{
    position: absolute;
    left: -100%;
    top: 0;
    z-index: 8888;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    border-right: solid 1px rgba(121, 121, 121, 1);
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
    not supported by any browser */
  }
  .menuMask>.index,.menuMask>.user{
    width: 10%;
    height: 100%;
    float: right;
    background-color: rgba(242, 242, 242, 1);
  }
  .menuMask>.user>div{
    cursor: pointer;
  }
  .menuMask>.user>div:nth-of-type(1)>div:nth-of-type(1){
    font-size: 18px;
    text-align: center;
    padding: 5px 0;
    border: solid 1px rgba(121, 121, 121, 1);
    border-right-width: 0px;
    border-left-width: 0px;
  }
  .menuMask>.user>div:nth-of-type(1)>div:nth-of-type(1)>i{
    font-size:32px;
  }
  .menuMask>.user>div:nth-of-type(1)>ul>li{
    font-size: 12px;
    border: solid 1px rgba(121, 121, 121, 1);
    padding: 6px 2px;
    border-top-width: 0px;
    border-right-width: 0px;
  }
  .menuMask>.index{
    background-color: rgba(25, 158, 216, 1); 
  }
  .menuMask>.index>.content{
    height: 200px;
    position: relative;
    top: calc(50% - 100px);
  }
  .menuMask>.index>.content>div{
    text-align: center;
    height: 50%;
    color: wheat;
    cursor: pointer;
  }
  .menuMask>.index>.content>div::after{
    content: "";
    display: inline-block;
    height: calc(100% + 20px);
    vertical-align: middle;
  }
  .menuMask>.index>.content>div>i{
    font-size: 40px;
  }
  .menuMask .selected{
    background-color: #fff;
    color: rgb(25, 158, 216) !important;
  }
  @media screen and (orientation:landscape){
    .menu{
      left: 0;
    }
  }
  @media screen and (orientation:portrait){
    .menu{
      position: fixed;
    }
    .menuMask>.index,.menuMask>.user{
      width: 50%;
    }
    .menuMask>.user>div:nth-of-type(1)>ul>li{
      font-size: 14px;
      padding: 12px 6px;
    }
  }
</style>
