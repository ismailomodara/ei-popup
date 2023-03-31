import { createRouter, createWebHistory } from 'vue-router'

const Error = () => import("@/pages/error.vue");
const Index = () => import("@/pages/index.vue");

const Dashboard = () => import("@/pages/app/dashboard.vue");
const Popups = () => import("@/pages/app/popups/index.vue");
const Popup = () => import("@/pages/app/popups/popup.vue");


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:patchmatch(.*)*",
      name: "error",
      component: Error,
    },
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/app',
      name: 'app',
      meta: {
        layout: 'app'
      },
      children: [
        {
          path: 'dashboard',
          name: 'app.dashboard',
          component: Dashboard
        },
        {
          path: 'popups',
          name: 'app.popups',
          component: Popups
        },
        {
          path: 'popups/:id',
          name: 'app.popups.popup',
          component: Popup
        }
      ]
    },
  ]
})

export default router
