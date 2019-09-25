<template>
    <div class="row justify-content-between px-4 py-2 header"
        :class="[background, color]"
        >
        <i class="fa fa-bars"></i>
        <!-- <i class="fa fa-sign-out"></i> -->
        <img src="static/logo-invert.png" alt=""  class="col-8 col-md-4 col-lg-3">
        <router-link
            tag="i"
            class="fa fa-gear"
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
        padding: 5px 15px;
        font-size: 24px;
        color: white;
        position: fixed;
        top: 0;
        left: 15px;
        width: 100vw;
        height: 60px;
        img {
            height: 50px;
            max-height: 65px;
        }
    }
    .fa {
        font-size: 28px;
        margin-top: 10px;
        /* color: #7e238e; */
    }
    .fa-sign-out {
        transform: rotateY(180deg)
    }
</style>

