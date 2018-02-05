<template>
  <div class="pain">
    <h1>疼痛评估记录表</h1>
    <div style="margin-top:40px;text-indent:20px">
      <p>姓名：杜秋兰    性别：女    年龄：58岁    床号：46    住院号：71078    </p>
    </div>
    <div class="header_text">
      NSR评估表：
    </div>
    <!-- 菜单及分页容器-->
    <div class="stepCont stepCont3">
      <div v-if="show">疼痛等级: 1 - 3微痛;&emsp;4 - 7中度疼痛&emsp;8 - 10重度疼痛</div>
      <!-- 菜单导航显示-->
      <div class='ystep-container ystep-lg ystep-blue'></div>
      <!-- 分页容器-->
      <div class="pageCont">
        <div id="page1" class="stepPage">
        </div>
        <div id="page2" class="stepPage">
        </div>
        <div id="page3" class="stepPage">
        </div>
        <div id="page4" class="stepPage">
        </div>
        <div id="page5" class="stepPage">
        </div>
      </div>
    </div>
    <div v-for="itme in nmb" :key="itme">
      <div class="header_text" style="margin-top:40px">
      疼痛评估
      <div style="width:250px;float:right">
        <el-form>
          <el-form-item label="评估日期:">
            <el-date-picker style="width:140px" v-model="time" placeholder="请选择" :editable="false"></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      </div>
      <div class="content">
        <el-row>
          <el-col :span="12">
            时间 : 17:48
          </el-col>
          <el-col :span="12">
            部位 : 腹部
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            疼痛评分 : 10分
          </el-col>
          <el-col :span="12">
            持续时间 : 30分钟
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            睡眠影响 : 无法入睡
          </el-col>
          <el-col :span="12">
            评估日期 : 2018-1-12
          </el-col>
        </el-row>
      </div>
      <div class="measures">处理措施</div>
      <div style="margin-top: 10px" class="button_content">
        <el-radio-group v-model="radio1">
          <el-radio-button label="非药物疗法：心理疏导/冷敷/牵引/热敷/患肢抬高"></el-radio-button>
          <el-radio-button label="药物治疗"></el-radio-button>
          <el-radio-button label="其他"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div style="margin:20px 0;">
      <div style="width:140px;margin:0 auto;line-height:40px;">
        <el-button type="primary" plain @click="add">新增评估</el-button>
        <i class="iconfont icon-jia" style="color:#0f0;font-size:18px"></i>
      </div>
    </div>
  </div>
</template>
<script>
import '../style/ystep.css';
export default {
  data(){
    return {
      degree:1,//疼痛程度
      time:null,
      radio1:null,
      show:false,
      nmb:[1]
    }
  },
  created(){
    this.Step();
  },
  methods: {
    Step(){
      if(document.body.clientWidth<document.body.clientHeight){
        this.show = true;
      }else{
        this.show = false;
      }
      /**
       * Created by changwang.song on 2017/12/26.
       */
      function extend(obj1,obj2){
          for(var attr in obj2){
              obj1[attr] =  obj2[attr];
          }
      }
      let _this = this;
      function SetStep(arg){
          this.body=document.body;
          this.opt = {
              show:false,
              content:'.stepCont',
              pageCont:'.pageCont',
              imgWidth:20,
              stepContainerMar:20,
              nextBtn:'.nextBtn',
              prevBtn:'.prevBtn',
              steps:['0无痛','1','2轻度疼痛','3','4','5中度疼痛','6','7','8重度痛','9','10'],
              //pageClass:'',//分页的类或则id
              stepCounts:10,//总共的步骤数
              curStep:1,//当前显示第几页
              animating:false,
              showBtn:false,//是否生成上一步下一步操作按钮
              clickAble:true,//是否可以通过点击进度条的节点操作进度
              onLoad: function(){
              }
          }
          if(document.body.clientWidth<document.body.clientHeight){
            this.opt.steps=["0","1","2","3","4","5","6","7","8","9","10"]
          }
          this.init(arg)
      }
      //初始化 生成页面的进度条和按钮
      SetStep.prototype.init=function(arg){
          var _that=this;
          extend(this.opt,arg);
          this.opt.stepCounts=this.opt.steps.length;
          this.content=$(this.opt.content);
          this.pageCont=this.content.find(this.opt.pageCont)
          var w_con=$(this.content).width();
          var w_li=(w_con-this.opt.stepContainerMar*2)/this.opt.stepCounts/2;
          var stepContainer=this.content.find('.ystep-container');
          this.stepContainer=stepContainer;
          var stepsHtml=$("<ul class='ystep-container-steps'></ul>");
          var stepDisc = "<li class='ystep-step ystep-step-undone'></li>";
          var stepP=$("<div class='ystep-progress'>"+
                      "<p class='ystep-progress-bar'><span class='ystep-progress-highlight' style='width:0%'></span></p>"+
                  "</div>");
          var stepButtonHtml =$( "<div class='step-button'><button type='button' class='btn btn-default prevBtn' id='prevBtn' class='prevBtn'>上一步</button>"+
                              "<button type='button' class='btn btn-default nextBtn' id='nextBtn' class='nextBtn'>下一步</button></div>");
          stepP.css('width',w_li*2*(this.opt.stepCounts-1));
          stepP.find('.ystep-progress-bar').css('width',w_li*2*(this.opt.stepCounts-1))
          for(var i=0;i<this.opt.stepCounts;i++){
              if(i==0){
                  var _s=$(stepDisc).text(this.opt.steps[i]).addClass('')
              }else{
                  var _s=$(stepDisc).text(this.opt.steps[i])
              }
              stepsHtml.append(_s);
          }
          if(document.body.clientWidth>document.body.clientHeight){
            stepsHtml.find('li').css('width','100px').css('marginRight',w_li*2-100)
          }else{
            stepsHtml.find('li').css('width','40px').css('marginRight',w_li*2-40)
          }
          stepContainer.append(stepsHtml).append(stepP);
          
          stepContainer.css('left',(w_con-stepP.width()-this.opt.imgWidth-10-this.opt.stepContainerMar*2)/2)
          this.content.css('overflow','hidden')
          this.setProgress(this.stepContainer,_this.degree,this.opt.stepCounts)
          //判断参数 是否显示按钮 并绑定点击事件
          if(this.opt.showBtn){
              this.content.append(stepButtonHtml)
              this.prevBtn=this.content.find(this.opt.prevBtn)
              this.nextBtn=this.content.find(this.opt.nextBtn)
              this.prevBtn.on('click',function(){
                  // if($(this).hasClass('handleAble')){
                  if($(_that).attr('disabled')||_that.opt.animating){
                      return false;
                  }else{
                      _that.opt.animating=true;
                      _that.opt.curStep--;
                      _that.setProgress(_that.stepContainer,_that.opt.curStep,_that.opt.stepCounts)
                  }
              })
              this.nextBtn.on('click',function(){
                  // if($(this).hasClass('handleAble')){
                  if($(_that).attr('disabled')||_that.opt.animating){
                      return false;
                  }else{
                      _that.opt.animating=true;
                      _that.opt.curStep++;
                      _that.setProgress(_that.stepContainer,_that.opt.curStep,_that.opt.stepCounts)
                  }
              })
          }
          //判断时候可点击进度条 并绑定点击事件
          if(this.opt.clickAble){
              stepsHtml.find('li').on('click',function(e){
                  _that.opt.curStep=$(this).index()+1;
                  _this.degree =  _that.opt.curStep;
                  _that.setProgress(_that.stepContainer,_that.opt.curStep,_that.opt.stepCounts)
              })
          }
          $(window).resize(function(){
              var w_con=$(_that.content).width();
              var w_li=w_con/_that.opt.stepCounts/2;
              stepP.css('width',w_li*2*(_that.opt.stepCounts-1));
              stepP.find('.ystep-progress-bar').css('width',w_li*2*(_that.opt.stepCounts-1))
              if(document.body.clientWidth>document.body.clientHeight){
                stepsHtml.find('li').css('width','100px').css('marginRight',w_li*2-100)
              }else{
                stepsHtml.find('li').css('width','40px').css('marginRight',w_li*2-40)
              }
              stepContainer.css('left',(w_con-stepP.width()-_that.opt.imgWidth-10-_that.opt.stepContainerMar*2)/2)
          })
      }
      //设置进度条
      SetStep.prototype.setProgress=function(n,curIndex,stepsLen){
            var _that=this;
              //获取当前容器下所有的步骤
              var $steps = $(n).find("li");
              var $progress =$(n).find(".ystep-progress-highlight");
              //判断当前步骤是否在范围内
              if(1<=curIndex && curIndex<=$steps.length){
                //更新进度
                var scale = "%";
                scale = Math.round((curIndex-1)*100/($steps.length-1))+scale;
                $progress.animate({
                  width: scale
                },{
                  speed: 1000,
                  done: function() {
                    //移动节点
                    $steps.each(function(j,m){
                      var _$m = $(m);
                      var _j = j+1;
                      if(_j < curIndex){
                        _$m.attr("class","ystep-step-done");
                      }else if(_j === curIndex){
                        _$m.attr("class","ystep-step-active");
                      }else if(_j > curIndex){
                        _$m.attr("class","ystep-step-undone");
                      }
                    })
                    if(_that.opt.showBtn){
                        if(curIndex==1){
                            _that.prevBtn.attr('disabled','true')
                            _that.nextBtn.removeAttr('disabled')
                        }else if(curIndex==stepsLen){
                            _that.prevBtn.removeAttr('disabled')
                            _that.nextBtn.attr('disabled','true')
                        }else if(1<curIndex<stepsLen){
                            _that.prevBtn.removeAttr('disabled')
                            _that.nextBtn.removeAttr('disabled')
                        }
                    }
                    _that.checkPage(_that.pageCont,_that.opt.curStep,_that.opt.stepCounts)
                    _that.opt.animating=false;
                  }
                });  
              }else{
                  return false;
              }
      }
      //改变 分页显示
      SetStep.prototype.checkPage=function(pageCont,curStep,steps){
          for(var i = 1; i <= steps; i++){
              if(i === curStep){
                pageCont.find('#page'+i).css("display","block");
              }else{
                pageCont.find('#page'+i).css("display","none");
              }
          }
      }
      this.$nextTick(()=>{
        new SetStep({
          content:'.stepCont3'
        })
      })
    },
    add(){
      this.nmb.push(1)
    }
  }
};
</script>

<style>
.pain > h1 {
  text-align: center;
}
.pain .header_text .el-form-item__label{
  color: #fff;
}
.pain .content{
  padding: 20px;
  font-size: 22px;
}
.pain .content .el-col-12{
  margin: 10px 0;
}
.pain .measures{
  line-height: 40px;
  font-size: 18px;
  text-indent: 20px;
  height: 40px;
  background-color: rgba(242, 242, 242, 1);
}
.button_content{
  padding-left: 20px; 
}
.button_content .el-checkbox-button__inner.is-focus,.button_content .el-checkbox-button.is-checked span {
    color: #fff;
  }

.button_content .el-radio-button__inner,.button_content .el-checkbox-button__inner {
    /* ////////// */
    margin: 0 5px;
    border: 1px solid rgba(25, 158, 216, 1) !important;
    border-radius: 5px !important;
    padding: 6px;
    color: rgba(25, 158, 216, 1);
    margin-bottom: 1em;

  }
   @media screen and (orientation:portrait){
     .pain .content{
        padding: 20px;
        font-size: 16px;
      }
   }
</style>
