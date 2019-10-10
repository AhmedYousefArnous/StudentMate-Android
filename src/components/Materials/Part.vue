<template>
  <div class="mx-3"> 
    <search-box
        placeholder="Search in parts"
        ></search-box>
      <part-badge
        class="mx-3 my-3"
        v-for="(part, i) in Parts"
        :key="i"
        :label="part.title"
        @clicked="navigate(part.url)"
        :content="part.creator"
        ></part-badge>
  </div>
</template>
<script>

import badge from '../Partials/badge'
import SearchBox from '../Networking/SearchBox'
export default {
    components: {
        partBadge: badge,
        SearchBox
    },
    data: function() {
        return {
            Parts: [
                {
                    id: "1",
                    title: "Part One",
                    creator: "Students",
                    url: "/"
                },
                {
                    id: "2",                    
                    title: "Part Two",
                    creator: "Students",
                    url: "/"
                    
                },
                {
                    id: "3",                    
                    title: "Part Three",
                    creator: "Students",
                    url: "/"
                    
                },
                {
                    id: "4",
                    title: "Part Fore",
                    creator: "Students",
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
