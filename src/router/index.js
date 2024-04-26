import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import CollabView from "../views/CollabView.vue";
import ProductsView from "../views/products/ProductsView.vue";
import TermsOfUse from "../views/TermsOfUse.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import NotFound from "../views/NotFound.vue";
import MolekuleView from "~/views/products/MolekuleView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView
    },
    {
      path: "/collab",
      name: "collab" ,
      component: CollabView
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView
    },
    {
      path: "/products/molekule",
      name: "molekule",
      component: MolekuleView
    }
    {
      path: "/terms-of-use",
      name: "terms-of-use",
      component: TermsOfUse
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: PrivacyPolicy
    },
    {
      path: "/404",
      name: "404",
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: "/404",
    },
  ],
});

export default router;
