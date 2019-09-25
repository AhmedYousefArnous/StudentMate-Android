<template>
  <div class="container">
      <conversation-header
        link="/Networking"
        >
        <span slot="title">
            <i 
                class="fa"
                :class="{'fa-comments': $route.params.type === 'Conversations',
                         'fa-users': $route.params.type === 'Groups',
                         'fa-tv': $route.params.type === 'Channels'}"
                ></i>
            {{$route.params.type}}
        </span>
      </conversation-header>

      <search-box
          :placeholder="'Seach in your ' +  $route.params.type.toLowerCase() + ' ...'"
          @search="searchText = $event"
          ></search-box>

      <div class="conversation-container">
        <conversation-badge
            v-for="(msgContainer, i) in filteredMsgsContainers"
            :key="i"
            :picture="picture"
            :name="msgContainer.name"
            @clicked="navigate(link + msgContainer.id )"
            ></conversation-badge>
      </div>
  </div>
</template>
<script>
import ConversationBadge from './ConversationBadge.vue';
import Header from './Header.vue';
import SearchBox from './SearchBox.vue';
import {mapGetters} from 'vuex'

export default {
    components: {
     ConversationBadge,
     ConversationHeader: Header,
     SearchBox
    },
    methods: {
        ...mapGetters([
            'host'
        ]),
        navigate(url) {
            this.$router.push(url);
        }
    },
    data: function () {
      return {
        searchText: ''
      }
    },
    computed: {
        picture: function() {
            if(this.$route.params.type === 'Conversations') {
                return this.$store.getters.host + 'users/default.png';
            }

            if(this.$route.params.type === 'Groups') {
                return this.$store.getters.host + 'categories/March2019/XfoEQxuQNsfd2hwZZo56-medium.jpg';
            }
       
            if(this.$route.params.type === 'Channels') {
                return this.$store.getters.host + 'channels-notifications/March2019/JfYtBwTlSTAX83RTek5q.png';
            }
        },
        link: function() {
            if(this.$route.params.type === 'Conversations') {
                return '/Chat/Conversations/';
            }

            if(this.$route.params.type === 'Groups') {
                return '/Chat/Groups/';
            }
       
            if(this.$route.params.type === 'Channels') {
                return '/Chat/Channels/';
            }
        },    
        MsgsContainers: function() {
            if(this.$route.params.type === 'Conversations') {
                return this.$store.state.student.Conversations;
            }

            if(this.$route.params.type === 'Groups') {
                return this.$store.state.student.groups.subscribed;
            }
       
            if(this.$route.params.type === 'Channels') {
                return this.$store.state.student.Channels.subscribed;
            }
        },
        filteredMsgsContainers() {
            return this.MsgsContainers.filter((element) => {
                return element.name.match(this.searchText);
            });
        }

    }
    
}
</script>
<style lang="scss" scoped>
</style>
