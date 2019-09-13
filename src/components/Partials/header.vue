<template>
    <div class="row justify-content-between px-4 py-2 header"
        :class="[background, color]"
        >
        <i class="fa fa-bars mt-2"></i>
        <!-- <i class="fa fa-sign-out"></i> -->
        <img src="static/img/logo-invert.png" alt=""  class="col-9 col-md-4 col-lg-3">
        <router-link
            tag="i"
            class="fa fa-gear mt-2"
            to="/Settings"
            ></router-link>
    </div>
</template>
<script>
export default {
    props: {
        background: {
            type: String,
            default:  "bg-purple"
        },
        color: {
            type: String,
            default:  "text-white"
        }   
    }
}
</script>
<style scoped lang="scss">
    @import "../../assets/scss/Abstractions/variables";

    .header {
        z-index: 3;
        background-color: $color-primary;
        padding: 10px 15px;
        font-size: 24px;
        color: white;
        position: fixed;
        top: 0;
        left: 15px;
        width: 100vw;
        
    }
    .fa {
        font-size: 28px;
        margin-top: 8px;
        /* color: #7e238e; */
    }
    .fa-sign-out {
        transform: rotateY(180deg)
    }
</style>

