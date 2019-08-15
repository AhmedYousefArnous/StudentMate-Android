<template>
  <div class="container content-container ">
    <app-header
        link="/Socialization"
        >
        <span slot="title">
            <i 
                class="fa"
                :class="{'fa-user-times': currentConnectionPage === 'Blocked',
                         'fa-users': currentConnectionPage === 'Friends',
                         'fa-user-plus': currentConnectionPage === 'Send' || currentConnectionPage === 'Recieved'
                         }"
                ></i>
            {{currentConnectionPage}} - Connections         
        </span>
    </app-header>

    <search-box
          :placeholder="currentConnectionPageSearch"
          @search="search($event)"
          ></search-box>
    <transition-group 
        class="row justify-content-center"
        v-if="currentConnectionPage === 'Blocked'"
        appear
        enter-class=""
        enter-active-class="animated flipInX"
        leave-class=""
        leave-active-class="animated flipOutX"
        >
        <connection-badge
            color="#d8005a"
            class="col-11 col-md-5 mx-3" 
            iconClass="fa-close"
            v-for="(connection, i)  in Connections"
            :label="connection.name"
            :content="connection.faculty"
            :key="i"
            @clicked="remove(i)"
            >
            <img  slot="icon" :src="connection.icon" class="avatar avatar-conversation" alt="">
        </connection-badge>
    </transition-group>
   
    <transition-group 
        class="row justify-content-center"
        v-if="currentConnectionPage === 'Friends'"
        appear
        enter-class=""
        enter-active-class="animated flipInX"
        leave-class=""
        leave-active-class="animated flipOutX"
        >
        <connection-badge
            :label="connection.name"
            :content="connection.faculty"
            class="col-11 col-md-5 mx-3" 
            @clicked="remove(i)"
            v-for="(connection, i)  in Connections"
            :key="i"
            iconClass="fa-close"
            >
            <img  slot="icon" :src="connection.icon" class="avatar avatar-conversation" alt="">
        </connection-badge>
    </transition-group>
    <transition-group 
        class="row justify-content-center"
        v-if="currentConnectionPage === 'Send' || currentConnectionPage === 'Recieved'"
        appear
        enter-class=""
        enter-active-class="animated flipInX"
        leave-class=""
        leave-active-class="animated flipOutX"
        >
        <connection-badge
            :label="connection.name"
            :content="connection.faculty"
            color="#8d8d8d"
            class="col-11 col-md-5 mx-3 connecting-connections"             
            v-for="(connection, i)  in Connections"
            :key="i"
            iconClass="fa-close"
            @clicked="remove(i)"
            >
            <img  slot="icon" :src="connection.icon" class="avatar avatar-conversation" alt="">
        </connection-badge>
    </transition-group>

  </div>
</template>
<script>
import Header from './Header.vue';
import badge from '../Partials/badge.vue';
import SearchBox from './SearchBox.vue';

export default {
    components: {
        appHeader: Header,
        'connection-badge': badge,
        SearchBox  
    },
    data: function() {
        return {
            Connections: [
                {
                    name: 'John Doe',
                    faculty: 'Faculty of Engineering',
                    icon: '/Static/profile.png'
                },
                {
                    name: 'John Doe 2',
                    faculty: 'Faculty of Engineering',
                    icon: '/Static/profile.png'
                },
                {
                    name: 'John Doe 3',
                    faculty: 'Faculty of Engineering',
                    icon: '/Static/profile.png'
                },
                {
                    name: 'John Doe 4',
                    faculty: 'Faculty of Engineering',
                    icon: '/Static/profile.png'
                },
                {
                    name: 'John Doe 5',
                    faculty: 'Faculty of Engineering',
                    icon: '/Static/profile.png'
                }
                
            ]
        }
    },
    methods: {
        remove(i)  {
            // removing connection according the param type
            this.Connections.splice(i, 1);
        },
        search($event)  {
        }
    },
    computed: {
        currentConnectionPage: function () {
            return this.$route.params.type;
        },
        currentConnectionPageSearch: function () {
            return "Search in " + this.$route.params.type.toLowerCase() + " connections...";
        }
    },
}
</script>
<style lang="scss" scoped>
    .connecting-connections {
        opacity: 0.8;
    }    
</style>
