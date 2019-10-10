 <template>
  <form class="py-3 container">
    <h3 class="text-center py-3 font-weight-bold">
          Personal Information
    </h3>
    <input-form
      class="row"
      placeholder="Username."
      ></input-form>
    <input-form
      class="row"
      type="password"    
      placeholder="Password."
      ></input-form>
    <input-form
      class="row"
      type="email"    
      placeholder="Email."
      ></input-form>
    <input-form
      class="row"
      type="phone"    
      placeholder="Phone."
      ></input-form>
    <div
      class="row form-group justify-content-center"
      >
      <button 
        class="btn btn-purple mt-2"
        @click.prevent="save"
        >
        <i class="fa fa-save"></i> Save</button>
    </div>
  </form>
</template>
<script>
import input from '../Forms/input.vue'
export default {
  methods: {
    save() {
      // Login Http Logic
      this.$router.push('/profile');
    }
  },
  components: {
    'input-form' : input
  }
}
</script>
<style scoped>
</style>
