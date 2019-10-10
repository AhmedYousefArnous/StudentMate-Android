<template>
    <div class="container content-container ">
        <app-header
            link="/Main"
            >
            <span slot="title">
                <i class="fa fa-comments"></i>
                Networking
            </span>
        </app-header>
        <div class="row text-center ">
            <h2 class="py-2 h1 col-12 font-weight-bold">
                    Chat
            </h2>
            <router-link 
                tag="div"
                to="/Chat/Conversations"
                class="socialization-badge mx-3 col">

                <i class="fa fa-comments-o"></i>
                <h4 >Direct</h4>
                <span class="notification-badge">
                    <i class="fa fa-bell"></i>
                    <span class="number">2</span>
                </span>
            </router-link>
            <router-link 
                tag="div"
                to="/Chat/Groups"
                class="socialization-badge mx-3 col">

                <i class="fa fa-users"></i>
                <h4 >Groups</h4>
                <span class="notification-badge">
                    <i class="fa fa-bell"></i>
                    <span class="number">2</span>
                </span>
            </router-link>
            <div class="w-100"></div>
            <router-link 
                tag="div"
                to="/Chat/Channels"
                class="socialization-badge mx-3 col mt-3">

                <i class="fa fa-tv"></i>
                <h4 >Channels</h4>
                <span class="notification-badge">
                    <i class="fa fa-bell"></i>
                    <span class="number">2</span>
                </span>
            </router-link>
        </div>
        <div class="row text-center py-4">
            <h2 class="py-3 h1 col-12 font-weight-bold">
                    Connections
            </h2>
            <router-link 
                tag="div"
                to="/Connections/Friends"
                class="socialization-badge mx-3 col">

                <i class="fa fa-users"></i>
                <h4 >Friends</h4>
                <span class="notification-badge">
                    <i class="fa fa-bell"></i>
                    <span class="number">2</span>
                </span>
            </router-link>
            <router-link 
                tag="div"
                to="/Connections/Blocked"
                class="socialization-badge mx-3 col">

                <i class="fa fa-user-times"></i>
                <h4 >Blocked</h4>
                <span class="notification-badge">
                    <i class="fa fa-bell"></i>
                    <span class="number">0</span>
                </span>
            </router-link>
            <div class="w-100 my-3"></div>
            <router-link 
                tag="div"
                to="/Connections/Send"
                class="socialization-badge mx-3 col">

                <i class="fa fa-user-plus"></i>
                <h4 >Send</h4>
                <span class="notification-badge">
                    <i class="fa fa-bell"></i>
                    <span class="number">2</span>
                </span>
            </router-link>
            <router-link 
                tag="div"
                to="/Connections/Recieved"
                class="socialization-badge mx-3 col">

                <i class="fa fa-user-plus"></i>
                <h4 >Recieved</h4>
                <span class="notification-badge">
                    <i class="fa fa-bell"></i>
                    <span class="number">2</span>
                </span>
            </router-link>
            <!-- <socialization-badge
                class="mx-3 col"
                label="Blocked"
                @clicked="navigate('/Connections/Blocked')"
                >
                <i class="fa fa-close" slot="icon"></i>
            </socialization-badge>
            <socialization-badge
                class="mx-3 col"
                label="Blocked"
                @clicked="navigate('/Connections/Blocked')"
                >
            </socialization-badge> -->
        </div>
  </div>    
</template>
<script>
import Header from './Networking/Header.vue';
import badge from './Partials/badge.vue';
export default {
    components: {
        appHeader: Header,
        socializationBadge: badge
    },
    methods: {
        navigate(url) {
            this.$router.push(url);
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../assets/scss/Abstractions/variables";

   .socialization-badge {
        box-shadow: 2px 3px 16px -9px #333;
        border-radius: 10px;
        color: #8c8c8c;
        
        .fa-users,
        .fa-user-times,
        .fa-user-plus,
        .fa-comments-o,
        .fa-tv {
            font-size: 32px;
            padding: 15px;
            color: $color-primary;

        }
    }
    .notification-badge {
        padding: 10px;
        background-color: $color-primary;
        .number {
            font-size: 12px;
        }
    }
</style>
