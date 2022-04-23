<template>
  <div class="home">
    <div class="homeTop">

    </div>
    <div class="homeBottom">
      <div style="text-indent:0.9rem;">
        我们将认真阅读反馈内容，并对反映的问题进行调查、核实和处理，对实名反应问题的将进行情况反馈。
      </div>
      <div style="text-indent:0.9rem;">
        感谢您的支持与参与，我们将不断加强和改进消防监督执法工作，为经济发展和人民群众提供更加优质的消防安全服务。
      </div>
      <div style="text-align: right;margin-top:1rem;">
        辽宁省消防救援总队纪委
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
  background: url("../../assets/img/lastUp.png");
  background-size: 100% 100%;
}
.homeBottom {
  width: 100%;
  height: 50vh;
  text-align: left;
  font-size: 0.4rem;
  padding: 0.7rem 1rem;
  color: #e3eef5;
  line-height: 1.7;
  font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  background: url("../../assets/img/lastDown.png");
  background-size: 100% 100%;
}
</style>
