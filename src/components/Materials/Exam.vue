<template>
  <div class="mx-3">
      <search-box
        placeholder="Search in Exams"
        ></search-box>
      <exam-badge
        class="my-3 mx-3"
        v-for="(exam, i) in Exams"
        :key="i"
        :label="exam.title"
        @clicked="navigate(exam.url)"
        :content="exam.creator"
        ></exam-badge>
  </div>
</template>
<script>

import badge from '../Partials/badge'
import SearchBox from '../Networking/SearchBox'
export default {
    components: {
        examBadge: badge,
        SearchBox
    },
    data: function() {
        return {
            Exams: [
                {
                    id: "1",
                    title: "2018 - Final",
                    creator: "John Doe",
                    url: "/"
                },
                {
                    id: "2",                    
                    title: "2018 - Midterm",
                    creator: "John Doe",
                    url: "/"
                    
                },
                {
                    id: "3",                    
                    title: "2017 - Final",
                    creator: "Jane Doe",
                    url: "/"
                    
                },
                {
                    id: "4",
                    title: "2017 - Midterm",
                    creator: "Jane Doe",
                    url: "/"
                },                
            ]
        }
    },
    methods: {
        navigate(url) {
            this.$router.push(url);
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>
