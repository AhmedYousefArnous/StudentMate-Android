 <template>
  <form class="py-3">
    <input-form
      class="row"
      placeholder="Username."
      @valueChanged="userData.username = $event"
      ></input-form>
    <input-form
      class="row"    
      type="email"          
      placeholder="Email."
      @valueChanged="userData.email = $event"

      ></input-form>
    <input-form
      class="row"  
      type="password"            
      placeholder="Password."
      @valueChanged="userData.password = $event"
      
      ></input-form>
    <input-form
      class="row"    
      type="password"          
      placeholder="Confirm Password."
      @valueChanged="userData.c_password = $event"
      
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
  data: function () {
      return {
          userData: {
              username: '',
              email: '',
              password: '',
              c_password: ''
          }
      }
  },
  methods: {
    ...mapActions([
      'register'
    ]),
    register() {
      // Register Http Logic
      this.$store.dispatch('register', this.userData);
    }
  },
  components: {
    'input-form' : input
  }
}
</script>
