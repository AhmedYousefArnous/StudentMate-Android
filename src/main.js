// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'jquery'
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import {store} from './store/store'

import './assets/scss/main.scss'

Vue.config.productionTip = false

Vue.filter('skip', function (value) {
  if(value.length < 25) 
    return value;

  return value.slice(0,25) + "...";
})

Vue.directive('material', {
  bind(el, binding, vnode) {
    if(binding.value) {
      el.classList.add('active');
    }
  }
})

// Vue.use(VueResource);
// Vue.http.options.root = "http://localhost:8000";
// Vue.http.interceptors.push((request) => {
//   request.headers.set('content-type', 'application/x-www-form-urlencoded');
//   request.headers.set('accept', 'application/json');
//   // request.headers.set('authorization', 'Bearer ' + store.state.token );
// })


export const mainVue = new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  render: h => h(App),
  
  // template: '<App/>'
})
