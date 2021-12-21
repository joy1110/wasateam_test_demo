import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import { createMetaManager } from 'vue-meta';

// 引入全域共享的 SCSS
import '@/assets/scss/all.scss';

createApp(App).use(store).use(router).use(createMetaManager()).mount("#app");