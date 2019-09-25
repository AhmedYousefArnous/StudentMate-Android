<template>
  <transition 
     appear
     enter-active-class="animated slideInDown"
    >
    <div 
        class="d-flex header justify-content-between">
            <router-link
                tag="div"
                :to="link"
                >
                <i class="fa fa-angle-left" ></i>
                <slot name="title"></slot> 
            </router-link>

            <i class="fa fa-bars mt-1"></i>
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
        .fa-angle-left {
            font-size: 32px;
        }
        span {
            font-size: 16px;
        }
    }    
</style>
