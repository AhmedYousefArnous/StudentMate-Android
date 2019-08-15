 <template>
  <form class="py-3">
    <input-form
      class="row"
      placeholder="Enter Your Username."
      ></input-form>
    <input-form
      class="row"
      type="password"    
      placeholder="Enter Your Password."
      ></input-form>
    <div
      class="row form-group justify-content-center"
      >
      <button 
        class="btn btn-purple btn-circle mt-2"
        @click.prevent="login"
        >
        <i class="fa fa-sign-in"></i> Login</button>
    </div>
  </form>
</template>
<script>
import input from '../Forms/input.vue'
export default {
  methods: {
    login() {
      // Login Http Logic
      this.$router.push('/main');
    }
  },
  components: {
    'input-form' : input
  }
}
</script>
