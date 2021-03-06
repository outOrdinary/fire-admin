import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 需要左方向动画的路由用this.$router.to('****')
Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isright = true
  this.isleft = false
  this.push(path)
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true
  this.isleft = false
  this.go(-1)
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true
  this.isleft = false
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/views/Home/home'], resolve)
    },
    {
      path: '/service',
      name: 'Service',
      component: resolve => require(['@/views/service/Service'], resolve)
    },
    {
      path: '/licensing',
      name: 'Licensing',
      component: resolve => require(['@/views/evaluate/Licensing'], resolve)
    },
    {
      path: '/punishment',
      name: 'Punishment',
      component: resolve => require(['@/views/evaluate/Punishment'], resolve)
    },
    {
      path: '/fire',
      name: 'Fire',
      component: resolve => require(['@/views/evaluate/Fire'], resolve)
    },
    {
      path: '/supervision',
      name: 'Supervision',
      component: resolve => require(['@/views/evaluate/Supervision'], resolve)
    },
    {
      path: '/lastPage',
      name: 'LastPage',
      component: resolve => require(['@/views/lastPage/LastPage'], resolve)
    }
  ]
})
