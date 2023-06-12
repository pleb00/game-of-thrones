<script>
import { RouterLink } from 'vue-router';
import { mapState, mapActions } from 'pinia'
import { useFilmStore } from '../stores/film'
import StarRating from 'vue-star-rating'

export default {

    name: "EpisodesView",
    components: {
        StarRating
    },
    computed: {
        ...mapState(useFilmStore, ["episodes"])
    },
    methods: {
        ...mapActions(useFilmStore, ["fetchEpisodes"])
    },
    async created() {
        this.fetchEpisodes(this.$route.params.id)
    }
}
</script>

<template>
    <div class="p-10">
        <RouterLink to="/">
            <button class="btn btn-active btn-primary">Back</button>
        </RouterLink>
        <div class="">
            <h1 class="text-3xl font-bold pt-10">SEASON {{ this.$route.params.id }} - LIST EPISODES</h1>
        </div>
    </div>



    <div class="flex justify-center">
        <div class="grid grid-cols-0 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 m-2">
            <div v-for="episode in episodes" :key="episode.id">
                <div class="card w-96 bg-base-100 shadow-xl ">
                    <figure><img :src="episode.image.original" alt="Shoes" /></figure>
                    <div class="card-body">
                        <p>{{ episode.name }}</p>
                        <star-rating :rating="episode.rating.average / 2" :read-only="true" :increment="0.01"
                            :star-size="20" :show-rating="false"></star-rating>
                        <h2 class="card-title">Episodes {{ episode.number }}</h2>
                        <div class="card-actions justify-end">
                            <RouterLink :to="'/details/' + episode.id">
                                <button class="btn btn-primary">Details</button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
