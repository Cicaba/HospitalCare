<template>
  <div id="haemorrhoids">
    <div style="text-align: center">
      <h1>Barthel指数评定量表（2018年）</h1>
    </div>
    <div style="padding-left:1.1em;margin-top: 40px;">
      <p>姓名：毛盛林    性别：男    床号：47    年龄：72岁    住院号：70984</p>
    </div>
    <div class="contents">
        <div class="header_text">
        <el-row>
          <el-col :xs="8" :sm="18">
           评分项目
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
        <p>一、进食</p>
        <el-radio-group v-model="radio1">
          <el-radio-button label="自己在合理的时间内（约十秒钟吃一口）可用筷子取食眼前的失误。若需辅具时，应会自行穿脱（10分）"></el-radio-button>
          <el-radio-button label="需部分帮助（切面包、抹黄油、夹菜、盛饭等）（5分）"></el-radio-button>
          <el-radio-button label="依赖（0分）"></el-radio-button>
        </el-radio-group>
        <p>二、转移</p>
        <el-radio-group v-model="radio2">
          <el-radio-button label="自理（15分）"></el-radio-button>
          <el-radio-button label="需要少量帮助（1人）或语言指导（10分）"></el-radio-button>
          <el-radio-button label="需两人或1个强壮、动作娴熟的人帮助（5分）"></el-radio-button>
          <el-radio-button label="完全依赖别人（0分）"></el-radio-button>
        </el-radio-group>
        <p>三修饰</p>
        <el-radio-group v-model="radio3">
          <el-radio-button label="可独立完成洗脸、洗手、刷牙及梳头（5分）"></el-radio-button>
          <el-radio-button label="需要别人帮忙"></el-radio-button>
        </el-radio-group>
        <p>四、上厕所</p>
        <el-radio-group v-model="radio4">
          <el-radio-button label="可自行进出厕所，并能穿好衣服。使用便盆者，可自行清理便盆（10分）"></el-radio-button>
          <el-radio-button label="需帮忙保持姿势的平衡，整理衣物或使用卫生纸，使用便盆者，可自行取放便盆，但须仰赖他人的清理（5分）"></el-radio-button>
          <el-radio-button label="需要别人帮忙（10分）"></el-radio-button>
        </el-radio-group>
        <p>五、洗澡</p>
        <el-radio-group v-model="sleep">
          <el-radio-button label="可独立完成（不论是盆浴或淋浴）（5分）"></el-radio-button>
          <el-radio-button label="需要别人帮忙（0分）"></el-radio-button>
        </el-radio-group>
        <p>六、行走（平地45m）</p>
        <el-radio-group v-model="langrage">
          <el-radio-button label="使用或不使用辅具皆可独立行走50公尺以上（15分）"></el-radio-button>
          <el-radio-button label="需要稍微的扶持或口头指导方可行走50公尺以上（10分）"></el-radio-button>
          <el-radio-button label="虽无法行走，但可独立操纵轮椅（包括转弯、进门、及接近桌子、床沿）并可推行轮椅50公尺以上（5分）"></el-radio-button>
          <el-radio-button label="需要别人帮忙（0分）"></el-radio-button>

        </el-radio-group>
        <p>七、上下楼梯</p>
        <el-radio-group v-model="radio4">
          <el-radio-button label="可自行上下楼梯（10分）"></el-radio-button>
          <el-radio-button label="需要稍微帮忙或口头指导（5分）"></el-radio-button>
          <el-radio-button label="虽无法行走，但可独立操纵轮椅（包括转弯、进门、及接近桌子、床沿）并可推行轮椅50公尺以上（5分）"></el-radio-button>
          <el-radio-button label="无法上下楼梯（0分）"></el-radio-button>

        </el-radio-group>
        <p>八、穿脱衣服</p>
        <el-radio-group v-model="sleep">
          <el-radio-button label="可自行穿脱衣服、鞋子及辅具（10分）"></el-radio-button>
          <el-radio-button label="在别人帮忙下，可自行完成一半以上的动作（5分）"></el-radio-button>
          <el-radio-button label="虽无法行走，但可独立操纵轮椅（包括转弯、进门、及接近桌子、床沿）并可推行轮椅50公尺以上（5分）"></el-radio-button>
          <el-radio-button label="需要别人帮忙（0分）"></el-radio-button>
        </el-radio-group>
        <p>九、大小便控制</p>
        <el-radio-group v-model="methos">
          <el-radio-button label="能控制（10分）"></el-radio-button>
          <el-radio-button label="偶尔失禁（每周〈1次)或尿急（无法等待便盆或无法及时赶到厕所）或需别人帮忙处理）（5分）"></el-radio-button>
          <el-radio-button label="失禁、昏迷或需要他人导尿（0分）"></el-radio-button>
        </el-radio-group>
        <p>总分：</p>
      </div>
      <div class="header_text">
      评分标准
      </div>
      <div class="text_all">
        <p style="margin-bottom: 1em">最高分100分。〉60分，良，有轻度功能障碍，生活基本自理；41~60分，中度功能障碍，日常生活需要帮助；21~40分：重度功能障碍，日常生活明显依赖；≤20,分：完全功能障碍，日常生活完全依赖。</p>
<table></table>
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
.el-radio-button__inner{
  white-space:normal;
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
