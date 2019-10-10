<template>
  <div class="conatiner">
    <app-header
        link="/Main"
        >
        <span slot="title">
            <i class="fa fa-gear"></i>
            Settings
        </span>
      </app-header>
        <transition
        appear
        enter-active-class="animated zoomIn"
        >
          <ul class="list-group">
            <li 
                class="list-group-item"                 
                v-for="(Setting) in Settings"
                :key="Setting"
                v-html="Setting">
            </li>
          </ul>
        </transition>
  </div>
</template>
<script>
import Header from './Networking/Header.vue';

export default {
  components: {
      appHeader: Header,  
  },
  data: function() {
      return {
          Settings: [
            'Invite a friend',
            'Send a feedback',
            'Privacy &amp; Licence',
            'App Info'
          ]
      }
  }
}
</script>
<style lang="scss" scoped>
    .list-group {
        margin-top: 60px;
        .list-group-item {
            font-size: 26px;
        }
    }
    .slideInLeft-move {
        transition: transform 1s ;
    }
</style>
