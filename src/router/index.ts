import { createRouter, createWebHistory } from 'vue-router'

const Error = () => import("@/pages/error.vue");
const Index = () => import("@/pages/index.vue");

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
  ]
})

export default router
