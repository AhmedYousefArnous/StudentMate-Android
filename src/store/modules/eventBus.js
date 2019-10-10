import Vue from 'vue'
import { mainVue } from '../../main';

export const eventBus = new Vue({
  data: {
    selected: 0
  },  
  methods: {
    navigate(url) {
        mainVue.$router.push(url);
    }
  }  
});