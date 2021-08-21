import Vue from "vue";
import VueRouter from "vue-router";
import Feed from "./views/Feed";
import Start from "./views/Start";
import Search from "./views/Search";
import Map from "./views/Map";
import List from "./views/List";
import FourOFour from "./views/FourOFour";
import Post from "./views/Post";
import bus from "./bus";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    redirect: "/posts"
  },
  {
    name: "start",
    path: "/start",
    component: Start
  },
  {
    name: "search",
    path: "/search",
    component: Search
  },
  {
    name: "map",
    path: "/map",
    component: Map
  },
  {
    name: "list",
    path: "/list",
    component: List
  },

  {
    name: "posts",
    path: "/posts",
    component: Feed
  },
  {
    name: "post",
    path: "/posts/:slug",
    component: Post
  },
  {
    name: "page",
    path: "/page/:page",
    component: Feed
  },
  {
    name: "four-o-four",
    path: "/404",
    component: FourOFour
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.afterEach(() => {
  //-- Bump the key on App component to force component to update on route change.
  bus.$emit("bumpViewKey");
});

export default router;
