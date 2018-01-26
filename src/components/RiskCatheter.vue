<template>
  <div id="haemorrhoids">
    <div style="text-align: center">
      <h1>四川省第二中医院</h1>
      <h1>患者导管风险评估及干预措施记录</h1>
    </div>
    <div style="padding-left:1.1em;margin-top: 40px;">
      <p>特别：住院内科   床号：47    姓名：毛盛林    性别：男</p>
      <p>年龄：72岁    住院号：70984    入院日期：2018年01月03日11时1分 </p>
    </div>
    <div class="contents">
        <div class="header_text">
        <el-row>
          <el-col :xs="8" :sm="18">
            一、评分项目
          </el-col>
          <el-col :xs="16" :sm="6" style='text-align:right'>
            <el-row>
              <el-col :xs="11" :sm="7" style="text-align: left">
                评分日期:
              </el-col>
              <el-col :xs="12" :sm="8">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  :editable="false"
                  placeholder="选择日期"
                  :picker-options="pickerOptions0">
                </el-date-picker>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

      </div>



      <div class="text_all">
        <p>导管种类</p>
        <p>（1）各3分</p>
        <el-radio-group v-model="radio1">
          <el-radio-button label="胸腔引流管"></el-radio-button>
          <el-radio-button label="T型引流管"></el-radio-button>
          <el-radio-button label="器官插管"></el-radio-button>
          <el-radio-button label="动静脉插管"></el-radio-button>
          <el-radio-button label="脑室引流管"></el-radio-button>
        </el-radio-group>
        <p>（2）各2分</p>
        <el-radio-group v-model="radio2">
          <el-radio-button label="腹腔引流管"></el-radio-button>
          <el-radio-button label="深静脉引流管"></el-radio-button>
          <el-radio-button label="深静脉引流管"></el-radio-button>
          <el-radio-button label="三腔营养管"></el-radio-button>
          <el-radio-button label="造痿管"></el-radio-button>
          <el-radio-button label="器官切开"></el-radio-button>
          <el-radio-button label="其他"></el-radio-button>
        </el-radio-group>
        <p>（3）各1分</p>
        <el-radio-group v-model="radio3">
          <el-radio-button label="导尿管"></el-radio-button>
          <el-radio-button label="输液管"></el-radio-button>
          <el-radio-button label="胃管"></el-radio-button>
          <el-radio-button label="氧气管"></el-radio-button>
        </el-radio-group>
        <p>2.2.危险因素（烦躁：4分    意识不清：3分    幼儿（7〈年龄〉70岁）/痴呆：2分    不配合：2分）</p>
        <el-radio-group v-model="methos">
          <el-radio-button label="烦躁"></el-radio-button>
          <el-radio-button label="意识不清"></el-radio-button>
          <el-radio-button label="幼儿（7〈年龄〉70岁）/痴呆"></el-radio-button>
          <el-radio-button label="不配合"></el-radio-button>
        </el-radio-group>
        <p>总分：30分</p>
      </div>
      <div class="header_text">
        要求
      </div>
      <div class="text_all">
        <p>1、风险评估表总分40分</p>
        <p>2、分值≥10分，患者有拔管风险，应采取预防措施。</p>
        <p>3、有拔管风险患者应有护理记录，并根据患者具体情况实施再评估。</p>
        <p>4、新病人带管入院要评估，常规每周评2次，病情变化导管增减要评估。</p>
        <p>5、大于10分每天写：导管通常，固定稳妥。</p>

      </div>


    </div>

  </div>


</template>
<script>
  export default{
    data(){
      return {
        maried: '',
        allergy: '',
        metho: "",
        methos: "",
        xiaobian: '',
        sleep: "",
        beach: "",
        like: '',
        langrage: '',
        huxi: "",
        eat: '',
        kouke: '',
        checkout: [],
        maixiang: "",
        wanfu: '',
        kesou: '',
        tingli: '',
        xiuqi: "",
        feace: '',
        xintai: '',
        setou: '',
        setai: '',
        pifu: '',
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
        life: '',
        diedao: '',
        manxin: '',
        love: '',
        Know: '',
        famay: '',
        jinji: '',
        jibie: "",
        read: '',
        checkList_one: [],
        checkList_all: [],
        checkList_alls: [],
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
  #haemorrhoids .inline_clock_check .el-checkbox {
    display: block;
    margin: 0;
  }

  #haemorrhoids .el-date-editor.el-input {
    width: 100%;
  }

  #haemorrhoids .label {
    display: inline-block;
    vertical-align: top;
    margin-top: 5px;
  }

  #haemorrhoids .el-date-editor.el-date-editor--date input {
    height: 2em;

  }

  #haemorrhoids .el-input--suffix .el-input__inner {
    padding-right: 0

  }

  body {
    font-size: 14px;
    margin: 0;
  }

  h1 {
    font-size: 2em;
  }

  @media screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }

  }

  .img_father img, .tree img {
    margin-bottom: 10px;
    width: 5em;
    height: 2em;
    vertical-align: middle;
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

  .tree {
    box-sizing: border-box;
    padding: 0 .5em;
    margin: .5em 0;
    text-align: center;
  }

  .tree .el-input__inner, .tree .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--date {
    height: 2em;
    width: 10em;
  }

  .tree .el-input__icon.el-icon-date {
    display: none
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

  #haemorrhoids .el-button.el-button--info.is-plain {
    background: #fff;
    color: rgba(25, 158, 216, 1);
    border-color: rgba(25, 158, 216, 1);
  }

  #haemorrhoids .el-button--info.is-plain:focus, .el-button--info.is-plain:hover {
    /*background: rgba(25, 158, 216, 1);*/
    color: #fff;
    border-color: rgba(25, 158, 216, 1);
  }

  .text_all {
    padding-left: 1.5em;
  }

  .text_all_p {
    margin: 5px 0;
  }

  #haemorrhoids .header_text {
    box-sizing: border-box;
    padding-left: 20px;
    width: 100%;
    font-size: 18px;
    color: #fff;
    line-height: 35px;
    height: 38px;
    background: rgba(25, 158, 216, 1);
  }

</style>
