 <template>
  <div class="form-group d-flex justify-content-center pt-2">
    <textarea class="form-control" v-model="msg"></textarea>
    <i class="fa fa-send" @click="messageSend"></i>
  </div>
</template>
<script>
export default {
    data: function () {
        return {
            msg: ''
        }
    },
    methods: {
        messageSend() {
            this.$emit("messageSend", this.msg );
            this.msg = '';
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../assets/scss/Abstractions/variables";
    .form-control{
        box-shadow: 3px 3px 25px -10px $color-primary;
        outline-color: transparent;
        border: none;
        font-size: 16px;
        border-radius: 25px;
        padding: 14px 25px;
        width: 92%;
        position: fixed;
        bottom: 20px;
        height: 40px;
    }
    .fa-send {
        position: fixed;
        color: $color-primary;
        bottom: 26px;
        right: 30px;
        font-size: 24px;
        cursor: pointer;
    }
</style>
