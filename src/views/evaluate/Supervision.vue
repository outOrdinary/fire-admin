<template>
  <div>
    <div class="licensing">
      <div class="licensingFrame">
        <div style="height:1px;"></div>
        <div class="licensingTitleTop" style="margin-top: 7%;margin-bottom: 4%;">
          <div class="licensingTitle">监督检查</div>
          <div class="licensingTitleEng">THE SUPERVISION AND INSPECTION</div>
        </div>
        <div class='licensingEvaluation'>THE FIRE RESCUE</div>
        <div class="licensingEvaluationContent">(执法过程中存在以下行为的，请在对应项目上选择，不存在无需选择)</div>
        <van-checkbox-group v-model="record.radio" style="margin:0.5rem 0.5rem 0.5rem 0.3rem;">
          <van-checkbox name="1">
            <template #icon="props">
              <div class="licensingCheckboxFalse" v-if="!props.checked">
                <div class="licensingCheckboxFalseWithin"></div>
              </div>
              <div class="licensingCheckboxFalse" v-if="props.checked">
                <div class="licensingCheckboxTrueWithin"></div>
              </div>
            </template>
            不亮明执法身份，不自觉主动接受社会监督；
          </van-checkbox>
          <van-checkbox name="2">
            <template #icon="props">
              <div class="licensingCheckboxFalse" v-if="!props.checked">
                <div class="licensingCheckboxFalseWithin"></div>
              </div>
              <div class="licensingCheckboxFalse" v-if="props.checked">
                <div class="licensingCheckboxTrueWithin"></div>
              </div>
            </template>
            设定的整改期限明显不合理，导致无法完成整改，进而被予以行政处罚；
          </van-checkbox>
          <van-checkbox name="3">
            <template #icon="props">
              <div class="licensingCheckboxFalse" v-if="!props.checked">
                <div class="licensingCheckboxFalseWithin"></div>
              </div>
              <div class="licensingCheckboxFalse" v-if="props.checked">
                <div class="licensingCheckboxTrueWithin"></div>
              </div>
            </template>
            存在未经取证、出具文书等法定程序就强制执行、开罚单等粗暴执法行为；
          </van-checkbox>
          <van-checkbox name="4">
            <template #icon="props">
              <div class="licensingCheckboxFalse" v-if="!props.checked">
                <div class="licensingCheckboxFalseWithin"></div>
              </div>
              <div class="licensingCheckboxFalse" v-if="props.checked">
                <div class="licensingCheckboxTrueWithin"></div>
              </div>
            </template>
            违规指定消防产品或消防技术服务机构；
          </van-checkbox>
          <van-checkbox name="5">
            <template #icon="props">
              <div class="licensingCheckboxFalse" v-if="!props.checked">
                <div class="licensingCheckboxFalseWithin"></div>
              </div>
              <div class="licensingCheckboxFalse" v-if="props.checked">
                <div class="licensingCheckboxTrueWithin"></div>
              </div>
            </template>
            存在吃、拿、卡、要、乱拉赞助等违规行为；
          </van-checkbox>
        </van-checkbox-group>
        <div class="licensingTitleTop" style="margin-top: 3%;">
          <div class="licensingSmallTitle">其他需要反映的执法问题</div>
        </div>
        <van-field v-model="record.text" style="margin:0.2rem 0;" placeholder="点击编辑文字..." rows="4" type="textarea" />
        <div class='licensingEvaluation'>THE FIRE RESCUE</div>
        <van-button class="LicensingButton" icon-position='left' @click="gobackClick">
          <span style="font-size:0.45rem;margin:0 .4rem 0 .2rem;">返回</span>
          <svg-icon slot="icon" style="width: 0.3rem;color:#fff;" icon-class="triangleRight"></svg-icon>
        </van-button>
        <van-button class="LicensingButton" icon-position='right' style="float: right;" @click="submitClick">
          <span style="font-size:0.45rem;margin:0 .2rem 0 .4rem;">完成</span>
          <svg-icon slot="icon" style="width: 0.3rem;color:#fff;" icon-class="triangleLeft"></svg-icon>
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Supervision',
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
      }
    }
  },
  created () {
    if (this.$store.getters.fromData) {
      this.record = Object.assign(this.record, this.$store.getters.fromData)
    }
  },
  methods: {
    gobackClick () {
      this.$router.goBack()
    },
    submitClick () {
      this.$router.push({
        path: '/lastPage'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.licensing {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("../../assets/img/serviceBack.png");
  background-size: 100% 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; /*这句是为了滑动更顺畅*/
  ::-webkit-scrollbar {
    display: none;
  }
}
.licensingFrame {
  padding: 0 0.7rem 1.5rem;
}
.imageLogo {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
.licensingTitleTop {
  z-index: 2;
  text-align: center;
}
.licensingTitle {
  color: #dc2418;
  font-size: 0.9rem;
  font-family: Source-Han-Serif-CN-Bold;
  text-indent: 0.45rem;
  letter-spacing: 0.45rem;
}
.licensingSmallTitle {
  color: #dc2418;
  font-size: 0.45rem;
  font-family: Source-Han-Serif-CN-Bold;
  text-indent: 0.03rem;
  letter-spacing: 0.03rem;
}
.licensingTitleEng {
  line-height: 1.5;
  text-indent: 0.22rem;
  letter-spacing: 0.22rem;
  font-size: 0.27rem;
  text-align: center;
  color: #194fa1;
  margin-top: 0.2rem;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);
  font-weight: 600;
}
.licensingEvaluation {
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
  text-indent: 0.045rem;
  letter-spacing: 0.045rem;
}
.licensingEvaluationContent {
  margin-top: 0.15rem;
  font-size: 0.27rem;
  color: #9e9e9e;
  text-align: center;
}
.licensingCheckboxFalse {
  width: 1.5rem;
  height: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.licensingCheckboxFalseWithin {
  background-color: #fff;
  border: 0.05rem solid #dc2418;
  position: relative;
  border-radius: 50%;
  width: 0.65rem;
  height: 0.65rem;
}
.licensingCheckboxFalseWithin:after {
  content: "";
  border: 0.05rem solid #194fa1;
  display: block;
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  z-index: 1006;
  top: -webkit-calc(50% - 0.26rem);
  top: calc(50% - 0.26rem);
  left: -webkit-calc(50% - 0.26rem);
  left: calc(50% - 0.26rem);
}
.licensingCheckboxTrueWithin {
  background-color: #fff;
  border: 0.05rem solid #dc2418;
  position: relative;
  border-radius: 50%;
  width: 0.65rem;
  height: 0.65rem;
}
.licensingCheckboxTrueWithin:after {
  content: "";
  border: 0.05rem solid #194fa1;
  display: block;
  width: 0.52rem;
  height: 0.52rem;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  z-index: 1006;
  top: -webkit-calc(50% - 0.26rem);
  top: calc(50% - 0.26rem);
  left: -webkit-calc(50% - 0.26rem);
  left: calc(50% - 0.26rem);
}
.licensingCheckboxTrueWithin:before {
  content: "";
  display: block;
  width: 0.36rem;
  height: 0.36rem;
  border-radius: 50%;
  background-color: #dc2418;
  position: absolute;
  z-index: 1007;
  top: -webkit-calc(50% - 0.18rem);
  top: calc(50% - 0.18rem);
  left: -webkit-calc(50% - 0.18rem);
  left: calc(50% - 0.18rem);
}
.LicensingButton {
  height: 0.8rem;
  background-color: #194fa1;
  color: #fff;
  border: 0.03rem solid #dc2418;
  border-radius: 0.15rem;
  margin: 0.5rem 0rem 0.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
<style lang="scss">
.licensingFrame {
  .van-field__value {
    background-color: #edeeee;
    border: 0.03rem solid #a2a3a3;
    padding: 0.1rem 0.55rem;
    border-radius: 0.3rem;
    // height: 0.75rem;
    font-size: 0.35rem;
  }
  .van-cell::after {
    display: none;
  }
  .van-cell {
    padding: 0.2rem 0rem !important;
    background-color: transparent;
  }
  input::placeholder {
    /* Firefox, Chrome, Opera */
    color: #585858;
  }
  .van-checkbox {
    font-size: 0.34rem;
    height: 2rem;
  }
  .van-checkbox__icon {
    height: 1rem;
  }
  .van-button--normal {
    padding: 0.1rem 0.3rem;
  }
  .van-button__text {
    text-indent: 0.4rem;
    letter-spacing: 0.4rem;
  }
}
</style>
