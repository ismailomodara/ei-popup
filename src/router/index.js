import { createRouter, createWebHistory } from 'vue-router'

const AppError = () => import("@/pages/app-error.vue");
const AppIndex = () => import("@/pages/app-index.vue");

const AppDashboard = () => import("@/pages/app/dashboard.vue");
const AppPopups = () => import("@/pages/app/popups/index.vue");
const AppPopupCreate = () => import("@/pages/app/popups/create.vue");
const AppPopupEdit = () => import("@/pages/app/popups/edit.vue");

const AppAnalytics = () => import("@/pages/app/analytics.vue");
const AppSettings = () => import("@/pages/app/settings.vue");


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:patchmatch(.*)*",
      name: "error",
      component: AppError,
    },
    {
      path: '/',
      name: 'home',
      component: AppIndex
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
          component: AppDashboard,
          meta: {
            title: "Dashboard"
          }
        },
        {
          path: 'popups',
          name: 'app.popups',
          component: AppPopups,
          meta: {
            title: "Popups"
          }
        },
        {
          path: 'popups/create',
          name: 'app.popups.create',
          component: AppPopupCreate,
          meta: {
            title: "Create Popup"
          }
        },
        {
          path: 'popups/:id',
          name: 'app.popups.edit',
          component: AppPopupEdit,
          meta: {
            title: "Edit Popup"
          }
        },
        {
          path: 'analytics',
          name: 'app.analytics',
          component: AppAnalytics,
          meta: {
            title: "Analytics"
          }
        },
        {
          path: 'settings',
          name: 'app.settings',
          component: AppSettings,
          meta: {
            title: "Settings"
          }
        },
      ]
    },
  ]
})

export default router
