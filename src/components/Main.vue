<template>
  <div class="container d-flex flex-column text-center">
    <app-header></app-header>
    <div class="cards">
        <a class="d-flex align-items-stretch">
            <app-card 
                link="/calendar"
                icon="static/assets/calendar.png"
                title="Calender"
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst"
                class="col-10 col-md-5 ml-4"></app-card>
                
            <app-card 
                link="/materials"
                icon="static/assets/materialsIcon.png"
                title="Materials"
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst"
                class="col-10 col-md-5 offset-1"></app-card>
                
            <app-card 
                link="/profile"
                icon="static/assets/profileIcon@2x.png"
                title="Profile"
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst"
                class="col-10 col-md-5 offset-1"></app-card>

            <app-card 
                link="/Socialization"
                icon="static/assets/ConnectionsIcon.png"
                title="Network"
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst"
                class="col-10 col-md-5 offset-1"></app-card>
            <app-card 
                link="/events"
                icon="static/assets/eventsIcon@3x.png"
                title="Events"
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst"
                class="col-10 col-md-5 offset-1"></app-card>

            <div class="col-1"></div>
        </a>
    </div>
  </div>
</template>
<script>
import header from './Partials/header.vue'
import card from './Partials/card.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    components: {
        'app-header': header,
        'app-card': card
    },
     methods: {
        ...mapActions([
            'getStudentInfo'
        ]),
        // ...mapGetters([
        //     'host'
        // ]),
    },
    beforeCreate() {
        // Login Http Logic
        this.$store.dispatch('getStudentInfo');
    },
    // computed: {
    //     Host: function() {
    //         return this.$store.getters.host;
    //     }
    // }
}
</script>
<style scoped lang="scss">
    
    .cards {
        height: 100vh;
        overflow-y: hidden;
        padding-top: 20vh;    
        a {
            flex-wrap: nowrap;
            overflow-x: scroll;
            height: 101vh;
        }

        @media (min-width: 700px ) {
            padding-top: 30vh;    
        }
    }
    
</style>

