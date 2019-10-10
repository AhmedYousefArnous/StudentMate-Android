<template>
  <transition
    appear
    enter-active-class="animated fadeInUp"
    >
      <div class="navigation-icons">
            <span 
                class="lectures"
                @click="$router.push(link + '/Lectures')">
                <i 
                    class="fa fa-video-camera"
                ></i>
                <span> Lectures </span>
            </span>
            <span class="parts" @click="$router.push(link + '/Parts')">
                <i class="fa fa-file" ></i>
                <span> Parts </span>
            </span>
            <span class="exams" @click="$router.push(link + '/Exams')">
                <i class="fa fa-flask" ></i>                
                <span> Exams </span>
            </span>
            <span class="recommendations"  @click="$router.push(link + '/Recommendations')">
                <i class="fa fa-plus"></i>            
                <span> Recommendations </span>
            </span>
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
        padding: 5px 15px;
        width: 100vw;
        z-index: 4;
        height: 40px;
        background-color: $color-primary;
        color: white;

        display: grid;
        grid-template-columns: repeat(9 , 1fr);
        grid-template-rows: 0px;
        justify-items: center;
        span {
            text-align: center;
            span {
                font-size: 16px;
                @media (max-width: 450px ) {
                    font-size: 12px;
                        
                }
                @media (max-width: 350px ) {
                    display: none;
                        
                }
            }
        }
        span.lectures {
            grid-column: 1 / 3;
        }

        .parts {
            grid-column: 3 / 5;
        }

        .exams {
            grid-column: 5 / 7;
        }
        
        .recommendations {
            grid-column: 7 / 10;
        }
        .fa {
            font-size: 16px;
            &.active {
                    background-color: #FFF;
                    color: #d100d8;
                    // padding: 12px 12px 37px 12px;
                    // position: relative;
                    bottom: 30px;
                    border: 1.3px solid #d100d8;
                    border-radius: 50%;
            }
        }   
    }    
</style>
