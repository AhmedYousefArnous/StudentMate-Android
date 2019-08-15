<template>
  <div class="mx-3">
      <h3 class="text-center py-3 font-weight-bold">
            Recommendations
      </h3>
      <recommendation-badge
        class="my-3 mx-3"
        v-for="(recommendation, i) in Recommendations"
        :key="i"
        :label="recommendation.title"
        @clicked="navigate(recommendation.url)"
        :content="recommendation.content"
        ></recommendation-badge>
  </div>
</template>
<script>

import badge from '../Partials/badge'
export default {
    components: {
        recommendationBadge: badge,
    },
    data: function() {
        return {
            Recommendations: [
                {
                    id: "1",
                    title: "Linux Security",
                    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
                    url: "/"
                },
                {
                    id: "2",                    
                    title: "Windows Security",
                    content: "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.",
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
