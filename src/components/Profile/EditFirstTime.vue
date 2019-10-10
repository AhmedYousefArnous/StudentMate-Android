 <template>
  <form class="py-3 container">
      <h3 class="text-center py-3 font-weight-bold">
            Academic Information
      </h3>
      <div class="row justify-content-center">      
        <select class="custom-select col-9 my-3" v-model="selected.university" @change="change">
            <option 
                v-for="university in universities.data"
                :key="university.id"
                :value="university.id"
            >{{university.name}}</option>
        </select>
        <!-- <select class="custom-select col-9 my-3" v-if="$refs.universityRef.value != 0">
            <option selected>Select your faculty</option>        
            <option value="1">Faculty Of Engineering</option>
        </select> -->
        <select class="custom-select col-9 my-3" v-model="selected.faculty" v-if="selected.university">
            <option 
                v-for="faculty in faculties"
                :key="faculty.id"
                :value="faculty.id"
            >{{faculty.name}}</option>
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
import {mapActions} from 'vuex'
import { eventBus } from '../../store/modules/eventBus';

export default {
  data: function() {
    return {
      index: 0,
      selected:{
        university: 0,
        faculty: 0,
        deparment: 0,
        section: 0,
        term: 0,
        gender: 0,
        arabic_name: "",
        card_id: ""
      },
      universities: []
    }
  },
  methods: {
    ...mapActions([
      'updateFirstTimeContent',
      'changeSelected'
    ]),
    change() {
      this.$store.dispatch('changeSelected', this.selected);
    },
    save() {
      // Login Http Logic
      // this.$router.push('/profile/edit');
    }
  },
  computed: {
    // faculties: function() {
    //   return this.universities.data[;
    // }
  },
  components: {
    'input-form' : input
  },
  created() {
    this.$store.dispatch('updateFirstTimeContent');
  },
  mounted() {
      this.universities = this.$store.state.responseData;
  },
}
</script>
<style scoped>
</style>
