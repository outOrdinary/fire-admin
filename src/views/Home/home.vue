<template>
  <div class="home">
    <div class="homeTop">
      <el-image class="imageLogo" :src="require('@/assets/img/logo.jpeg')" fit="contain"></el-image>
      <div class="homeTopText">
        <div style="text-indent:1.8rem;letter-spacing:1.8rem;margin-bottom:0.8rem;font-size: 2.3rem;">消防执法</div>
        <div>营商环境监督系统</div>
      </div>
    </div>
    <div class="homeBottom">
      <div style="margin-bottom:0.5rem;">尊敬的先生/女士：您好</div>
      <div style="text-indent:2rem;">为不断优化消防执法营商环境，树立清正廉洁执法形象，助力鞍山经济建设发展，请您对本次消防执法情况进行公正客观的评价，您的意见将直接由鞍山市消防救援支队纪委受理，我们将严格保密，请您积极参与。</div>
      <div style="text-align: center;">
        <el-button class="homeButton" @click="homeButtonClick">
          <span style="font-size:1.2rem;margin:1rem 0rem 1rem 2rem;line-height:2.4rem;">开始评价</span>
          <svg-icon style="width: 2rem;height: 1.2rem;color:#fff;margin-right:1rem;" icon-class="threeRight"></svg-icon>
        </el-button>
        <div style="font-size:1rem;color: #eeaf3d;">Start Evaluation</div>
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
    homeButtonClick () {
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
  height: 50%;
  color: #efd924;
  font-size: 2.1rem;
  font-family: DC;
  letter-spacing: -1px;
}
.homeBottom {
  background-color: #194fa1;
  width: 100%;
  height: 50%;
  text-align: left;
  font-size: 1rem;
  padding: 2.7rem;
  color: #e3eef5;
  line-height: 1.7;
  font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}
.imageLogo {
  width: 12rem;
  height: 12rem;
  top: 18%;
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
  font-size: 2.3rem;
  text-align: center;
}
.homeButton {
  background-color: #15417e;
  color: #fff;
  border: 1px solid #b38968;
  border-radius: 5px;
  margin: 2rem auto 0.5rem;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
