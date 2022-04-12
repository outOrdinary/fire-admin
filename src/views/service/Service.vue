<template>
  <div>
    <div class="service">
      <div class="serviceFrame">
        <div style="height:1px;"></div>
        <div class="serviceTitleTop">
          <div class="serviceTitle">消防执法服务情况</div>
          <div class="serviceTitleEng">FIRE LAW ENFORCEMENT SERVICES</div>
        </div>
        <van-form label-width="2.6rem" :model="record" class="serviceVanForm">
          <van-field v-model="record.company" label-align='center' center clickable readonly placeholder="选择单位" @click="showPicker = true">
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh">执法单位</div>
              <div class="serviceFormLabelEng">LAW ENFORCEMENT</div>
            </div>
            <svg-icon slot="right-icon" style="font-size:0.4rem;color:#dc2418;" icon-class="triangle"></svg-icon>
          </van-field>
          <van-popup v-model:show="showPicker" position="bottom">
            <van-picker :columns="companyList" @cancel="showPicker = false" title="执法单位" show-toolbar @confirm="onConfirm" />
          </van-popup>

          <van-field v-model="record.personnel" label-align='center' border center clickable readonly placeholder="选择人员" @click="showPickerPersonnel = true">
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh">执法人员</div>
              <div class="serviceFormLabelEng">LAW ENFORCEMENT OFFICIALS</div>
            </div>
            <svg-icon slot="right-icon" style="font-size:0.4rem;color:#dc2418;" icon-class="triangle"></svg-icon>
          </van-field>
          <van-popup v-model:show="showPickerPersonnel" round position="bottom">
            <van-picker :columns="officialsList[record.company]" title="执法人员" @cancel="showPickerPersonnel = false" show-toolbar @confirm="onConfirmPersonnel" />
          </van-popup>

          <van-field v-model="record.time" name="datetimePicker" label-align='center' border center clickable readonly placeholder="执法时间" @click="showPickerTime = true">
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh">执法时间</div>
              <div class="serviceFormLabelEng">LAW ENFORCEMENT TIME</div>
            </div>
            <svg-icon slot="right-icon" style="font-size:0.4rem;color:#dc2418;" icon-class="triangle"></svg-icon>
          </van-field>
          <van-popup v-model:show="showPickerTime" round position="bottom">
            <van-datetime-picker type="date" title="执法时间" @confirm="onConfirmTime" @cancel="showPickerTime = false" />
          </van-popup>

          <van-field v-model="record.coverCompany" label-align='center' center clickable readonly placeholder="选择单位" @click="showPickerCoverCompany = true">
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh" style="background-color:#194fa1;">被执法单位</div>
              <div class="serviceFormLabelEng" style="background-color: #dc2418;">LAW ENFORCEMENT</div>
            </div>
            <svg-icon slot="right-icon" style="font-size:0.4rem;color:#dc2418;" icon-class="triangle"></svg-icon>
          </van-field>
          <van-popup v-model:show="showPickerCoverCompany" position="bottom">
            <van-picker :columns="companyList" @cancel="showPickerCoverCompany = false" title="被执法单位" show-toolbar @confirm="onConfirmCoverCompany" />
          </van-popup>

          <van-field v-model="record.name" label-align='center' center>
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh" style="background-color:#194fa1;">联系人</div>
              <div class="serviceFormLabelEng" style="background-color: #dc2418;">THE CONTACT</div>
            </div>
          </van-field>

          <van-field v-model="record.phone" label-align='center' center>
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh" style="background-color:#194fa1;">联系电话</div>
              <div class="serviceFormLabelEng" style="background-color: #dc2418;">CONTACT PHONE NUMBER</div>
            </div>
          </van-field>

          <van-field v-model="record.context" label-align='center' center clickable readonly placeholder="选择执法内容" @click="showPickerContext = true">
            <div slot='label' class="serviceFormLabel">
              <div class="serviceFormLabelZh" style="background-color:#194fa1;">执法内容</div>
              <div class="serviceFormLabelEng" style="background-color: #dc2418;">LAW ENFORCEMENT CONTENT</div>
            </div>
            <svg-icon slot="right-icon" style="font-size:0.4rem;color:#dc2418;" icon-class="triangle"></svg-icon>
          </van-field>
          <van-popup v-model:show="showPickerContext" position="bottom">
            <van-picker :columns="contextList" @cancel="showPickerCoverCompany = false" title="执法内容" ref="contextPicker" show-toolbar @confirm="onConfirmContext" />
          </van-popup>

        </van-form>
        <div class="serviceTitleTop" style="margin-top: 3%;margin-bottom: 3%;">
          <div class="serviceTitle" style="text-indent: 0.45rem;letter-spacing: 0.45rem;">综合评价</div>
          <div class="serviceTitleEng" style="line-height: 1;text-indent: 0.22rem;letter-spacing: 0.22rem;">COMPREHENSIVE</div>
          <div class="serviceTitleEng" style="margin-top: 0;line-height: 1;text-indent: .22rem;letter-spacing: 0.22rem;">EVALUATION OF</div>
        </div>
        <div class='serviceEvaluation'>THE FIRE RESCUE</div>
        <div class="serviceEvaluationButton">
          <van-button type="primary" @click="serverEvaluationClick('好')" round class="serviceEvaluationButtonBlue">好</van-button>
          <van-button type="primary" @click="serverEvaluationClick('较好')" round class="serviceEvaluationButtonBlue">较好</van-button>
          <van-button type="primary" @click="serverEvaluationClick('一般')" round class="serviceEvaluationButtonRed">一般</van-button>
          <van-button type="primary" @click="serverEvaluationClick('差')" round class="serviceEvaluationButtonRed">差</van-button>
        </div>
        <div class="serviceEvaluationContent">总体评价分为“好、较好、一般、差”四个档次，如填选“好、较好”档，即完成此次评价：如填选“一般、差”档，需对执法情况进行进一步问卷调查。</div>
      </div>
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
        time: null,
        coverCompany: '',
        name: '',
        phone: '',
        context: '',
        radio: [],
        evaluate: '',
        text: ''
      },
      showPicker: false,
      showPickerPersonnel: false,
      showPickerTime: false,
      showPickerCoverCompany: false,
      showPickerContext: false,
      companyList: ['铁东区消防救援大队', '铁西区消防救援大队', '立山区消防救援大队', '千山区消防救援大队', '钢都消防救援大队'],
      // companyList: {
      //   '1': { value: '铁东区消防救援大队', officialsList: ['江洪飞', '李秋辰', '刘光宇'] },
      //   '2': { value: '铁西区消防救援大队', officialsList: ['刚强', '舒奎彪', '原泉'] },
      //   '3': { value: '立山区消防救援大队', officialsList: ['王志辉', '周彦莹', '张文博'] },
      //   '4': { value: '千山区消防救援大队', officialsList: ['刘旭', '白博'] },
      //   '5': { value: '钢都消防救援大队', officialsList: ['王德阳', '王喆'] }
      // },
      officialsList: {
        '': [],
        '铁东区消防救援大队': ['江洪飞', '李秋辰', '刘光宇'],
        '铁西区消防救援大队': ['刚强', '舒奎彪', '原泉'],
        '立山区消防救援大队': ['王志辉', '周彦莹', '张文博'],
        '千山区消防救援大队': ['刘旭', '白博'],
        '5钢都消防救援大队': ['王德阳', '王喆']
      },
      contextList: ['行政许可', '行政处罚', '火灾调查', '监督检查'],
      contextPushList: {
        '行政许可': 'licensing',
        '行政处罚': 'punishment',
        '火灾调查': 'fire',
        '监督检查': 'supervision'
      }
    }
  },
  created () {
    if (this.$store.getters.fromData) {
      this.record = Object.assign(this.record, this.$store.getters.fromData)
    }
    this.$nextTick(() => {
      console.log(this.$refs['contextPicker'])
      if (this.record.context) {
        this.$refs['contextPicker'].setValues([this.record.context])
      }
    })
  },
  methods: {
    serverEvaluationClick (data) {
      if (this.record.context) {
        this.record.evaluate = data
        this.$store.dispatch('user/setFromData', this.record)
        this.$router.push({
          path: '/' + this.contextPushList[this.record.context]
        })
      } else {
        this.$notify({ type: 'danger', message: '未选择执法内容' })
      }
    },
    onConfirm (value) {
      this.record.company = value
      this.showPicker = false
    },
    onConfirmPersonnel (value) {
      this.record.personnel = value
      this.showPickerPersonnel = false
    },
    onConfirmTime (time) {
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      this.record.time = year + '年' + month + '月' + day + '日'
      this.showPickerTime = false
    },
    onConfirmCoverCompany (value) {
      this.record.coverCompany = value
      this.showPickerCoverCompany = false
    },
    onConfirmContext (value) {
      this.record.context = value
      this.showPickerContext = false
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
  width: 100%;
  min-height: 100vh;
  background: url("../../assets/img/serviceBack.png");
  background-size: 100% 100%;
}
.serviceFrame {
  padding: 0 0.7rem;
}
.imageLogo {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
.serviceTitleTop {
  margin-top: 7%;
  margin-bottom: 3%;
  z-index: 2;
  text-align: center;
}
.serviceTitle {
  color: #dc2418;
  font-size: 0.9rem;
  font-family: Source-Han-Serif-CN-Bold;
  letter-spacing: 0.09rem;
}
.serviceTitleEng {
  font-size: 0.27rem;
  text-align: center;
  color: #194fa1;
  text-indent: 0.11rem;
  letter-spacing: 0.11rem;
  margin-top: 0.2rem;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);
  font-weight: 600;
}
.serviceFormLabel {
  color: #fff;
}
.serviceFormLabelZh {
  background-color: #dc2418;
  padding-top: 0.05rem;
  line-height: 1.5;
  font-size: 0.35rem;
  border-top-right-radius: 0.05rem;
  border-top-left-radius: 0.05rem;
}
.serviceFormLabelEng {
  background-color: #194fa1;
  line-height: 1.5;
  border-bottom-right-radius: 0.05rem;
  border-bottom-left-radius: 0.05rem;
  font-size: 0.15rem;
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
  padding: 0 0.09rem;
  font-size: 0.2rem;
  line-height: 2;
  color: #fff;
  letter-spacing: 0.045rem;
}
.serviceEvaluationButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: Source-Han-Serif-CN-Bold;
  width: 100%;
  margin-top: 3%;
}
.serviceEvaluationButtonRed {
  width: 1.7rem;
  height: 1.7rem;
  border: 0.08rem solid #dc2418;
  background-color: #194fa1;
  font-size: 0.6rem;
  padding: 0px !important;
  margin: 0 0.25rem;
}
.serviceEvaluationButtonBlue {
  width: 1.7rem;
  height: 1.7rem;
  border: 0.08rem solid #194fa1;
  background-color: #dc2418;
  font-size: 0.6rem;
  padding: 0px !important;
  margin: 0 0.25rem;
}
.serviceEvaluationContent {
  margin-top: 3%;
  font-size: 0.3rem;
  text-indent: 0.8rem;
  line-height: 1.8;
}
</style>
<style lang="less">
@import "../../styles/vant-ui.less";
</style>

<style lang="scss">
.serviceVanForm {
  .van-field__value {
    background-color: #edeeee;
    border: 0.03rem solid #a2a3a3;
    padding: 0.03rem 0.2rem 0.03rem 0.4rem;
    border-radius: 0.1rem;
    // height: 0.75rem;
    // font-size: 0.35rem;
  }
  .van-cell::after {
    display: none;
  }
  .van-cell {
    padding: 0.1rem 0rem !important;
    background-color: transparent;
  }
  input::placeholder {
    /* Firefox, Chrome, Opera */
    letter-spacing: 0.1rem;
    text-align: right;
    color: #797979;
  }
}
</style>
