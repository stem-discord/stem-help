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
  // {
  //   path: `/potd/:path(.*)`,
  //   name: `potd main page`,
  //   component: () => import(`../views/potd/MainPage.vue`),
  // },
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
    component: () => import(`../views/About.vue`),
  },
  {
    path: `/event`,
    name: `Events for the server`,
    component: () => import(`../views/Poem.vue`),
  },
  {
    path: `/poem`,
    name: `Poem event for the server`,
    component: () => import(`../views/Poem.vue`),
  },
  {
    path: `/christmastree`,
    name: `Christmas tree event for Winter season`,
    component: () => import(`../views/ChristmasTree.vue`),
  },
  {
    path: `/leaderboards`,
    name: `Leaderboards`,
    component: () => import(`../views/Leaderboards.vue`),
  },
  {
    // deprecated
    path: `/toefl`,
    name: `Toefl`,
    component: () => import(`../views/Toefl.vue`),
  },
  {
    path: `/github`,
    name: `Github information`,
    component: () => import(`../views/Github.vue`),
  },
  {
    path: `/privacypolicy`,
    name: `Privacy Policy`,
    component: () => import(`../views/PrivacyPolicy.vue`),
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
    path: `/talent-show`,
    name: `Talent Show Componenet`,
    component: () => import(`../views/TalentShow.vue`),
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
