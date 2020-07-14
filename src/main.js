import Vue from 'vue'
import App from './App.vue'
import { MdField, MdCard, MdButton } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

Vue.use(MdField);
Vue.use(MdCard);
Vue.use(MdButton);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
