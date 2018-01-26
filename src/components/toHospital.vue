<template>
  <div id="haemorrhoids">
    <div style="text-align: center">
      <h1>四川省第二中医医院</h1>
      <h1>中医护理（首次）评估记录</h1>
    </div>
    <div style="padding-left:1.1em;margin-top: 40px;">
      <p>特别：住院内科（1） 床号：4 住院号：70998 入院日期：2018年1月03日14时47分</p>
      <p>姓名：邓小荣  性别：女   年龄：47岁   职业：职员    民族：汉族     文化程度：高中 </p>
    </div>
    <div style="padding-left:1.1em">
      <div class="rowss">
        <span class="label">婚否:</span>
        <el-radio-group v-model="maried">
          <el-radio-button label="已婚"></el-radio-button>
          <el-radio-button label="未婚"></el-radio-button>
          <el-radio-button label="丧偶"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="rowss">
        <el-row>
          <el-col :xs="9" :sm="3">
            <span class="label">过敏史:</span>
            <el-radio-group v-model="allergy">
              <el-radio-button label="有"></el-radio-button>
              <el-radio-button label="无"></el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :xs="12" :sm="19">
            <el-input type="textarea"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="rowss" style="margin-top: .3em">
        <el-row>
          <el-col :xs="4" :sm="2"><span class="label">入院方式:</span></el-col>
          <el-col :xs="20" :sm="20">

            <el-radio-group v-model="metho">
              <el-radio-button label="步行"></el-radio-button>
              <el-radio-button label="扶行"></el-radio-button>
              <el-radio-button label="轮椅"></el-radio-button>
              <el-radio-button label="平车"></el-radio-button>
              <el-radio-button label="担架"></el-radio-button>
              <el-radio-button label="背入"></el-radio-button>
              <el-radio-button label="其他"></el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
      </div>
      <span class="label" style="margin-bottom: 1em">发病季节:冬至后6天</span>
    </div>
    <div class="contents">
      <div class="header_text">
        入院诊断
      </div>
      <div class="text_all">
        <p class="text_all_p">中医：肾衰    辩证分型：脾肾阳虚</p>
        <p class="text_all_p">中医：肾衰    辩证分型：脾肾阳虚</p>
        <p class="text_all_p">主述：维持血液透析6年，心慌气短2+月</p>
        <p class="text_all_p">
          主要病情：1、患者为中年女性。2.患者缘于4月前反复感冒后，出现双眼睑水肿伴发热，体温不详，
          无腰酸腰痛、头晕头痛、恶心呕吐、腹痛腹泻等症状，就诊于当地县医院，
          测血压140/80mmHg,查尿蛋白3+，血肌酐800um/L，胸部正位片示：肺部重度感染，
          24小时尿蛋白定量3.6g/24h,肾脏彩超示：右肾长88cm ，左肾84cm,诊断为“慢性肾小球肾炎，
          肾功能不全，尿毒症期，肾性高血压”。转诊至**市人民医院，给予对症药物治疗（具体药物不详）
          结合血液透析对症治疗，治疗效果不佳，后转往**市第一附属医院，查血肌酐为1020um/L，
          给予激素及降压治疗（具体种类及剂量不详），每三天一次透析，住院期间，症状好转，
          25天前复查血肌酐为620um/，患者自动出院。出院后于当地县医院门诊规律透析及纠正贫血、
          补钙等对症治疗，复查血毒素升高。患者于15天前出现胸闷不能平卧，偶有咳嗽，无咯血，
          并伴有双下肢轻度水肿，为求进一步治疗而来我院就诊。门诊以“慢性肾小球肾炎，慢性肾功能不全
          、尿毒症期，”收入我科。患者自发病来，精神、饮食、睡眠差，小便200-300ml。查体：
          体温36.9℃，脉搏80次／分，呼吸20次／分，血压 100/80mmHg，发育正常，体型适中，神志清楚
          ，查体合作，口唇无发绀，眼睑轻度水肿，甲状腺不大，双肺呼吸音低，可闻及散在湿罗音，心界扩
          大，心率80次/分，心律不齐，呈奔马律，各瓣膜听诊区未闻及明显病理性杂音，双下肢中度浮肿，
          予以急查电解质K6.13mmol/L，HGb 84g/L,BUN　CREA UA予以急行血液透析治疗，症状好转。
        </p>

      </div>
      <div class="header_text">
        一、生命体征
      </div>
      <div class="text_all">
      <p>T36.3℃，P76次/分，R19次/分，BP125/72hhHg,体重：65kg</p>
      </div>
        <div class="header_text">
          二、四诊内容
        </div>
        <div class="text_all">
          <p>（一）望诊</p>
          <p>1.神志</p>
          <el-radio-group v-model="methos">
            <el-radio-button label="有神"></el-radio-button>
            <el-radio-button label="倦怠"></el-radio-button>
            <el-radio-button label="烦躁"></el-radio-button>
            <el-radio-button label="嗜睡"></el-radio-button>
            <el-radio-button label="谵妄"></el-radio-button>
            <el-radio-button label="昏迷"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>2.面色</p>
          <el-radio-group v-model="feace">
            <el-radio-button label="红润"></el-radio-button>
            <el-radio-button label="如常"></el-radio-button>
            <el-radio-button label="两颊潮红"></el-radio-button>
            <el-radio-button label="苍白"></el-radio-button>
            <el-radio-button label="萎黄"></el-radio-button>
            <el-radio-button label="无光泽"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>3.形态</p>
          <el-radio-group v-model="xintai">
            <el-radio-button label="自如"></el-radio-button>
            <el-radio-button label="半身不遂"></el-radio-button>
            <el-radio-button label="步履艰难"></el-radio-button>
            <el-radio-button label="不得平卧"></el-radio-button>
            <el-radio-button label="双下肢活动受限"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>4.皮肤</p>
          <el-radio-group v-model="pifu">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="感染"></el-radio-button>
            <el-radio-button label="苍白"></el-radio-button>
            <el-radio-button label="紫绀"></el-radio-button>
            <el-radio-button label="压疮"></el-radio-button>
            <el-radio-button label="潮红"></el-radio-button>
            <el-radio-button label="溃烂"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>5.皮肤</p>
          <el-row>
            <el-col :sm="1" :xs="2"><span style="vertical-align: top">舌质:</span></el-col>
            <el-col :sm="22" :xs="21">
              <el-radio-group v-model="setou">
                <el-radio-button label="淡红"></el-radio-button>
                <el-radio-button label="淡白"></el-radio-button>
                <el-radio-button label="红绛"></el-radio-button>
                <el-radio-button label="暗紫"></el-radio-button>
                <el-radio-button label="其他"></el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="1" :xs="2"><span style="vertical-align: top">舌苔:</span></el-col>
            <el-col :sm="22" :xs="21">
              <el-radio-group v-model="setai">
                <el-radio-button label="薄白"></el-radio-button>
                <el-radio-button label="薄黄"></el-radio-button>
                <el-radio-button label="黄厚"></el-radio-button>
                <el-radio-button label="燥裂"></el-radio-button>
                <el-radio-button label="腐"></el-radio-button>
                <el-radio-button label="腻"></el-radio-button>
                <el-radio-button label="其他"></el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>
        </div>
        <div class="text_all">
          <p>（二）闻诊</p>
          <p>1.语言</p>
          <el-radio-group v-model="langrage">
            <el-radio-button label="清楚"></el-radio-button>
            <el-radio-button label="语言低微"></el-radio-button>
            <el-radio-button label="失语"></el-radio-button>
            <el-radio-button label="呻吟"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>2.呼吸</p>
          <el-radio-group v-model="huxi">
            <el-radio-button label="如常"></el-radio-button>
            <el-radio-button label="气促"></el-radio-button>
            <el-radio-button label="呼吸缓慢"></el-radio-button>
            <el-radio-button label="喘息气粗"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>3.咳嗽</p>
          <el-radio-group v-model="kesou">
            <el-radio-button label="无"></el-radio-button>
            <el-radio-button label="无痰"></el-radio-button>
            <el-radio-button label="白痰"></el-radio-button>
            <el-radio-button label="黄痰"></el-radio-button>
            <el-radio-button label="铁锈色痰"></el-radio-button>
            <el-radio-button label="血痰"></el-radio-button>
          </el-radio-group>
          <p>4.嗅气味</p>
          <el-radio-group v-model="xiuqi">
            <el-radio-button label="无异常"></el-radio-button>
            <el-radio-button label="臭"></el-radio-button>
            <el-radio-button label="腥臭"></el-radio-button>
            <el-radio-button label="酸臭"></el-radio-button>
            <el-radio-button label="腐臭"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>5.皮肤</p>
          <el-row>
            <el-col :sm="1" :xs="2"><span style="vertical-align: top">舌质:</span></el-col>
            <el-col :sm="22" :xs="21">
              <el-radio-group v-model="setou">
                <el-radio-button label="淡红"></el-radio-button>
                <el-radio-button label="淡白"></el-radio-button>
                <el-radio-button label="红绛"></el-radio-button>
                <el-radio-button label="暗紫"></el-radio-button>
                <el-radio-button label="其他"></el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>
          <el-row>
            <el-col :sm="1" :xs="2"><span style="vertical-align: top">舌苔:</span></el-col>
            <el-col :sm="22" :xs="21">
              <el-radio-group v-model="setai">
                <el-radio-button label="薄白"></el-radio-button>
                <el-radio-button label="薄黄"></el-radio-button>
                <el-radio-button label="黄厚"></el-radio-button>
                <el-radio-button label="燥裂"></el-radio-button>
                <el-radio-button label="腐"></el-radio-button>
                <el-radio-button label="腻"></el-radio-button>
                <el-radio-button label="其他"></el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>
        </div>
        <div class="text_all">
          <p>（三）问诊</p>
          <p>1.饮食</p>
          <el-radio-group v-model="eat">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="纳呆"></el-radio-button>
            <el-radio-button label="多饮易饥"></el-radio-button>
            <el-radio-button label="留置胃管"></el-radio-button>
            <el-radio-button label="恶心呕吐"></el-radio-button>
            <el-radio-button label="紧食"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>2.口渴</p>
          <el-radio-group v-model="kouke">
            <el-radio-button label="口不渴"></el-radio-button>
            <el-radio-button label="口渴欲饮"></el-radio-button>
            <el-radio-button label="口渴不欲饮"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>3.听力</p>
          <el-radio-group v-model="tingli">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="下降"></el-radio-button>
            <el-radio-button label="耳聋"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>4.睡眠</p>
          <el-radio-group v-model="sleep">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="难入寐"></el-radio-button>
            <el-radio-button label="易醒"></el-radio-button>
            <el-radio-button label="彻夜不寐"></el-radio-button>
            <el-radio-button label="多梦"></el-radio-button>
            <el-radio-button label="早醒"></el-radio-button>
            <el-radio-button label="辅助用药"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>5.大便</p>
          <el-radio-group v-model="sleep">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="难入寐"></el-radio-button>
            <el-radio-button label="易醒"></el-radio-button>
            <el-radio-button label="彻夜不寐"></el-radio-button>
            <el-radio-button label="多梦"></el-radio-button>
            <el-radio-button label="早醒"></el-radio-button>
            <el-radio-button label="辅助用药"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>6.小便</p>
          <el-radio-group v-model="xiaobian">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="频数"></el-radio-button>
            <el-radio-button label="寝闭"></el-radio-button>
            <el-radio-button label="尿少"></el-radio-button>
            <el-radio-button label="失禁"></el-radio-button>
            <el-radio-button label="留置尿管"></el-radio-button>
            <el-radio-button label="造痿"></el-radio-button>
            <el-radio-button label="血尿"></el-radio-button>
            <el-radio-button label="浑浊"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <div>
            <p>7.嗜好:</p>
            <el-radio-group v-model="like">
              <el-radio-button label="无特殊"></el-radio-button>
              <el-radio-button label="吸烟"></el-radio-button>
              <el-radio-button label="饮酒"></el-radio-button>
              <el-radio-button label="酸"></el-radio-button>
              <el-radio-button label="甜"></el-radio-button>
              <el-radio-button label="辣"></el-radio-button>
              <el-radio-button label="肥甘"></el-radio-button>
              <el-radio-button label="其他"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="text_all">
          <p>（四）切诊</p>
          <p>1.脉象</p>
          <el-radio-group v-model="maixiang">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="浮"></el-radio-button>
            <el-radio-button label="沉"></el-radio-button>
            <el-radio-button label="迟"></el-radio-button>
            <el-radio-button label="数"></el-radio-button>
            <el-radio-button label="弦"></el-radio-button>
            <el-radio-button label="滑"></el-radio-button>
            <el-radio-button label="涩"></el-radio-button>
            <el-radio-button label="洪"></el-radio-button>
            <el-radio-button label="细"></el-radio-button>
            <el-radio-button label="结代"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>2.脘腹</p>
          <el-radio-group v-model="wanfu">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="胀满"></el-radio-button>
            <el-radio-button label="腹痛拒按"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>3.听力</p>
          <el-radio-group v-model="tingli">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="下降"></el-radio-button>
            <el-radio-button label="耳聋"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>4.睡眠</p>
          <el-radio-group v-model="sleep">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="难入寐"></el-radio-button>
            <el-radio-button label="易醒"></el-radio-button>
            <el-radio-button label="彻夜不寐"></el-radio-button>
            <el-radio-button label="多梦"></el-radio-button>
            <el-radio-button label="早醒"></el-radio-button>
            <el-radio-button label="辅助用药"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>5.大便</p>
          <el-radio-group v-model="sleep">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="难入寐"></el-radio-button>
            <el-radio-button label="易醒"></el-radio-button>
            <el-radio-button label="彻夜不寐"></el-radio-button>
            <el-radio-button label="多梦"></el-radio-button>
            <el-radio-button label="早醒"></el-radio-button>
            <el-radio-button label="辅助用药"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>6.小便</p>
          <el-radio-group v-model="xiaobian">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="频数"></el-radio-button>
            <el-radio-button label="寝闭"></el-radio-button>
            <el-radio-button label="尿少"></el-radio-button>
            <el-radio-button label="失禁"></el-radio-button>
            <el-radio-button label="留置尿管"></el-radio-button>
            <el-radio-button label="造痿"></el-radio-button>
            <el-radio-button label="血尿"></el-radio-button>
            <el-radio-button label="浑浊"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <div>
            <p>7.嗜好:</p>
            <el-radio-group v-model="like">
              <el-radio-button label="无特殊"></el-radio-button>
              <el-radio-button label="吸烟"></el-radio-button>
              <el-radio-button label="饮酒"></el-radio-button>
              <el-radio-button label="酸"></el-radio-button>
              <el-radio-button label="甜"></el-radio-button>
              <el-radio-button label="辣"></el-radio-button>
              <el-radio-button label="肥甘"></el-radio-button>
              <el-radio-button label="其他"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
      <div class="header_text">
        三、风险评估

      </div>
        <div class="text_all">

          <p>1、自理能力等级</p>
          <el-checkbox-group v-model="checkout" class="inline_clock_check">
            <el-checkbox label="60分:轻度或无功能障碍，生活自理;"></el-checkbox>
            <el-checkbox label="41~60分：中度功能障碍，日常生活需要帮助；"></el-checkbox>
            <el-checkbox label="21~40分：重度功能障碍，日常生活明显依赖；"></el-checkbox>
            <el-checkbox label="≤20分：完全功能障碍，日常生活完全靠依赖"></el-checkbox>
          </el-checkbox-group>
          <p>2.生活起居</p>
          <el-radio-group v-model="life">
            <el-radio-button label="合住"></el-radio-button>
            <el-radio-button label="独居"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
            <el-radio-button label="规律"></el-radio-button>
            <el-radio-button label="不规律"></el-radio-button>
          </el-radio-group>
          <p>3.跌倒风险评估</p>
          <el-radio-group v-model="diedao">
            <el-radio-button label="跌倒史"></el-radio-button>
            <el-radio-button label="活动异常"></el-radio-button>
            <el-radio-button label="辅助工具"></el-radio-button>
            <el-radio-button label="睡眠异常"></el-radio-button>
            <el-radio-button label="视力异常"></el-radio-button>
          </el-radio-group>
          <p>3.慢性病</p>
          <el-radio-group v-model="manxin">
            <el-radio-button label="无"></el-radio-button>
            <el-radio-button label="心脏病"></el-radio-button>
            <el-radio-button label="高血压"></el-radio-button>
            <el-radio-button label="糖尿病"></el-radio-button>
            <el-radio-button label="脑卒中"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>4.疼痛评估</p>
          <el-radio-group v-model="manxin">
            <el-radio-button label="0分 无痛"></el-radio-button>
            <el-radio-button label="1-3分 轻微痛"></el-radio-button>
            <el-radio-button label="4-6分 比较痛"></el-radio-button>
            <el-radio-button label="9分 非常痛"></el-radio-button>
            <el-radio-button label="10分 剧痛"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
        </div>
      <div class="header_text">
        四、社会心理评估

      </div>
        <div class="text_all">

          <p>1、情志</p>

          <el-radio-group v-model="love">
            <el-radio-button label="和平"></el-radio-button>
            <el-radio-button label="开朗"></el-radio-button>
            <el-radio-button label="易怒"></el-radio-button>
            <el-radio-button label="犹豫"></el-radio-button>
            <el-radio-button label="焦虑"></el-radio-button>
            <el-radio-button label="恐惧"></el-radio-button>
            <el-radio-button label="内向"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>2.对疾病了解程度</p>
          <el-radio-group v-model="Know">
            <el-radio-button label="了解"></el-radio-button>
            <el-radio-button label="部分了解"></el-radio-button>
            <el-radio-button label="不了解"></el-radio-button>
          </el-radio-group>
          <p>4.家庭关系</p>
          <el-radio-group v-model="famay">
            <el-radio-button label="和睦"></el-radio-button>
            <el-radio-button label="紧张"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>
          <p>4.经济状况</p>
          <el-radio-group v-model="jinji">
            <el-radio-button label="公费"></el-radio-button>
            <el-radio-button label="医保"></el-radio-button>
            <el-radio-button label="自费"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>

        </div>
      <div class="header_text">
        五、专科评估

      </div>
        <div class="text_all">

          <p>患者神清，精神欠佳，心慌气紧，无恶心呕吐，头晕，疲倦乏力，无胸骨后压榨感，无大汗股冷，纳眠可，小便可，大便2-3天1次，近2月体重下降5kg</p>
          <p>1、护理级别</p>

          <el-radio-group v-model="jibie">
            <el-radio-button label="一级护理"></el-radio-button>
            <el-radio-button label="二级护理"></el-radio-button>
            <el-radio-button label="三级护理"></el-radio-button>
            <el-radio-button label="特级护理"></el-radio-button>
          </el-radio-group>
          <p>2.入院宣教</p>
          <el-radio-group v-model="read">
            <el-radio-button label="住院须知"></el-radio-button>
            <el-radio-button label="环境设施"></el-radio-button>
            <el-radio-button label="经管医护人员"></el-radio-button>
            <el-radio-button label="安全管理制度"></el-radio-button>
            <el-radio-button label="告知疾病相关知识"></el-radio-button>
          </el-radio-group>

        </div>
      <div class="header_text">
        六、辩证施护

      </div>
        <div class="text_all">

          <p>多休息，起居有节，畅情志，饮食宜清淡温补之品，如桂圆、核桃、人参等补益肾脾，温阳利水。可选用扁豆、山药粥健脾利湿，可选用黄芪炖鸡温中补虚，利水消肿。忌生冷瓜果。注意保暖。</p>
          <p>（责任/当班）护士：唐健</p>
          <p>护士长（上级护师）：周发明</p>
          <p>日期：2017年01月03日</p>


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
        love:'',
        Know:'',
        famay:'',
        jinji:'',
        jibie:"",
        read:'',
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

  #haemorrhoids .label {
    display: inline-block;
    vertical-align: top;
    margin-top: 5px;
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
