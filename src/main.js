import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      added: 0,
      max: 3,
    }
  },
  render: h => h(App),
}).$mount('#app')
