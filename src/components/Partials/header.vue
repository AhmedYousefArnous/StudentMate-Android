<template>
    <div class="row justify-content-between px-3 py-2"
        :class="[background, color]"
        >
        <i class="fa fa-bars"></i>
        <!-- <i class="fa fa-sign-out"></i> -->
        <img src="/static/img/logo-invert.png" alt=""  class="col-9">
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
<style scoped>
    div {
        position: absolute;
        top: 0;
        left: 15px;
        width: 100%
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

