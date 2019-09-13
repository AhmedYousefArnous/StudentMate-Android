<template>
    <div class="container">
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
                    <h1 class="col-12 h2 my-3" >
                        {{ $store.state.student.name }}
                    </h1>
                    <div class="col-12">
                        <router-link
                            tag="a"
                            class="btn btn-purple btn-sm" 
                            :to="'/profile/' + $store.state.student.id"
                            >
                            <i class="fa fa-eye"></i> Visitor View                        

                        </router-link>
                    </div>
                </div>
            </div>
        </header> 
        <transition-group 
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

        </transition-group>
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
                    content: this.$store.state.student.name_arabic,
                    visible: this.$store.state.student.options.name_arabic,
                },
                {
                    id: "2",
                    title: "University",
                    content: this.$store.state.student.university.name,
                    visible: this.$store.state.student.options.university,
                },
                {
                    id: "3",
                    title: "Faculty",
                    content: this.$store.state.student.faculty.name,
                    visible: this.$store.state.student.options.faculty,
             
                },
                {
                    id: "4",
                    title: "Department",
                    content: this.$store.state.student.department.name,
                    visible: this.$store.state.student.options.department,
                                       
                },
                {
                    id: "5",
                    title: "Level",
                    content: this.$store.state.student.level.name,
                    visible: this.$store.state.student.options.level,       
                },
                {
                    id: "6",
                    title: "Section",
                    content: this.$store.state.student.section,
                    visible: this.$store.state.student.options.section,
                },
                {
                    id: "7",
                    title: "Term No.",
                    content: this.$store.state.student.term,
                    visible: this.$store.state.student.options.term_no,
                },
                {
                    id: "8",
                    title: "Card ID",
                    content: this.$store.state.student.card_id,
                    visible: this.$store.state.student.options.card_id,
             
                },
                {
                    id: "9",
                    title: "Gender",
                    content: this.$store.state.student.gender,
                    visible: this.$store.state.student.options.gender,
                },
                {
                    id: "10",
                    title: "Email",
                    content: this.$store.state.student.email,
                    visible: this.$store.state.student.options.email,
                     
                },
                {
                    id: "11",
                    title: "Phone Number",
                    content: this.$store.state.student.phone,
                    visible: this.$store.state.student.options.phone_number,
                },
                
            ],
        }
    },
    methods: {
        ...mapActions([
            'updateStudentInfoOptions',
            'getVisitedStudentInfo'
        ]),
        makeVisiblable(index, id) {
            this.$store.dispatch('updateStudentInfoOptions', id);
            this.properties[index].visible = !this.properties[index].visible;
        }
    },
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

