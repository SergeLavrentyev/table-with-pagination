import Vue from "vue";
import VueRouter from "vue-router";

import vLoader from "../components/v-loader";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: vLoader,
    },
    {
      path: "/:page",
      name: "Table",
      component: () => import("@/components/v-table"),
    },
  ],
});

export default router;
