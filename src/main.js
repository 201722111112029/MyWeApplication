import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  traceUser: true
})

const app = new Vue(App)
app.$mount()

var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
Vue.prototype.$http = fly