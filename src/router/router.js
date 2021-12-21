// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import pageA from "../views/pageA.vue";
import pageB from "../views/pageB.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pageA",
    name: "pageA",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: pageA,
  },
  {
    path: "/pageB",
    name: "pageB",
    component: pageB,
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
});

export default router;
