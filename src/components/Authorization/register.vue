 <template>
  <form class="py-3">
    <input-form
      class="row"
      placeholder="Username."
      ></input-form>
    <input-form
      class="row"    
      type="email"          
      placeholder="Email."
      ></input-form>
    <input-form
      class="row"  
      type="password"            
      placeholder="Password."
      ></input-form>
    <input-form
      class="row"    
      type="password"          
      placeholder="Confirm Password."
      ></input-form>
    <div
      class="row form-group justify-content-center"
      >
      <button 
        class="btn btn-purple btn-circle mt-2"
        @click.prevent="register"
        >
        <i class="fa fa-sign-in"></i> Register</button>
    </div>
  </form>
</template>
<script>
import input from '../Forms/input.vue'
export default {
  methods: {
    register() {

      // Register Http Logic
      this.$router.push('/main');
    }
  },
  components: {
    'input-form' : input
  }
}
</script>
