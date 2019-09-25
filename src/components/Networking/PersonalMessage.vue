<template>
        <div class="msg">
            <slot name="img"></slot>
            {{msg}}
            <br/>
            <slot name="time"></slot> 
        </div>
</template>
<script>
export default {
    props: {
        msg: { 
           type:String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/Abstractions/variables";
        .msg {
            background-color: $color-primary;
            color: #f1f1f1;
            padding: 5px 15px;
            border-radius: 15px;
            box-shadow: 4px 4px 12px -3px $color-primary-light;
            width: fit-content;
            font-size: 14px;
            position: relative;
            font-weight: 500;
            max-width: 75vw;
            margin: 0px 15px 5px 0;
            span {
                color: $color-gray;
                position: absolute;
                bottom: -25px;
                right: 0px;
                font-weight: 600;
                opacity: 0.65;
            }
        }
</style>
