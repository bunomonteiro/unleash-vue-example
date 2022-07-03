import Vue from 'vue'
import App from './App.vue'

import router from './router'
import featureFlag from './plugins/feature-flag.plugin'

Vue.config.productionTip = false

Vue.use(featureFlag, {
  url: 'http://localhost:3000/proxy',
  clientKey: 'some-secret',
  //refreshInterval: 1, // Intefval in seconds. Default 30; 0 to disable it
  appName: 'client-app-example'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
