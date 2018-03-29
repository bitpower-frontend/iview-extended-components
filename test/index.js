import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import iviewExtendedComponents from '../index.js';
import App from './App.vue';

const extendediView = iviewExtendedComponents.extend(iView);
Vue.use(extendediView);

new Vue({
  el: '#app',
  render: h => h(App),
});