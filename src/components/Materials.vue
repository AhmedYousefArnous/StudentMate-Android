<template>
  <div class="container">
      <app-header
        link="/Main"
        >
        <span slot="title">
            <i class="fa fa-book"></i>
            Materials
        </span>
      </app-header>
      <transition 
        appear
        enter-active-class="animated zoomIn"
        >
        <div class="content-container row align-items-center align-content-sm-around ">
            <picture-card
                v-for="(subject, i) in Materials"
                :key="i"
                :title="subject.title"  
                :icon="subject.icon"
                :id="subject.id"
                :notificationNumber="subject.notificationNumber"
                
                class="mb-3"
                ></picture-card>
        </div>
      </transition>
  </div>
</template>
<script>
import Header from './Socialization/Header.vue';
import PictureCard from './Partials/PictureCard.vue';

export default {
    components: {
        appHeader: Header,
        PictureCard
    },
    data: function () {
        return {
            Materials: [
                {
                    id: 1,
                    notificationNumber: "10",                    
                    title: "Computer Security",
                    icon: "./static/Computer Security.jpg"
                },
                {
                    id: 2,
                    notificationNumber: "5",                    
                    title: "Networks",
                    icon: "./static/Networks.jpg"
                },
                {
                    id: 3,                    
                    notificationNumber: "1",                    
                    title: "Algorthims",
                    icon: "./static/Algorthims.jpg"
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .row {
        margin-left: 0;
        margin-right: 0;
        
    }    

</style>