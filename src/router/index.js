import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Recode from "../views/Recode.vue";
import NotFound from "../views/NotFound.vue";
import AllUsers from "../views/AllUsers.vue";
import How from "../views/How.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Account",
    name: "Account",
    component: Account
  },
  {
    path: "/Recode",
    name: "Recode",
    component: Recode
  },
  {
    path: "/AllUsers",
    name: "AllUsers",
    component: AllUsers
  },
  {
    path: "/How",
    name: "How",
    component: How
  },
  {
    path: "/*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
