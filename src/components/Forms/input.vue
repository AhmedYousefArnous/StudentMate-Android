 <template>
  <div class="form-group d-flex justify-content-center pt-2">
    <input 
        :type="type" 
        class="form-control col-9 text-center" 
        :placeholder="placeholder" 
        v-model="value"
        @input="valueChanged"
        >
  </div>
</template>
<script>
export default {
    data: function () {
        return {
            value: ''
        }
    },
    methods: {
        valueChanged() {
            this.$emit('valueChanged', this.value);
        }
    },
    props: {
        placeholder: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        }
    }
}
</script>
<style scoped>
    .form-control{
        box-shadow: 0px 3px 15px -7px #7f449bcc;
        outline-color: transparent;
        border: none;
        font-size: 16px;
    }
</style>
