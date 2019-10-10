<template>
        <div>
            <slot name="avatar"></slot>
            <slot name="name"></slot>
            <div class="msg">
                <slot name="img"></slot>
                {{msg}}
                <br/>
                <slot name="time"></slot> 
            </div>
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
    div {
        position: relative;
        
        h3 {
            position: absolute;
            top: 20px;
            left: 65px;
            opacity: 0.8;
        
        }
        .msg {
                background-color: $color-white;
                color: $color-black-primary;
                padding: 5px 15px;
                border-radius: 15px;
                box-shadow: 3px 3px 10px -5px #000;
                width: fit-content;
                font-size: 14px;
                position: relative;
                font-weight: 500;
                margin: 0px 0 5px 40px;
                z-index: 2;
                span {
                    color: $color-gray;
                    position: absolute;
                    bottom: -25px;
                    left: 10px;
                    font-weight: 600;
                    opacity: 0.65;

                }
            }
    }
</style>
