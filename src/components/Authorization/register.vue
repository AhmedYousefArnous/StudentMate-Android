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
import {mapActions} from 'vuex'

export default {
  methods: {
    // ...mapActions([
    //   'register'
    // ]),
    register() {
      // Register Http Logic
      // this.$store.dispatch('register', {

      // });
      // this.$router.push('/main');
    }
  },
  components: {
    'input-form' : input
  }
}
</script>
