import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Axios from "../views/Axios.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/loop",
    name: "Loop",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Loop.vue")
  },
  {
    path: "/next",
    name: "Next",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Next.vue")
  },
  {
    path: "/words",
    name: "Words",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Words.vue")
  },
  {
    path: "/axios",
    name: "Axios",
    component: Axios
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Vuex.vue")
  },
  {
    path: "/apicko",
    name: "Apicko",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Apicko.vue")
  },
  {
    path: "/user/:id",
    name: "User",
    component: User
  },
  {
    path: "/localStorage",
    name: "LocalStorage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/localStorage.vue")
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Restaurants.vue")
  },
  {
    path: "/datetime",
    name: "Datetime",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Datetime.vue")
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
