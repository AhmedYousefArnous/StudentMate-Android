 <template>
  <form class="py-3 container">
      <h3 class="text-center py-3 font-weight-bold">
            Academic Information
      </h3>
      <div class="row justify-content-center">      
        <select class="custom-select col-9 my-3">
            <option selected>Select your university</option>        
            <option value="1">Mansoursa University</option>
        </select>
        <select class="custom-select col-9 my-3">
            <option selected>Select your faculty</option>        
            <option value="1">Faculty Of Engineering</option>
        </select>
        <select class="custom-select col-9 my-3">
            <option selected>Select your department</option>
            <option value="1">Computer Science &amp; Systems</option>
            <option value="2">Mechanical </option>
            <option value="3">Civil </option>
        </select>
        <select class="custom-select col-9 my-3">
            <option selected>Select your section</option>    
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <select class="custom-select col-9 my-3">
            <option selected>Select your term</option>        
            <option value="1">First</option>
            <option value="2">Second</option>
        </select>
        <!-- <select class="custom-select col-9 my-3">
            <option selected>Select your Nationality</option>        
            <option value="1">Egyptain</option>
        </select> -->
        <select class="custom-select col-9 my-3">
            <option selected>Gender</option>        
            <option value="0">Female</option>
            <option value="1">Male</option>
        </select>
        <input-form
          type="text"    
          class="col-12 px-0"
          placeholder="Arabic Name."
          ></input-form>
        <input-form
        type="text"    
        class="col-12 px-0"
        placeholder="Card ID."
        ></input-form>
      </div>
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
      this.$router.push('/profile/edit');
    }
  },
  components: {
    'input-form' : input
  }
}
</script>
<style scoped>
</style>
