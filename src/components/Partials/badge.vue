<template>
    <div>
        <div class="badge-container pl-2 py-2 my-2 row"
            :style="{borderColor: color}"
            :class="{opacity: !visible}"
            @click="clicked"
            >
            <slot name="icon" class="col-3"></slot>
            <div class="col">
                <h2 class="h4 font-weight-bold">
                {{ label }} 
                <slot name="time"></slot>
                <i v-if="visible" class="fa float-right pt-3" :class="iconClass"></i>
                </h2>
                <h3 class="h5">{{ content }}</h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        content: {
            required: true
        },
        iconClass: {
            type: String,
        },
        color: {
            type: String,
            default: "#7F449B" 
        },
        visible: {
            type: Boolean,
            default: true
        }
    },
    // computed: {
    //     visiblable:  function() {
    //        return this.visible == "true"
    //     }
    // },
    methods: {
        clicked($event) {
            this.$emit("clicked", $event);
        }
    }
}
</script>
<style scoped>
    .opacity {
        opacity: 0.75;
    }
    .badge-container {
        box-shadow: 3px 3px 20px -10px #000;
        border-radius: 15px;
        border-left: 7px solid;
    }
    h3 {
        opacity: 0.8;
    }
</style>

