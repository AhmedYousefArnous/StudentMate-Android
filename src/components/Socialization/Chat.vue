<template>
  <div class="container">
      <conversation-header
        link="/Socialization"
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
          v-if="$route.params.type === 'Conversations'"
          placeholder="Seach in your conversations..."
          ></search-box>
      <search-box
          v-if="$route.params.type === 'Groups'"
          placeholder="Seach in your Groups..."
          ></search-box>
      <search-box
          v-if="$route.params.type === 'Channels'"
          placeholder="Seach in your Channels..."
          ></search-box>

      <div class="conversation-container">
        <conversation-badge
            v-if="$route.params.type === 'Conversations'"
            v-for="n in 6"
            :key="n"
            :lastMsg="conversations[0].lastMsg"
            :msgTime="conversations[0].msgTime"
            :name="conversations[0].name"
            :picture="conversations[0].picture"
            @clicked="navigate('/Chat/Conversations/1')"
            ></conversation-badge>

        <conversation-badge
            v-if="$route.params.type === 'Groups'"
            v-for="n in 6"
            :key="n"
            :lastMsg="Groups[0].lastMsg"
            :msgTime="Groups[0].msgTime"
            :name="Groups[0].name"
            :picture="Groups[0].picture"
            @clicked="navigate('/Chat/Groups/1')"
            ></conversation-badge>

        <conversation-badge
            v-if="$route.params.type === 'Channels'"
            v-for="n in 6"
            :key="n"
            :lastMsg="Channels[0].lastMsg"
            :msgTime="Channels[0].msgTime"
            :name="Channels[0].name"
            :picture="Channels[0].picture"
            @clicked="navigate('/Chat/Channels/1')"
            ></conversation-badge>
      </div>
  </div>
</template>
<script>
import ConversationBadge from './ConversationBadge.vue';
import Header from './Header.vue';
import SearchBox from './SearchBox.vue';
export default {
    components: {
     ConversationBadge,
     ConversationHeader: Header,
     SearchBox
    },
    methods: {
        navigate(url) {
            this.$router.push(url);
        }
    },
    data: function () {
      return {
        conversations: [
          {
            lastMsg: 'Lorem ipsum dolor sit amet.',
            msgTime: "18:30",
            name: 'john Doe',
            picture: 'static/profile.png'
          }
        ],
        Groups: [
          {
            lastMsg: 'Lorem ipsum dolor sit amet.',
            msgTime: "18:30",
            name: 'CSED 2021 Group',
            picture: 'static/group.jpg'
          }
        ],
        Channels: [
          {
            lastMsg: 'Lorem ipsum dolor sit amet.',
            msgTime: "18:30",
            name: 'CSED Channel',
            picture: 'static/channel.jpg'
          }
        ]
      }
    }
}
</script>
<style lang="scss" scoped>
</style>
