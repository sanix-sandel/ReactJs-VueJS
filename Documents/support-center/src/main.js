import Vue from 'vue'
import 'babel-polyfill'
import AppLayout from './components/AppLayout.vue'


new Vue({
  el: '#app',
  render: h => h(AppLayout),
})
