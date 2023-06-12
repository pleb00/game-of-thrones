<script>
import { RouterLink } from 'vue-router';
import { mapState, mapActions } from 'pinia'
import { useFilmStore } from '../stores/film'
import StarRating from 'vue-star-rating'
export default {
    name: "DetailsView",
    components: {
        StarRating
    },
    computed: {
        ...mapState(useFilmStore, ['details'])
    },
    methods: {
        ...mapActions(useFilmStore, ['fetchDetails']),
        converted(summary) {
            return summary.replace(/<[^>]+>/g, '');
        }
    },
    async created() {
        this.fetchDetails(this.$route.params.id)
    }
}
</script>

<template>
    <div class="hero min-h-screen" :style="'background-image: url(' + details.image.original + ');'">

        <div class="hero-overlay bg-opacity-60"></div>
        <div class="absolute top-10 left-10 mt-12">
            <RouterLink :to="'/season/' + details.season">
                <button class="btn btn-active btn-primary">Back</button>
            </RouterLink>
        </div>
        <div class="absolute top-10 right-10 mt-12">
            <star-rating :rating="details.rating.average / 2" :read-only="true" :increment="0.01" :star-size="20"
                :show-rating="false"></star-rating>
        </div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">

                <h1 class="mb-5 text-5xl font-bold">{{ details.name }}</h1>
                <p class="mb-5">{{ converted(details.summary) }}</p>

            </div>
        </div>
    </div>
</template>