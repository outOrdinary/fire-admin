<template>
  <div>
    <div class="service">
      <el-scrollbar>
        <div style="height:1px;"></div>
        <div class="serviceTitleTop">
          <div class="serviceTitle">消防执法服务情况</div>
          <div class="serviceTitleEng">FIRE LAW ENFORCEMENT SERVICES</div>
        </div>
        <el-form label-width="7rem" :model="record" style="padding:0 2rem;">
          <el-form-item>
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh">执法单位</div>
              <div class="serviceFormLabelEng">LAW ENFORCEMENT</div>
            </div>
            <el-select v-model="record.company" size="mini" placeholder="选择单位" style="width:100%;">
              <el-option v-for="(item, key) in companyList" :key="key" :label="item.value" :value="key">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh">执法人员</div>
              <div class="serviceFormLabelEng">LAW ENFORCEMENT OFFICIALS</div>
            </div>
            <el-select v-model="record.personnel" size="mini" placeholder="选择人员" style="width:100%;">
              <el-option v-for="value in officialsList[record.company]" :key="value" :label="value" :value="value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh">执法时间</div>
              <div class="serviceFormLabelEng">LAW ENFORCEMENT TIME</div>
            </div>
            <el-date-picker v-model="record.time" type="date" size="mini" prefix-icon='' clear-icon='' placeholder="选择时间" style="width:100%;">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh" style="background-color:#194fa1;">被执法单位</div>
              <div class="serviceFormLabelEng" style="background-color: #dc2418;">LAW ENFORCEMENT</div>
            </div>
            <el-select v-model="record.coverCompany" size="mini" placeholder="选择单位" style="width:100%;">
              <el-option v-for="(item, key) in companyList" :key="key" :label="item.value" :value="key">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh" style="background-color:#194fa1;">联系人</div>
              <div class="serviceFormLabelEng" style="background-color: #dc2418;">THE CONTACT</div>
            </div>
            <el-input v-model="record.name" size="mini"></el-input>
          </el-form-item>
          <el-form-item>
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh" style="background-color:#194fa1;">联系电话</div>
              <div class="serviceFormLabelEng" style="background-color: #dc2418;">CONTACT PHONE NUMBER</div>
            </div>
            <el-input v-model="record.phone" size="mini"></el-input>
          </el-form-item>
          <el-form-item>
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh" style="background-color:#194fa1;">执法内容</div>
              <div class="serviceFormLabelEng" style="background-color: #dc2418;">LAW ENFORCEMENT CONTENT</div>
            </div>
            <el-select v-model="record.context" size="mini" placeholder="选择执法内容" style="width:100%;">
              <el-option v-for="item in companyList" :key="item" :label="item" :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="serviceTitleTop" style="margin-top: 3%;margin-bottom: 3%;">
          <div class="serviceTitle" style="text-indent: 1rem;letter-spacing: 1rem;">综合评价</div>
          <div class="serviceTitleEng" style="line-height: 1;text-indent: 0.5rem;letter-spacing: 0.5rem;">COMPREHENSIVE</div>
          <div class="serviceTitleEng" style="margin-top: 0;line-height: 1;text-indent: 0.5rem;letter-spacing: 0.5rem;">EVALUATION OF</div>
        </div>
        <div class='serviceEvaluation'>THE FIRE RESCUE</div>
        <div class="serviceEvaluationButton">
          <el-button type="primary" circle class="serviceEvaluationButtonBlue">好</el-button>
          <el-button type="primary" circle class="serviceEvaluationButtonBlue">较好</el-button>
          <el-button type="primary" circle class="serviceEvaluationButtonRed">一般</el-button>
          <el-button type="primary" circle class="serviceEvaluationButtonRed">差</el-button>
        </div>
        <div class="serviceEvaluationContent">总体评价分为“好、较好、一般、差”四个档次，如填选“好、较好”档，即完成此次评价：如填选“一般、差”档，需对执法情况进行进一步问卷调查。</div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service',
  data () {
    return {
      record: {
        company: '',
        personnel: '',
        time: '',
        coverCompany: '',
        name: '',
        phone: '',
        context: ''
      },
      companyList: {
        '1': { value: '铁东区消防救援大队', officialsList: ['江洪飞', '李秋辰', '刘光宇'] },
        '2': { value: '铁西区消防救援大队', officialsList: ['刚强', '舒奎彪', '原泉'] },
        '3': { value: '立山区消防救援大队', officialsList: ['王志辉', '周彦莹', '张文博'] },
        '4': { value: '千山区消防救援大队', officialsList: ['刘旭', '白博'] },
        '5': { value: '钢都消防救援大队', officialsList: ['王德阳', '王喆'] }
      },
      officialsList: {
        '': [],
        '1': ['江洪飞', '李秋辰', '刘光宇'],
        '2': ['刚强', '舒奎彪', '原泉'],
        '3': ['王志辉', '周彦莹', '张文博'],
        '4': ['刘旭', '白博'],
        '5': ['王德阳', '王喆']
      },
      contextList: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-scrollbar {
  height: 100%;
}
.service {
  position: relative;
  height: 100vh;
  width: 100%;
  background: url("../../assets/img/serviceBack.png") no-repeat fixed;
  background-size: 100% 100vh;
}
.imageLogo {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
.serviceTitleTop {
  margin-top: 12%;
  margin-bottom: 5%;
  z-index: 2;
  text-align: center;
}
.serviceTitle {
  color: #dc2418;
  font-size: 2rem;
  font-family: DC;
  text-indent: 0.2rem;
  letter-spacing: 0.2rem;
}
.serviceTitleEng {
  font-size: 0.6rem;
  text-align: center;
  color: #194fa1;
  text-indent: 0.25rem;
  letter-spacing: 0.25rem;
  margin-top: 0.5rem;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);
  font-weight: 600;
}
.serviceFormLabel {
  font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  color: #fff;
}
.serviceFormLabelZh {
  background-color: #dc2418;
  padding-top: 0.2rem;
  margin-top: 0.3rem;
  text-align: center;
  line-height: 1.5;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
}
.serviceFormLabelEng {
  background-color: #194fa1;
  text-align: center;
  line-height: 1.5;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  font-size: 0.35rem;
}
.serviceEvaluation {
  background: linear-gradient(
    to right,
    #dc2418 0%,
    #dc2418 30%,
    #194fa1 31%,
    #194fa1 100%
  );
  text-align: right;
  margin: 0 2rem;
  padding: 0 0.2rem;
  font-size: 0.5rem;
  line-height: 2;
  color: #fff;
  letter-spacing: 0.1rem;
}
.serviceEvaluationButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: DC;
  width: 100%;
  margin-top: 3%;
}
.serviceEvaluationButtonRed {
  width: 65px;
  height: 65px;
  border: 3px solid #dc2418;
  background-color: #194fa1;
  font-size: 1.5rem;
  padding: 0px;
}
.serviceEvaluationButtonBlue {
  width: 65px;
  height: 65px;
  border: 3px solid #194fa1;
  background-color: #dc2418;
  font-size: 1.5rem;
  padding: 0px;
}
.serviceEvaluationContent {
  margin-top: 3%;
  font-size: 0.7rem;
  padding: 0 2rem;
  text-indent: 1.8rem;
  font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  line-height: 1.8;
}
</style>
<style lang="scss">
.el-form-item {
  margin-bottom: 2px;
}
input::placeholder {
  /* Firefox, Chrome, Opera */
  letter-spacing: 0.1rem;
  text-align: right;
  color: #797979;
}
.el-input__prefix {
  display: none;
}
.el-input--prefix .el-input__inner {
  padding-left: 15px;
}
.el-input__inner {
  background-color: #edeeee;
  border: 1px solid #a2a3a3;
}
</style>
