<template>
  <div class="container">
      <search-box
        placeholder="Search in Lectures"
        ></search-box>
      <lecture-badge
        class="mx-3 my-3"
        v-for="(lecture, i) in Lectures"
        :key="i"
        :label="lecture.title"
        @clicked="navigate(i)"
        :content="lecture.description"
        ></lecture-badge>
  </div>
</template>
<script>
import badge from '../Partials/badge'
import SearchBox from '../Socialization/SearchBox'
export default {
    components: {
        lectureBadge: badge,
        SearchBox
    },
    data: function() {
        return {
            Lectures: [
                {
                    id: "1",
                    title: "lecture One",
                    description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
                },
                {
                    id: "2",                    
                    title: "lecture Two",
                    description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
                },
                {
                    id: "3",                    
                    title: "lecture Three",
                    description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
                },
                {
                    id: "4",
                    title: "lecture Fore",
                    description: "Lorem ipsum dolor sit amet consectetur adipiscing elitadipiscing elitadipiscing elit"
                },                
            ]
        }
    },
    computed: {
        link: function() {
            return "/Materials/" + this.$route.params.id + "/Lectures/";
        }
    },
    methods: {
        navigate(i) {
            this.$router.push(this.link + (i+1) );
        }
    }
}
</script>
<style lang="scss" scoped>    
</style>
