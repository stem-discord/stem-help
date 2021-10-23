import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: `/`,
    name: `Home`,
    component: Home,
  },
  {
    path: `/login`,
    name: `login page`,
    component: () => import(`../views/Login.vue`),
  },
  {
    path: `/potd`,
    name: `potd main page`,
    component: () => import(`../views/potd/MainPage.vue`),
  },
  {
    path: `/potd/submit`,
    name: `potd submit page`,
    component: () => import(`../views/potd/Submit.vue`),
  },
  {
    path: `/about`,
    name: `About`,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ `../views/About.vue`),
  },
];

// https://router.vuejs.org/guide/advanced/scroll-behavior.html
function scrollBehavior(to, from, savedPosition) {
  if (savedPosition && to.hash !== from.hash) {
    return savedPosition;
  }
  if (to.hash) {
    const item = document.querySelector(`a.anchor[href="${to.hash}"]`);
    if (item) {
      item.scrollIntoView({ behavior: `smooth` });
    }
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

export default router;
