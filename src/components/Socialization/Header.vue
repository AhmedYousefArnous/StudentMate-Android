<template>
  <transition 
     appear
     enter-active-class="animated slideInDown"
    >
    <div 
        class="d-flex header justify-content-between">
            <div>
                <router-link
                    tag="i"
                    class="fa fa-angle-double-left mr-2" 
                    :to="link"
                    ></router-link>
                <slot name="title"></slot>

            </div>
            <i class="fa fa-bars mt-2"></i>
        </div>
  </transition>
</template>
<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/Abstractions/variables";
    .header {
        z-index: 3;
        background-color: $color-primary;
        padding: 10px 15px;
        font-size: 24px;
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        span {
            font-size: 20px;
        }
    }    
</style>
