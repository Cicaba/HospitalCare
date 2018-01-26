<template>
  <div id="haemorrhoids">
    <div style="text-align: center">
      <h1>四川省第二中医医院</h1>
      <h1>患者皮肤压疮、压疮预警报告表</h1>
    </div>
    <div style="padding-left:1.1em;margin-top: 40px;">
      <p>科室：ICU   患者姓名：XXX   病案号：12345   性别：女   年龄：33岁 </p>
      <p>护理级别：重症监护   诊断：骨折病   报告日期：2018年01月04日   填表人：新欢 </p>
    </div>
    <div class="contents">
      <div class="header_text">
        一、压疮危险因素评估
      </div>
      <div class="button_content">
        <div style="margin-top: 10px">
          <el-radio-group v-model="radio1">
            <el-radio-button label="是"></el-radio-button>
            <el-radio-button label="否"></el-radio-button>

          </el-radio-group>
          <!--<el-button :plain="true"  size="small" type="info">是</el-button>-->
          <!--<el-button :plain="true"  size="small" type="info">否</el-button>-->
        </div>
        <div style="margin-top: 10px">
          <p class="main_text">1.Braden评分 11分</p>
          <el-radio-group v-model="radio2">
            <el-radio-button label="轻度危险"></el-radio-button>
            <el-radio-button label="中度危险"></el-radio-button>
            <el-radio-button label="高度危险"></el-radio-button>

          </el-radio-group>


        </div>
        <el-row>
          <p>2.难免压疮申报评估</p>
          <p>（1）强迫体位：</p>
          <el-radio-group v-model="radio">
            <el-radio-button label="昏迷"></el-radio-button>
            <el-radio-button label="肝功能衰竭"></el-radio-button>
            <el-radio-button label="心力衰竭"></el-radio-button>
            <el-radio-button label="呼吸衰竭"></el-radio-button>
            <el-radio-button label="偏瘫"></el-radio-button>
            <el-radio-button label="高位截瘫"></el-radio-button>
          </el-radio-group>
        </el-row>
        <el-row>
          <p>（1）可选条件：</p>
          <el-radio-group v-model="radio3">
            <el-radio-button label="高龄（≥70岁）"></el-radio-button>
            <el-radio-button label="口清蛋白<30g/L"></el-radio-button>
            <el-radio-button label="极度消瘦"></el-radio-button>
            <el-radio-button label="高度水肿"></el-radio-button>
            <el-radio-button label="大小便失禁"></el-radio-button>
            <el-radio-button label="其它"></el-radio-button>
          </el-radio-group>
        </el-row>
        <el-row>
          <p>（1）其它高危警告：</p>
          <el-radio-group v-model="radio2">
            <el-radio-button label="是"></el-radio-button>
            <el-radio-button label="否"></el-radio-button>
          </el-radio-group>
        </el-row>
        <el-row style="margin-top: 0.5em" class="img_father">
          <el-col :xs="24" :sm="4">责任护士签名：<img src="../static/u68.jpg" alt=""></el-col>
          <el-col :xs="24" :sm="4">护士长签名：<img src="../static/u68.jpg" alt=""></el-col>
          <el-col :xs="24" :sm="4">主管部门签名：<img src="../static/u68.jpg" alt=""></el-col>
        </el-row>
        <el-row>
          <p>4.难免压疮申报：</p>
          <el-radio-group v-model="radios">
            <el-radio-button label="是"></el-radio-button>
            <el-radio-button label="否"></el-radio-button>
          </el-radio-group>
        </el-row>
        <el-row style="margin-top: 0.5em" class="img_father">
          <el-col :xs="24" :sm="4">责任护士签名：<img src="../static/u68.jpg" alt=""></el-col>
          <el-col :xs="24" :sm="4">护士长签名：<img src="../static/u68.jpg" alt=""></el-col>
          <el-col :xs="24" :sm="4">主管部门签名：<img src="../static/u68.jpg" alt=""></el-col>
        </el-row>
      </div>
      <div class="header_text">
        二、压疮报告
      </div>
      <div class="button_content two">
        <p> 1、压疮来源：</p>
        <el-radio-group v-model="radio4">
          <el-radio :label="3">科内
            <el-input></el-input>
          </el-radio>
          <el-radio :label="6">其他
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0">
            </el-date-picker>
          </el-radio>
          <el-radio :label="9">院内</el-radio>
        </el-radio-group>
        <p> 2、压疮情况：</p>
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button label="骶尾" :key="1">骶尾</el-checkbox-button>
          <el-checkbox-button label="髋部" :key="2">髋部</el-checkbox-button>
          <el-checkbox-button label="脊柱" :key="3">脊柱</el-checkbox-button>
          <el-checkbox-button label="肩甲" :key="4">肩甲</el-checkbox-button>
          <el-checkbox-button label="肘部" :key="5">肘部</el-checkbox-button>
          <el-checkbox-button label="膝部" :key="6">膝部</el-checkbox-button>
          <el-checkbox-button label="外踝" :key="7">外踝</el-checkbox-button>
          <el-checkbox-button label="足眼" :key="8">足眼</el-checkbox-button>
          <el-checkbox-button label="枕部" :key="9">枕部</el-checkbox-button>
          <el-checkbox-button label="耳廓" :key="10">耳廓</el-checkbox-button>
          <el-checkbox-button label="其他" :key="11">其他</el-checkbox-button>
        </el-checkbox-group>
        <el-row style="margin:10px 0;">
          <el-col :xs="4" :sm="1" style="line-height:2em">面积 ：</el-col>
          <el-col :xs="10" :sm="12">
            <el-input placeholder="长*宽*高"></el-input>
          </el-col>
        </el-row>
        <!--<el-row>-->
        <!--<el-col :xs="24" :sm="14">-->
        <el-checkbox-group v-model="checkList" class="checkList">
          <el-checkbox v-for="labe in labes_check" :label="labe" :key="labe"></el-checkbox>
        </el-checkbox-group>
        <!--</el-col>-->
        <div style="margin: 15px 0">
          3.疮面情况
        </div>
        <el-checkbox-group v-model="checkList_all">
          <el-checkbox-button label="骶尾" :key="1">红肿</el-checkbox-button>
          <el-checkbox-button label="髋部" :key="2">渗血渗液体(水泡)</el-checkbox-button>
          <el-checkbox-button label="脊柱" :key="3">溃烂</el-checkbox-button>
          <el-checkbox-button label="肩甲" :key="4">化脓</el-checkbox-button>
          <el-checkbox-button label="肘部" :key="5">坏死</el-checkbox-button>
          <el-checkbox-button label="膝部" :key="6">恶臭</el-checkbox-button>
          <el-checkbox-button label="外踝" :key="7">其他</el-checkbox-button>
        </el-checkbox-group>

      </div>
      <div class="header_text">
        三、压疮发生原因分析
      </div>
      <div class="button_content ">
        <el-checkbox-group v-model="checkList_all" style="margin: 15px 0">
          <el-checkbox-button label="骶尾" :key="1">疾病原因导致难避免</el-checkbox-button>
          <el-checkbox-button label="髋部" :key="2">护理措施不当</el-checkbox-button>
          <el-checkbox-button label="外踝" :key="7">其他</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div class="header_text">
       四、护理部质控追踪记录
      </div>
      <div class=" tree">
          <el-row>
            <el-col :xs="8" :sm="3"> 签字：<img src="../static/u68.jpg" alt=""></el-col>
            <el-col :xs="3" :sm="1" style="line-height: 2.5em">  时间：</el-col>
            <el-col :xs="5" :sm="3">
              <el-date-picker v-model="value4" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="8" :sm="3"> 签字：<img src="../static/u68.jpg" alt=""></el-col>
            <el-col :xs="3" :sm="1" style="line-height: 2.5em">  时间：</el-col>
            <el-col :xs="5" :sm="3">
              <el-date-picker v-model="value2" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="8" :sm="3"> 签字：<img src="../static/u68.jpg" alt=""></el-col>
            <el-col :xs="3" :sm="1" style="line-height: 2.5em">  时间：</el-col>
            <el-col :xs="5" :sm="3">
              <el-date-picker v-model="value3" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
            </el-col>
          </el-row>
      </div>
      <div class="header_text" >
        五、转院时间：2018年1月12日
      </div>
      <el-checkbox-group v-model="checkList_all" style="margin: 15px 0">
        <el-checkbox-button label="痊愈" :key="1">疾病原因导致难避免</el-checkbox-button>
        <el-checkbox-button label="部分愈合" :key="2">护理措施不当</el-checkbox-button>
        <el-checkbox-button label="未愈合" :key="3">其他</el-checkbox-button>
      </el-checkbox-group>
    </div>


  </div>
</template>
<script>
  export default{
    data(){
      return {
        radio: '',
        radio1: '',
        radio2: '',
        radio3: '',
        radio4: '',
        radios: '',
        value1: "",
        value2: "",
        value3: "",
        value4: "",
        checkList: [],
        checkList_one: [],
        checkList_all: [],
        checkList_alls:[],
        labes_check: [
          "第一期压疮淤血红润期——“红、肿、热、痛或麻木，持续30分钟不褪”在骨隆突处的皮肤完整伴有压之不褪色的局限性红斑。深色皮肤可能无明显的苍白改变，但其颜色可能与周围组织不同。",
          '第二期压疮炎性浸润期——“紫红、硬结、疼痛、水疱”，真皮部分缺失，表现为一个浅的开放性溃疡，伴有粉红色的伤口床（创面），无腐肉，也可能表现为一个完整的或破裂的血清性水疱',
          '第三期压疮浅度溃疡期——表皮破损、溃疡形成。典型特征：全层皮肤组织缺失，可见皮下脂肪暴露，但骨头、肌腱、肌肉未外露，有腐肉存在，但组织缺失的深度不明确，可能包含有潜行和隧道。',
          '第四期压疮坏死溃疡期——侵入真皮下层、肌肉层、骨面、感染扩展，典型特征：全层组织缺失，伴有骨、肌腱或肌肉外露，伤口床的某些部位有腐肉或焦痂，常常有潜行或隧道。',
          '无法分期的压疮典型特征：全层组织缺失，溃疡底部有腐肉覆盖（黄色、黄褐色、灰色、绿色或褐色），或者伤口床有焦痂附着（碳色、褐色或黑色）。'
        ],

        checkboxGroup1: [],
        pickerOptions0: {},
        cities: ['骶尾', '髋部', '脊柱', '肩甲', '肘部', '膝部', '外踝', '足眼', '枕部', '耳廓', '其他'],
      }
    }
  }
</script>
<style>
  body {
    font-size: 14px;
  }

  h1 {
    font-size: 2em;
  }

  @media screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }

  }
  .button_content.two .el-input__inner {
    width: 60%;
    margin: 0;
    padding: 0;
    height: 2em;
  }

  .button_content.two .el-date-editor .el-icon-circle-close {
    display: none;


  }

  .button_content .el-icon-date:before {
    content: "";
  }

  #haemorrhoids .el-checkbox-button__inner.is-focus, #haemorrhoids .el-checkbox-button.is-checked span {
    color: #fff;
  }

  #haemorrhoids .el-radio-button__inner, #haemorrhoids .el-checkbox-button__inner {
    /* ////////// */
    margin: 0 5px;
    border: 1px solid rgba(25, 158, 216, 1);
    border-radius: 5px;
    padding: 6px;
    color: rgba(25, 158, 216, 1);
    margin-bottom: 1em;

  }

  #haemorrhoids {
    padding-bottom: 30px;
  }

  #haemorrhoids .checkList .el-checkbox {
    margin-left: 2px;
    white-space: normal;
    /* 111111111 */
    
  }

  #haemorrhoids .checkList .el-checkbox__label {
    width: 70%;
  }

  #haemorrhoids .el-radio + .el-radio {
    margin: 0;
  }

  #haemorrhoids .el-radio {
    margin-bottom: 5px;
  }

  #haemorrhoids .el-input__icon :after {
    content: ''
  }
.tree{
  box-sizing: border-box;
  padding:0 .5em;
  margin:.5em 0;
 text-align: center;
}
.tree .el-input__inner, .tree  .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--date{
height:2em;
  width:10em;
}
.tree   .el-input__icon.el-icon-date{
display:none
}
  #haemorrhoids .el-radio-button.is-active span {
    color: #fff;
  }

  #haemorrhoids, #haemorrhoids .contents {
    width: 100%;
    height: 100%;
  }

  #haemorrhoids .el-col.el-col-24.el-col-xs-8.el-col-sm-2, #haemorrhoids .el-col.el-col-24.el-col-xs-9.el-col-sm-3 {
    margin-bottom: .5em;
  }

  #haemorrhoids .el-button--small {
    padding: 5px 8px;
  }

  #haemorrhoids, .main_text {

  }

  #haemorrhoids .button_content {
    padding-left: 4em;
    width: 100%;
    box-sizing: border-box;
  }
</style>
