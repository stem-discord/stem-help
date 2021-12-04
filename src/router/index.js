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
    path: `/potd/:path(.*)`,
    name: `potd main page`,
    component: () => import(`../views/potd/MainPage.vue`),
  },
  {
    path: `/contact`,
    name: `contact page`,
    component: () => import(`../views/Contact.vue`),
  },
  {
    path: `/rules`,
    name: `rules page`,
    component: () => import(`../views/Rules.vue`),
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
  {
    path: `/leaderboards`,
    name: `Leaderboards`,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(`../views/leaderboards/Index.vue`),
  },
  {
    path: `/ct`,
    name: `Component testing page`,
    component: () => import(`../views/ComponentTesting.vue`),
  },
  {
    path: `/cit`,
    name: `Component integration testing page`,
    component: () => import(`../views/ComponentIntegrationTesting.vue`),
  },
  {
    path: `/:catchAll(.*)`,
    name: `404`,
    component: () => import(`../views/404.vue`),
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
