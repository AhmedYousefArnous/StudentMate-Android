<template>
  <router-link 
        class="col-12 col-sm-6 col-md-4 card card-inverse pb-4"
        tag="div"
        :to="link"
        >
        <img :src="icon" class="card-img"/>
        <div class="card-img-overlay d-flex align-items-center justify-content-center">
            <h2>
                {{title}}
            </h2>
        </div>
        <span class="notification-badge">
            <i class="fa fa-bell"></i>
            <span class="number">{{notificationNumber}}</span>
        </span>
  </router-link>
</template>
<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        notificationNumber: {
            type: String,
            default: 0
        },
        
    },
    computed: {
        link: function() {
            return "Materials/" +  this.id;
        }
    },

}
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/Abstractions/variables";

    .card {
        padding:0;
        border: none;
            .card-img-overlay {
                background-color: #7f449b4d;
                color: #FFF;
            }
    }
    
</style>
