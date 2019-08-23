import Vue from 'vue'
import { mainVue } from '../../main';

export const eventBus = new Vue({
  methods: {
    navigate(url) {
        mainVue.$router.push(url);
    }
  }  
});