<template>
  <transition
    appear
    enter-active-class="animated fadeInUp"
    >
      <div class="navigation-icons">
            <i 
                class="fa fa-video-camera"
                @click="$router.push(link + '/Lectures')"
            ></i>
            <i class="fa fa-file" @click="$router.push(link + '/Parts')"></i>
            <i class="fa fa-flask" @click="$router.push(link + '/Exams')"></i>
            <i class="fa fa-plus" @click="$router.push(link + '/Recommendations')"></i>
     </div>
  </transition>
</template>
<script>
export default {
    computed: {
        link: function() {
            return "/Materials/" + this.$route.params.id;
        }
    },
    methods: {
        animate(url) {

            $router.push(url);
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/Abstractions/variables";
    .navigation-icons {
        position: fixed;
        bottom: 0;
        left: 0;
        font-size: 28px;
        padding: 10px 15px;
        width: 100vw;
        z-index: 4;
        background-color: $color-primary;
        color: white;

        display: grid;
        grid-template-columns: repeat(4 , 1fr);
        grid-template-rows: 30px;
        justify-items: center;

        .fa-video-camera {
            grid-column: 1 / 2;
            position: relative;
        }

        .fa-file {
            grid-column: 2 / 3;
        }

        .fa-flask {
            grid-column: 3 / 4;
        }
        
        .fa-plus {
            grid-column: 4 / 5;
        }
        .fa {
            &.active {
                    background-color: #FFF;
                    color: #d100d8;
                    padding: 12px 12px 37px 12px;
                    // position: relative;
                    bottom: 30px;
                    border: 1.3px solid #d100d8;
                    border-radius: 50%;
            }
        }   
    }    
</style>
