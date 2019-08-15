<template>
    <transition
        appear
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutUp"
        >
        <router-link 
            tag="div"
            :to="link"
            class="card">
            <img :src="icon" alt=""  class="col-img-top">
            <div class="card-body">
                <h2 class="card-title">
                    {{title}}
                </h2>
                <p class="card-text">
                    {{text}}      
                </p>
            </div>
        </router-link>
    </transition>
</template>
<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
    img {
        max-width: 70% ;
        margin: 0 auto;
        position: relative;
        bottom: 50px;
        margin-bottom: -50px;
    }
    .card 
    {
        margin-top: 60px;
        border-radius: 25px;
        border: none;
        height: fit-content !important;
        background-color: #d100d8;
        color: white;
    }
    .card-text {
        opacity: 0.7;
    }

    
</style>

