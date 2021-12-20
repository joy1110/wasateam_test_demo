import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

// 引入全域共享的 SCSS
import '@/assets/scss/all.scss';

createApp(App).use(store).use(router).mount("#app");
