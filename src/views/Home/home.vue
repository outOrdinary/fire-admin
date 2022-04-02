<template>
  <div class="home">
    <div class="homeTop">
      <van-image class="imageLogo" :src="require('@/assets/img/logo.jpeg')" fit="contain"></van-image>
      <div class="homeTopText">
        <div style="text-indent:0.8rem;letter-spacing:0.8rem;margin-bottom:0.35rem;">消防执法</div>
        <div>营商环境监督系统</div>
      </div>
    </div>
    <div class="homeBottom">
      <div style="margin-bottom:0.2rem;">尊敬的先生/女士：您好</div>
      <div style="text-indent:0.9rem;">为不断优化消防执法营商环境，树立清正廉洁执法形象，助力鞍山经济建设发展，请您对本次消防执法情况进行公正客观的评价，您的意见将直接由鞍山市消防救援支队纪委受理，我们将严格保密，请您积极参与。</div>
      <div style="text-align: center;">
        <van-button class="homeButton" icon-position='right' @click="homeButtonClick">
          <span style="font-size:0.45rem;margin-left: 0.4rem;line-height:1rem;">开始评价</span>
          <svg-icon slot="icon" style="width: 1rem;height: 0.45rem;color:#fff;" icon-class="threeRight"></svg-icon>
        </van-button>
        <div style="font-size:0.43rem;color: #eeaf3d;">Start Evaluation</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    homeButtonClick (event) {
      let target = event.target
      if (target.nodeName === 'I' || target.nodeName === 'SPAN') {
        target = event.target.parentNode
      }
      target.blur()
      this.$router.push('/service')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  height: 100vh;
  width: 100%;
}
.homeTop {
  background-color: #dc2418;
  width: 100%;
  height: 50vh;
  color: #efd924;
  font-size: 0.93rem;
  font-family: Source-Han-Serif-CN-Bold, Microsoft YaHei;
  letter-spacing: -1px;
}
.homeBottom {
  background-color: #194fa1;
  width: 100%;
  height: 50vh;
  text-align: left;
  font-size: 0.4rem;
  padding: 0.7rem 1rem;
  color: #e3eef5;
  line-height: 1.7;
  font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}
.imageLogo {
  width: 5.3rem;
  height: 5.3rem;
  top: 17%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
.homeTopText {
  position: absolute;
  width: 100%;
  transform: translate(-50%, -50%);
  top: 38%;
  left: 50%;
  text-align: center;
}
.homeButton {
  height: 1rem;
  background-color: #15417e;
  color: #fff;
  border: 0.03rem solid #b38968;
  border-radius: 0.1rem;
  margin: 0.9rem auto 0.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
