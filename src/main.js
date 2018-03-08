import Vue from 'vue';  
import Vuex from 'vuex';  
import Router from 'vue-router';  
import { sync } from 'vuex-router-sync';

import App from './App';  
import VuexStore from './vuex/store';  
import { routes } from './router-config';

Vue.use(Vuex);  
Vue.use(Router);

const store = new Vuex.Store(VuexStore);

const router = new Router({  
  routes,
  mode: 'history',
});

sync(store, router);

const app = new Vue({  
  router,
  store,
  render: h => h(App),
}).$mount('#app');
