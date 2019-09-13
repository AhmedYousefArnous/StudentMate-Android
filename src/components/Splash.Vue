<template>
    <div class="container-fluid">
        <div 
            class="splash d-flex flex-column text-center"
            :class="{'justify-content-center': splashCheck,'justify-content-between': !splashCheck}"
            >
            <div>
                <img 
                    class="col"
                    :class="{ 'mt-5 pt-5': !splashCheck, 'animated': splashCheck}"
                    src="static/img/logo-invert.png"  
                />
                <h2
                    v-if="!splashCheck"
                    >
                    Welcome !
                </h2>
            </div>
            <div  class="login-action pt-3" v-if="!splashCheck">
                <div v-if="loginCheck">
                    <button 
                        class="btn btn-purple btn-circle"
                        @click="selectedForm = 'login-form'; loginCheck = false"
                        >
                        <i class="fa fa-sign-in"></i> Login</button>
                    <h4>
                        Don't have an account 
                        <span 
                            class="text-purple"
                            @click="selectedForm = 'register-form'; loginCheck = false"
                            >Register</span>
                    </h4>
                </div>
                <component :is="selectedForm" v-else></component>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import login from './Authorization/login.vue';
import register from './Authorization/register.vue';
export default {
    data: function () {
        return {
            splashCheck: true,
            loginCheck: true,
            selectedForm: 'login-form'
        }
    },
    components: {
        'login-form': login,
        'register-form': register
    },
    mount(){
        $("splash").height($(window).height());
        $(window).resize(function () {
            $("splash").height($(window).height());
        });
    },
    created() {
        setTimeout(() => {
            this.splashCheck = false;
        }, 3000);
    }
}
</script>
<style scoped>
    .login-action
    {
        background-color: #FFF;
        border-radius: 30px 30px 0 0;
        color: #000;
    }
    
</style>
