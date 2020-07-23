import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Recode from "../views/Recode.vue";
import NotFound from "../views/NotFound.vue";
import Allworks from "../views/Allworks.vue";
import Howto from "../views/Howto.vue";

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
    path: "/Allworks",
    name: "Allworks",
    component: Allworks
  },
  {
    path: "/Howto",
    name: "Howto",
    component: Howto
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
  routes
});

export default router;
