import Vue from 'vue'
import App from './App'
var VueResource = require('vue-resource')
Vue.use(VueResource)
new Vue({
  render: h => h(App)
}).$mount('#app')
