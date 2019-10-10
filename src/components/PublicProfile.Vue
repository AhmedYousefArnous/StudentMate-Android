<template>
    <div class="container" v-if="visitedProfileId !== null">
        <!-- <app-header background="bg-transparent"></app-header> -->
        <div class="row justify-content-between px-3">
            <router-link
                tag="i"
                class="fa fa-angle-left fa-fw" 
                to="/main"
                ></router-link>
            <router-link
                tag="i"
                class="fa fa-pencil-square fa-fw" 
                to="/profile/edit"
                ></router-link>
        </div>
        <header class="row card card-inverse">
            <img src="static/profile.png" class="card-img"/>
            <div class="card-img-overlay">
                <div class="row justify-content-center pt-2 text-center">
                    <img src="static/profile.png" class="img-circle avatar"/>
                    <h1 class="col-12 h2 my-3" v-if="visitedProfile !== null">
                        {{ visitedProfile.name_arabic  }}
                    </h1>
                    <div class="col-12">
                        <button class="btn btn-purple btn-sm mr-2 message-btn" type="button">
                            <i class="fa fa-send"></i> Message
                        </button>
                        <button class="btn btn-purple btn-sm" type="button">
                            <i class="fa fa-user-plus"></i> Connect
                        </button>
                    </div>
                </div>
            </div>
        </header> 
        <!-- <transition-group 
            class="row justify-content-center py-5"
            appear
            enter-active-class="animated fadeIn"
            >
            <profile-badge
                class="col-11"  
                iconClass="fa-check"
                v-for="(property, i) in properties"
                :key="i * 2"
                :label="property.title"
                :content="property.content"
                :visible="property.visible"
                @clicked="makeVisiblable(i, property.id)"
                ></profile-badge>
            <profile-badge
                class="col-11"  
                label="Nationality"
                :key="201"
                :content=" $store.state.student.nationality == 1 ? 'Egyptain' : 'Soudain'"
                ></profile-badge>
            <profile-badge
                class="col-11"  
                label="Joined"
                :key="200"
                :content="new Date($store.state.student.joined.date)"
                ></profile-badge>

        </transition-group> -->
    </div>
</template>
<script>
import header from './Partials/header.vue';
import badge from './Partials/badge.vue';
import {mapActions} from 'vuex'
import { eventBus } from '../store/modules/eventBus';

export default {
    components: {
        'app-header': header,
        'profile-badge':badge
    },
    data: function () {
        return {
            properties: [
                {
                    id: 1,
                    title: "Arabic Name",
                    content: this.visitedProfile ? this.visitedProfile.name_arabic : null,
                },
                {
                    id: "2",
                    title: "University",
                    content: this.visitedProfile ? this.visitedProfile.university.name  : null,
                },
                {
                    id: "3",
                    title: "Faculty",
                    content: this.visitedProfile ? this.visitedProfile.faculty.name  : null,
             
                },
                {
                    id: "4",
                    title: "Department",
                    content: this.visitedProfile ? this.visitedProfile.department.name  : null,
                                       
                },
                {
                    id: "5",
                    title: "Level",
                    content: this.visitedProfile ? this.visitedProfile.level.name  : null,
                },
                {
                    id: "6",
                    title: "Section",
                    content: this.visitedProfile ? this.visitedProfile.section  : null,
                },
                {
                    id: "7",
                    title: "Term No.",
                    content: this.visitedProfile ? this.visitedProfile.term : null,
                },
                {
                    id: "9",
                    title: "Gender",
                    content: this.visitedProfile ? this.visitedProfile.gender  : null,
                },
                {
                    id: "10",
                    title: "Email",
                    content: this.visitedProfile ? this.visitedProfile.email  : null,                     
                },
                {
                    id: "11",
                    title: "Phone Number",
                    content: this.visitedProfile ? this.visitedProfile.phone : null,
                },
                
            ],
            visitedProfileId: null, 
            visitedProfile: null
        }
    },
    methods: {
        ...mapActions([
            'getVisitedStudentInfo'
        ]),
    },
    beforeMount() {
        this.visitedProfileId = this.$route.params.id;
        let vm = this;
        this.$store.dispatch('getVisitedStudentInfo', vm.visitedProfileId)
            .then(
                () =>{
                    console.log(vm.$store.state.responseData.data);                     
                    this.visitedProfile = vm.$store.getters.data;
                }
            );
    },
    // computed: {
    //     visitedProfile: function () {
    //         return this.$store.getters.data;
    //     }
    // },
    // watch: {
    //     '$route'(to, from) {
    //         this.visitedProfileId = this.$route.params.id
    //         let vm = this;
    //         this.$store.dispatch('getVisitedStudentInfo', vm.visitedProfileId)
    //             .then(
    //                 () =>{ vm.visitedProfile =  vm.$store.state.responseData.data}
    //             );            
    //     },
    // },
}
</script>
<style scoped>
    .container {
        overflow: hidden;
    }
    .fa {
        font-size: 14px
    }

    .fa-angle-left,
    .fa-pencil-square {
        font-size: 30px;
        position: relative;
        color: white;
        z-index: 2;
        top: 15px;
    }
    .card {
        border: none;
        height: 240px;
        border-radius: 0 0 50% 50%;
        transform: scale(1.25);
        overflow: hidden;
        color: white;
    }
    .card-img-overlay {
        background-color: #000000c7;
    }

    .card-img-overlay > div {
        transform: scale(0.8);        
    }

    .btn {
        cursor: pointer;
    }

    
    .message-btn {
        opacity: 0.6;
    }
    h1 span {
        width: 5px;
        height: 5px;
        background-color: #7e238e
    }
</style>