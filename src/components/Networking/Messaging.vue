<template>
  <div class="container pb-5">
    <conversation-header
        :link="'/Chat/' + $route.params.type"
        @clicked="overlay = !overlay"
        >
        <span slot="title">
                <!-- <img 
                    class="avatar avatar-header mx-1 mb-2"
                    :src="picture"/> -->
            <span 
                v-if="$route.params.type == 'Conversations'"                                
                >
                John Doe
                <!-- {{conversation.name}} -->
            </span>

            <img 
                v-if="$route.params.type == 'Groups'"
                class="avatar avatar-header mx-1 mb-1"
                src="static/group.jpg"/>
            <span v-if="$route.params.type == 'Groups'">CSED Group</span>

            
            <img 
                v-if="$route.params.type == 'Channels'"
                class="avatar avatar-header mx-1 mb-1"
                src="static/channel.jpg"/>
            <span v-if="$route.params.type == 'Channels'">CSED 2021</span>
        </span>
    </conversation-header>    
        <options
            v-if="overlay"
            >

            <li 
                class="list-group-item"                 
                v-for="(Setting, i) in Settings"
                :key="i"
                style="cursor: pointer"
                v-html="Setting.name"
                @click="Setting.method">
            </li>

        </options>
        
        <transition-group 
            class="content-container d-flex flex-column pb-3"
            enter-active-class="animated bounceInUp"
            tag="div"
            >
            
            <div 
                class="messages-container"
                v-for="(message,index) in messages" 
                :class="{'align-self-end':message.mine}"
                :id="'messages-container-' + index"
                :key="index * 2">

                    <personal-message 
                        v-if="message.mine"
                        :msg="message.msg"
                        :class="{'my-2': message.mine}"
                        
                        >
                        <span slot="time" v-if="message.dateCheck">18:30</span>
                    </personal-message>
                    
                    <recieved-message 
                        v-else
                        :msg="message.msg"
                        >
                        <img 
                            slot="avatar"
                            class="avatar avatar-msg"
                            v-if="messages[index - 1].mine !== message.mine "
                            src="/static/profile.png"/>
                        <h3
                            slot="name"
                            class="h5"
                            v-if="messages[index - 1].mine !== message.mine "
                            >John Doe</h3>
                        <span slot="time" v-if="message.dateCheck">18:30</span>
                        
                    </recieved-message>
                </div>
                            
            
        </transition-group>
        <send-input @messageSend="messageSendFunc($event)"></send-input>
  </div>
</template>
<script>
import PersonalMessage from './PersonalMessage.vue';
import RecievedMessage from './RecievedMessage.vue';
import SendInput from '../Forms/SendInput.vue';
import options from '../Partials/options.vue';
import Header from './Header.vue';
import {mapGetters, mapActions, mapState} from 'vuex'

export default {
    components: {
     PersonalMessage,
     RecievedMessage,
     SendInput,
     ConversationHeader: Header,
     options
    },
    data: function () {
        return {
            overlay: false,
            Settings: [
                {name: '<i class="fa fa-edit"></i> Update', method: this.updateConversation},
                {name: '<i class="fa fa-close"></i> Delete', method: this.deleteConversation},
            ],
            messages: [
                {
                    mine: true,
                    msg: "Lorem ipsum dolor sit amet.",
                    dateCheck: false
                },
                {
                    mine: false,
                    msg: "Lorem ipsum dolor sit amet.",
                    dateCheck: false
                },
                {
                    mine: false,
                    msg: "Lorem ipsum dolor sit amet.",
                    dateCheck: false               
                },
                {
                    mine: true,
                    msg: "Lorem ipsum dolor sit amet.",
                    dateCheck: false               
                },
            ],
            index: 0,
            conversation: {
                messages: []
            } 
        }
    },
    methods: {
        ...mapActions([
            'deleteConversation',
            'getConversationInfo'        
        ]),
        updateConversation() {
            console.log("updateConversation...!");
        },
        deleteConversation() {
            this.$store.dispatch('deleteConversation', this.$route.params.id).then(
                this.$router.push('/Chat/' + $route.params.type)             
            )
        },
        messageSendFunc($event) {
            // if ($event == '') return;
            // this.messages.push({
            //     mine: true,
            //     msg: $event,
            //     dateCheck: true
            // });
            // if(this.messages[this.messages.length - 2].mine == 
            //     this.messages[this.messages.length - 1].mine) {
            //         this.messages[this.messages.length - 2].dateCheck = false;
            // }

        }
    },
    computed: {
        ...mapGetters([
            'host',
            'conversationName',
            'oppositeConversationStudent',
            'conversationMessages'
        ]),
        ...mapState({
            messagesTest: state => state.conversation
        }),

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
        // conversation: {
        //     get() {
        //         return this.$store.getters.conversation;
        //     }
        // }
    },
    beforeCreate() {
        this.$store.dispatch('getConversationInfo', this.$route.params.id)
                    .then(
                        // () => console.log(this.conversation)
                        // () => 
                         setInterval(() => {
                             this.conversation = this.$store.state.conversation;                             
                         }, 500)
                        // () => {
                        //      setInterval(() => {
                        //         this.conversation = this.$store.getters.conversation;
                        //      }, 500)
                            // setTimeout(() => {
                            //     // console.log("Done...!");
                            // this.conversation = this.$store.getters.conversation;
                            // }, 5000)
                        // } 
                    );
    },
    created() {
        // for (let index = 0; index < this.messages.length; index++) {
        //     if(index == (this.messages.length - 1))
        //     {
        //         this.messages[index].dateCheck = true;
        //         break;
        //     }

        //     if (this.messages[index].mine == this.messages[index + 1 ].mine){
        //         this.messages[index].dateCheck = false;
        //     } else {
        //         this.messages[index].dateCheck = true;
        //     }
        // }
    },
    updated() {
        // var vm = this;
        // setTimeout(function() {
        //     var x = document.getElementById("messages-container-" + vm.index);
        //     window.scrollTo(0, x.offsetTop + x.scrollHeight);
        // }, 550);
        // this.messages = this.conversation.messages;
        console.log(this.conversation);
        console.log(this.messagesTest);
        console.log(this.conversationName);
        console.log(this.conversationName);
        // console.log(this.messages);
        
    },
    mounted() {
        // setInterval(() => {
        //     this.conversation = this.$store.state.conversation;                             
        // }, 500)
        console.log(this.conversation);
        console.log(this.messagesTest);    
        console.log(this.conversationName);
    },
    // watch: {
    //     messages: function(value) {
    //         this.index = value.length - 1;
    //     }
    // },
    
}
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/Abstractions/variables";
    .messages-container {
        max-width: 80%;
        transition: all 5s ease-in-out;   
    }

</style>
