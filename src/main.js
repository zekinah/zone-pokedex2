import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import VueMeta from "vue-meta";
import VueAnalytics from "vue-analytics";

require("@/assets/css/main.scss");

Vue.use(VueMeta);

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: "UA-169027561-3",
  autoTracking: {
    screenview: true
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
