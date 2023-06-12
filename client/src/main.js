import "./assets/style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { markRaw } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueStarRating } from "vue-star-rating";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

// app.component("star-rating", VueStarRating.default);
app.use(pinia);
app.use(router);

app.mount("#app");
