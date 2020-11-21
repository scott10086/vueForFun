// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'primeicons/primeicons.css';
import MegaMenu from 'primevue/megamenu';
import Panel from 'primevue/panel';
import 'primevue/resources/primevue.min.css';
import Vue from 'vue';
import router from './app.router';
import App from './App.vue';



Vue.config.productionTip = false

Vue.component('MegaMenu', MegaMenu);
Vue.component('Panel', Panel);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
