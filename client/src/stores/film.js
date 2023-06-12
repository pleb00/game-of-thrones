import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "https://api.tvmaze.com/shows/82";

export const useFilmStore = defineStore("film", {
  state: () => ({
    seasons: [],
    episodes: [],
    details: {},
    randoms: [],
  }),
  actions: {
    async fetchRandom() {
      try {
        const { data } = await axios.get(`${baseUrl}/episodes`);
        const shuffle = data.sort(() => Math.random() - 0.5);
        this.randoms = shuffle.slice(0, 5);

        console.log(this.randoms);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchSeasons() {
      try {
        const { data } = await axios.get(`${baseUrl}/seasons`);
        this.seasons = data;
        console.log(this.seasons);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchEpisodes(season) {
      try {
        const { data } = await axios.get(`${baseUrl}/episodes`);
        this.episodes = data.filter((episode) => episode.season === +season);

        console.log(this.episodes);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchDetails(id) {
      try {
        const { data } = await axios.get(`${baseUrl}/episodes`);
        this.details = data.find((detail) => detail.id === +id);

        console.log(this.details);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
