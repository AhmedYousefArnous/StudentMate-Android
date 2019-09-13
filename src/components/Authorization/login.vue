 <template>
  <form class="py-3">
    <input-form
      class="row"
      @valueChanged="userCredentials.username = $event"
      placeholder="Enter Your Username."

      ></input-form>
    <input-form
      class="row"
      type="password"
      @valueChanged="userCredentials.password = $event"          
      placeholder="Enter Your Password."
      ></input-form>
    <div
      class="row form-group justify-content-center"
      >
      <button 
        class="btn btn-purple btn-circle mt-2"
        @click.prevent="login"
        :disable="canSend"
        >
        <i class="fa fa-sign-in"></i> Login</button>
    </div>
  </form>
</template>
<script>
import input from '../Forms/input.vue'
import {mapActions} from 'vuex'

export default {
  data: function () {
    return {
        userCredentials: {
            username: '',
            password: ''
        },
        canSend: true
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    login() {
      // Login Http Logic
      this.canSend = false,
      this.$store.dispatch('login', this.userCredentials);
    }
  },
  components: {
    'input-form' : input
  }
}
</script>
