import Vue from 'vue'
import App from './App.vue';
import 'ag-grid-enterprise';
import './styles.css'
import { store } from './store/store';

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
