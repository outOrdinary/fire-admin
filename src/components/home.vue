<template>
  <div class="home">
    <div class="homeTop">
      <el-image
      class="imageLogo"
      :src="require('@/assets/img/logo.jpeg')"
      fit="contain"></el-image>
      <div class="homeTopText">
        <div>消防执法</div>
        <div>营商环境监督系统</div>
      </div>
    </div>
    <div class="homeBottom">
      <div style="margin-bottom:0.5rem;">尊敬的先生/女士：您好</div>
      <div style="text-indent:2rem;">为不断优化消防执法营商环境，树立清正廉洁执法形象，助力鞍山经济建设发展，请您对本次消防执法情况进行公正客观的评价，您的意见将直接由鞍山市消防救援支队纪委受理，我们将严格保密，请您积极参与。</div>
      <div style="text-align: center;">
        <el-button class="homeButton" size="small">开始评价<el-image
      style="width:20px;color: #accce3;"
      :src="require('@/assets/img/right.png')"
      fit="contain"></el-image></el-button>
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
  font-family: SimSun;
  font-weight: 700;
  letter-spacing: -1px;
}
.homeBottom {
  background-color: #154fa1;
  width: 100%;
  height: 50%;
  text-align: left;
  font-size:1rem;
  padding:2rem;
  color: #accce3;
  line-height:1.7;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}
.imageLogo {
  width: 12rem;
  height: 12rem;
  top: 20%;
  /* left: 50%; */
  position: absolute;
  transform: translate(-50%, -50%);
}
.homeTopText {
  position: absolute;
  width: 100%;
  transform: translate(-50%, -50%);
  top: 40%;
  left: 50%;
}
.homeButton {
  background-color: #15417e;
  color: #accce3;
  border-color: #6b7479;
  border-radius: 5px;
  margin: 2rem auto;
}
</style>
