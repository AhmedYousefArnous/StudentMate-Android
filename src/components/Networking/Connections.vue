<template>
  <div class="container content-container ">
    <app-header
        link="/Networking"
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
          :placeholder="'Seach in your ' +  $route.params.type.toLowerCase() + ' ...'"
          @search="searchText = $event"
          ></search-box>

    <transition-group 
        class="row justify-content-center"
        appear
        enter-class=""
        enter-active-class="animated flipInX"
        leave-class=""
        leave-active-class="animated flipOutX"
        >
        <connection-badge
            class="col-11 col-md-5 mx-3" 
            iconClass="fa-close"
            v-for="(connection, i)  in filteredConnectionsContainers"
            :label="getName(connection)"
            :content="connection.sender.faculty.name"
            :key="i * 2"
            @clicked="remove(i)"
            >
            <img  slot="icon" :src="picture" class="avatar avatar-conversation" alt="">
        </connection-badge>

    </transition-group>
   

  </div>
</template>
<script>
import Header from './Header.vue';
import badge from '../Partials/badge.vue';
import SearchBox from './SearchBox.vue';
import {mapGetters} from 'vuex'


export default {
    components: {
        appHeader: Header,
        'connection-badge': badge,
        SearchBox  
    },
    data: function() {
        return {
            searchText: '',
        }
    },
    computed: {
        currentConnectionPage() {
            return this.$route.params.type;
        },
        picture: function() {
                return this.$store.getters.host + 'users/default.png';
        },   
        connectionsContainers: function() {
            switch(this.$route.params.type) {
                case 'Friends': 
                    return this.$store.state.student.connections.current;
                    break;

                case 'Blocked': 
                    return this.$store.state.student.connections.blocked;
                    break;

                case 'Send': 
                    return this.$store.state.student.connections.send;
                    break;

                case 'Recieved': 
                    return this.$store.state.student.connections.reciever;
                    break;
            }
         },

        filteredConnectionsContainers() {
            switch(this.$route.params.type) {
                case 'Friends': 
                case 'Blocked': 
                    return this.connectionsContainers.filter((element) => {
                        if( this.$store.state.student.id === element.sender.id) {
                            return element.reciever.name.match(this.searchText);
                        }
                        if( this.$store.state.student.id === element.reciever.id) {
                            return element.sender.name.match(this.searchText);
                        }
                    });
                    break;

                case 'Send': 
                    return this.connectionsContainers.filter((element) => {
                        return element.reciever.name.match(this.searchText);
                    });
                    break;

                case 'Recieved': 
                    return this.connectionsContainers.filter((element) => {
                        return element.sender.name.match(this.searchText);
                    });
                    break;
            }
            
        }
    },
    methods: {
        ...mapGetters([
            'host',
        ]),
        getName(connection) {
            switch(this.$route.params.type) {
                case 'Friends': 
                case 'Blocked': 
                    if( this.$store.state.student.id === connection.sender.id) {
                        return connection.reciever.name;
                    }
                    if( this.$store.state.student.id === connection.reciever.id) {
                        return connection.sender.name;
                    }
                    break;

                case 'Send': 
                    return connection.reciever.name;
                    break;

                case 'Recieved': 
                    return connection.sender.name;
                    break;
            }
        },
        remove(i)  {
            // removing connection according the param type
            // this.Connections.splice(i, 1);
        },
    },
}
</script>
<style lang="scss" scoped>
    .connecting-connections {
        opacity: 0.8;
    }    
</style>
