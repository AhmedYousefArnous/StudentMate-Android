<template>
  <div class="conatiner">
    <app-header
        link="/Materials"
        >
        <span slot="title">
            <i class="fa fa-book"></i>
            Computer Security
        </span>
      </app-header>
      <div class="content-container">
        <transition 
          appear
          enter-active-class="animated zoomIn"
          >
          <router-view></router-view>
        </transition>
      </div>
      <material-navigation></material-navigation>
  </div>
</template>
<script>
import Header from '../Networking/Header.vue';
import Navigation from './Navigation.vue';

export default {
  components: {
      appHeader: Header,   
      materialNavigation: Navigation 
  }
}
</script>
<style lang="scss" scoped>
</style>
