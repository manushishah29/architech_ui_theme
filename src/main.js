import Vue from 'vue'
import router from './router'

import BootstrapVue from "bootstrap-vue"

import App from './App'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';
import { library } from '@fortawesome/fontawesome-svg-core'

import {faUserSecret, faShoppingCart, faEllipsisV, faPlus, faEdit} from '@fortawesome/free-solid-svg-icons'
import VueStepWizard from 'vue-step-wizard'
import 'vue-step-wizard/dist/vue-step-wizard.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,faShoppingCart,faEllipsisV,faPlus,faEdit)

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueStepWizard);
Vue.use(VueSweetalert2);

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
