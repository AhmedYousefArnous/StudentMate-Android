
<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    >
    <div 
            class="row pb-4 conversation-badge" 
            @click="clicked"
            >
        <div class="col-3">
        <img :src="picture" alt="" class="avatar avatar-conversation">
        </div>
        <div class="col py-2 pl-4">
            <h2 class="h4">{{ msgContainer.name }} 
                <span class="float-right h6"> 18:30 </span>
            </h2>
            <h3 class="h5"> {{ 'Lorem ipsum dolor sit amet.' | skip}} </h3>
        </div>
    </div>
  </transition>
</template>
<script>
export default {
    props: {
        // lastMsg: {
        //     type:String,
        //     required: true
        // },
        // msgTime: {
        //     type:String,
        //     required: true   
        // },
        // name: {
        //     type:String,
        //     required: true
        // },
        picture: {
            type:String,
        },
        msgContainer: {
            type: Object,
            required: true
        }
    },
    methods: {
        clicked($event) {
            this.$emit("clicked", $event);
        }
    }
}
</script>
<style lang="scss" scoped>
    .conversation-badge {
        position: relative;
        // border-bottom: 1px solid #848484;
        &::after {
            content: "";
            display: block;
            bottom: 15px;
            left: 30%;
            width: 45%;
            position: absolute;
            height: 2.5px;
            background-color: #848484;
            border-radius: 50%;
        }
    }

    span.float-right {
        opacity: 0.8;
        font-weight: 600;
        margin-right: 15px;
        margin-top: 5px;
    }
    h3 {
        opacity: 0.5;
    }
</style>