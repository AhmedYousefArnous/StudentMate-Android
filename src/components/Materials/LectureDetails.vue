<template>
  <div class="container">
      <app-header
            :link="link"
            >
            <span slot="title">
                <i class="fa fa-video-camera"></i>
                Lecture One
            </span>
      </app-header>
      <transition 
        appear
        enter-active-class="animated zoomIn"
        >
        <div class="content-container">
            <video  controls width="100%" autoplay>
                <source src="static/DELL.mp4" type="video/mp4">
            </video>
            <div class="row">
                <p class="col-12 py-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. 
                </p>
                <div class="col-12 pb-5">
                    <lecture-badge
                        class="mx-3"
                        label="Professor"
                        content="John Doe"
                        ></lecture-badge>
                    <lecture-badge
                        class="mx-3"
                        label="Slides"
                        @clicked="navigate('/')"
                        content="Lorem ipsum dolor sit"
                        ></lecture-badge>
                    <h3 class="text-center py-4 font-weight-bold">
                        Students Notes
                    </h3>
                    <lecture-badge
                        class="mx-3"
                        v-for="(handWriting, i) in handWritings"
                        :key="i"
                        :label="handWriting.title"
                        @clicked="navigate(handWriting.url)"
                        :content="handWriting.content"
                        ></lecture-badge>
                    <h3 class="text-center py-4 font-weight-bold">
                        Sections
                    </h3>
                    <lecture-badge
                        class="mx-3"
                        v-for="(section, i) in sections"
                        :key="handWritings.length + i"
                        :label="section.title"
                        @clicked="navigate(section.url)"
                        :content="section.content"
                        ></lecture-badge>
                </div>
            </div>
        </div>
      </transition>
  </div>
</template>
<script>
import Header from '../Networking/Header.vue';
import badge from '../Partials/badge'
export default {
    components: {
        appHeader: Header,           
        lectureBadge: badge,
    },
    data: function() {
        return {
            handWritings: [
                {
                    id: "1",
                    title: "John Doe",
                    content: "Lorem ipsum dolor sit",
                    url: ""
                },
                {
                    id: "2",
                    title: "Jane Doe",
                    content: "Lorem ipsum dolor sit",
                    url: ""
                },
                
            ],
            sections: [
                {
                    id: "1",
                    title: "John Doe",
                    content: "Lorem ipsum dolor sit",
                    url: ""
                },
                {
                    id: "2",
                    title: "Jane Doe",
                    content: "Lorem ipsum dolor sit",
                    url: ""
                },
                
            ],
            
        }
    },
    computed: {
        link: function() {
            return "/Materials/" + this.$route.params.id + "/Lectures/";
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
    video {
        padding: 0;
        margin-top: -15p;
    }
</style>
