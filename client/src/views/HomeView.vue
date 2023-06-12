<script>
import { RouterLink } from 'vue-router';
import { mapState, mapActions } from 'pinia'
import { useFilmStore } from '../stores/film'
import StarRating from 'vue-star-rating'
export default {
  name: "HomeView",
  components: {
    StarRating
  },
  computed: {
    ...mapState(useFilmStore, ["seasons", "randoms"])
  },
  methods: {
    ...mapActions(useFilmStore, ["fetchSeasons", "fetchRandom"])
  },
  async created() {
    this.fetchSeasons()
    this.fetchRandom();
  }
}
</script>

<template>
  <div class="flex justify-center">
    <div class="carousel w-full m-10"
      style="display: flex; overflow-x: scroll; scroll-snap-type: x mandatory; scroll-padding: 0 10px; gap: 10px; width: 45%;">
      <div v-for="(random, index) in randoms" :key="random.id"
        style="scroll-snap-align: start; flex-shrink: 0; width: 100%;">
        <div :id="`item${index + 1}`" class="carousel-item w-full">
          <div class="card bg-base-100 shadow-xl image-full" style="width: 100%;">
            <figure style="max-height: 100%; width: 100%; display: flex; justify-content: center;">
              <img :src="random.image.original" alt="Shoes" class="w-full h-auto" style="object-fit: contain;">
            </figure>
            <div class="card-body">
              <h2 class="card-title">Season {{ random.name }}</h2>
              <star-rating :rating="random.rating.average / 2" :read-only="true" :increment="0.01" :star-size="20"
                :show-rating="false"></star-rating>
              <div class="card-actions flex justify-end mt-auto">
                <RouterLink :to="'/details/' + random.id">
                  <button class="btn btn-primary">Watch Now</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center w-full py-2 gap-2">
    <a href="#item1" class="btn btn-xs">1</a>
    <a href="#item2" class="btn btn-xs">2</a>
    <a href="#item3" class="btn btn-xs">3</a>
    <a href="#item4" class="btn btn-xs">4</a>
    <a href="#item5" class="btn btn-xs">5</a>
  </div>

  <!-- <div class="flex justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-6" style="overflow-x: auto;">
      <div v-for="season in seasons" :key="season.id">
        <div class="card bg-base-100 shadow-xl image-full">
          <figure><img :src="season.image.original" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Season {{ season.number }}</h2>
            <div class="card-actions flex justify-end mt-auto">
              <RouterLink :to="`/season/${season.number}`">
                <button class="btn btn-primary">More Info</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="flex justify-center">
    <div class="overflow-x-auto">
      <div class="flex gap-6 m-6">
        <template v-for="season in seasons">
          <div class="card bg-base-100 shadow-xl image-full" style="min-width: 300px;">
            <figure><img :src="season.image.original" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Season {{ season.number }}</h2>
              <div class="card-actions flex justify-end mt-auto">
                <RouterLink :to="`/season/${season.number}`">
                  <button class="btn btn-primary">More Info</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
