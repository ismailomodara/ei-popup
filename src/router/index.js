import { createRouter, createWebHistory } from 'vue-router'


import AppError from '@/pages/app-error.vue'

import AppIndex from '@/pages/app-index.vue'

import AppDashboard from "@/pages/app/dashboard.vue"

import AppPopups from "@/pages/app/dashboard.vue"

import AppPopupCreate from "@/pages/app/popups/create.vue"

import AppPopupEdit from "@/pages/app/popups/edit.vue"

import AppAnalytics from "@/pages/app/analytics.vue"

import AppSettings from "@/pages/app/settings.vue"


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
