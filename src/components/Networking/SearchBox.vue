 <template>
  <transition-group 
    appear 
    tag="div"
    enter-active-class="animated fadeIn"
    class="form-group d-flex justify-content-center pt-2">
    <input class="form-control" v-model="word" :placeholder="placeholder" key="input" @keyup="search">
    <i class="fa fa-search"  key="icon"></i>
  </transition-group >
</template>
<script>
export default {
    data: function () {
        return {
            word: '',
        }
    },
    props: {
        placeholder: {
            type: String,
            required: true
        }
    },
    methods: {
        search() {
            this.$emit("search", this.word );
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/Abstractions/variables";
    .form-group {
        margin-top: 80px;
        margin-bottom: 25px;
        position: relative;
        .fa-search {
            position: absolute;
            color: $color-primary;
            top: 13px;
            right: 15px;
            font-size: 24px;
        }
    }
    .form-control{
        box-shadow: 0px 3px 15px -7px #7f449bcc;
        outline-color: transparent;
        border: none;
        font-size: 16px;
        border-radius: 20px;
        padding: 15px 25px;
        color: #969494;
    }
    
</style>
