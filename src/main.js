import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import yamlData from './plugins/yaml-data';
import '@babel/polyfill';

Vue.config.productionTip = false;
Vue.use(yamlData);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
