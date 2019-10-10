<template>
    <div class="pb-5">
        <div class="card card-inverse">
            <img src="static/Computer Security.jpg" alt="" class="card-img">
        </div>
        <p class="col-12 py-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. 
        </p>
        <div class="col-12 pb-5">
            <series-badge
                class="mx-3 my-3"
                label="Time"
                content="Sat - 10:00"
                ></series-badge>
            <series-badge
                class="mx-3 my-3"
                label="Book"
                content="Lorem ipsum dolor sit"
                @clicked="navigate"
                ></series-badge>
        </div>

    </div>

</template>
<script>
import badge from '../Partials/badge'
export default {
    components: {
        SeriesBadge: badge,
    },
    methods: {
        navigate() {
            this.$router.push("/");
        }
    }
}
</script>
<style lang="scss" scoped>
    .card-img {
        position: relative;
        left: -1.5px;
        width: 100vw;
        margin-top: -30px;
        overflow: hidden;
    }
</style>
