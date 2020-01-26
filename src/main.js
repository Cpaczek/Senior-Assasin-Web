
import './../node_modules/bulma/bulma.sass';
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted(){
    console.log("test");
    // router.push({ path: '/' })
  },
  render: h => h(App)
}).$mount('#app')