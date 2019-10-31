
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
                v-for="subject in Materials"
                :key="subject.id"
                :title="subject.name"  
                :icon="Host + '/' + subject.banner"
                :id="subject.id"
                notificationNumber="3"
                class="mb-3"
                ></picture-card>
        </div>
      </transition>
  </div>
</template>
<script>
import Header from './Socialization/Header.vue';
import PictureCard from './Partials/PictureCard.vue';
import {mapActions, mapGetters} from 'vuex'

export default {
    data: function() {
        return {
            // shouldRender: false,
            // Materials: []
        }
    },
    components: {
        appHeader: Header,
        PictureCard
    },
    // methods: {
    //     ...mapActions([
    //         'getMaterials'
    //     ]),
    //     ...mapGetters([
    //         'materials',
    //         'host'
    //     ]),
    // },
    // mounted() {
        // Login Http Logic
        // this.$store.dispatch('getMaterials');
        // .then(() => {
        // setTimeout(
        //     () => {
        //         this.Materials = this.$store.getters.materials;
        //         this.shouldRender = true;
        //     }, 1500
        // );
        // });
    // },
    // computed: {
    //     Host: function() {
    //         return this.$store.getters.host;
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    .row {
        margin-left: 0;
        margin-right: 0;
        
    }    

</style>

