<template>
    <div class="container">
        <!-- <app-header background="bg-transparent"></app-header> -->
        <div class="row justify-content-between px-3">
            <router-link
                tag="i"
                class="fa fa-angle-double-left" 
                to="/main"
                ></router-link>
            <router-link
                tag="i"
                class="fa fa-pencil-square" 
                to="/profile/edit"
                ></router-link>
        </div>
        <header class="row card card-inverse">
            <img src="/static/profile.png" class="card-img"/>
            <div class="card-img-overlay">
                <div class="row justify-content-center pt-2 text-center">
                    <img src="/static/profile.png" class="img-circle avatar"/>
                    <h1 class="col-12 h2 my-3">
                        John Doe
                    </h1> 
                    <div class="col-12">
                        <button class="btn btn-purple btn-sm mr-2 message-btn" type="button">
                            <i class="fa fa-send"></i> Message
                        </button>
                        <button class="btn btn-purple btn-sm" type="button">
                            <i class="fa fa-user-plus"></i> Connect
                        </button>
                    </div>
                    <h2 class="h4 mt-4">
                        Joined <strong> Sep 23, 2019 </strong>
                    </h2> 
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
                @clicked="makeVisiblable(i)"
                ></profile-badge>
        </transition-group>
    </div>
</template>
<script>
import header from './Partials/header.vue';
import badge from './Partials/badge.vue';
export default {
    components: {
        'app-header': header,
        'profile-badge':badge
    },
    data: function () {
        return {
            properties: [
                {
                    id: "0",
                    title: "Arabic Name",
                    content: "أبجد هوز",
                    visible: "true"
                },
                {
                    id: "1",
                    title: "University",
                    content: "Mansoura University",
                    visible: "true"
                },
                {
                    id: "2",
                    title: "Faculty",
                    content: "Faculty Of Engineering",
                    visible: "true"                    
                },
                {
                    id: "3",
                    title: "Department",
                    content: "omputer Science &amp; Systems Engineering",
                    visible: "true"                    
                },
                {
                    id: "4",
                    title: "Level",
                    content: "Level 300",
                    visible: "true"
                    
                },
                {
                    id: "5",
                    title: "Section",
                    content: "One",
                    visible: "false"
                    
                },
                {
                    id: "6",
                    title: "Term No.",
                    content: "First",
                    visible: "false"
                    
                },
                {
                    id: "7",
                    title: "Card ID",
                    content: "11114569",
                    visible: "false"
                },
                {
                    id: "8",
                    title: "Gender",
                    content: "Male",
                    visible: "true"
                    
                },
                // {
                //     id: "9",
                //     title: "Nationality",
                //     content: "Egyptian",
                //     visible: "true"
                // },
                {
                    id: "10",
                    title: "Email",
                    content: "JohnDoe@gmail.com",
                    visible: "false"                    
                },
                {
                    id: "11",
                    title: "Phone Number",
                    content: "+2-321569874",
                    visible: "false"                    
                },
                
            ]
        }
    },
    methods: {
        makeVisiblable(i) {
            this.properties[i].visible = this.properties[i].visible == "true" ? "false" : "true";
        }
    }
}
</script>
<style scoped>
    .container {
        overflow: hidden;
    }
    .fa {
        font-size: 14px
    }

    .fa-angle-double-left,
    .fa-pencil-square {
        font-size: 26px;
        position: relative;
        color: white;
        z-index: 2;
        top: 15px;
    }
    .card {
        border: none;
        height: 280px;
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

  

    
    .message-btn {
        opacity: 0.6;
    }
    h1 span {
        width: 5px;
        height: 5px;
        background-color: #7e238e
    }
</style>

