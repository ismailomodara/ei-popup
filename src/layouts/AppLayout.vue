<template>
  <div class="ei-app-layout">
    <aside class="ei-app-layout--sidenav">
      <div class="ei-app-layout--sidenav__logo">
        <h3>E</h3>
      </div>
      <ul class="ei-app-layout--sidenav__menu">
        <li
          v-for="page in pages"
          :key="page.name"
          :class="{ active: currentPage === page.name }"
          @click="route(page.route)">
          <span class="icon"><i :class="`ei-icon--${page.icon}`" /></span>
        </li>
      </ul>
    </aside>
    <div class="ei-app-layout--body">
      <div class='ei-app-layout--body__heading'>
        <h2>{{ currentPageName }}</h2>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "AppLayout",
  data() {
    return {
      pages: [
        {
          name: 'dashboard',
          label: 'Dashboard',
          route: 'app.dashboard',
          icon: 'home'
        },
        {
          name: 'popups',
          label: 'Popups',
          route: 'app.popups',
          icon: 'file'
        },
        {
          name: 'analytics',
          label: 'Analytics',
          route: 'app.analytics',
          icon: 'bar-chart'
        },
        {
          name: 'settings',
          label: 'Settings',
          route: 'app.settings',
          icon: 'settings'
        }
      ]
    }
  },
  computed: {
    currentPage() {
      return this.$route.name.split(".")[1]
    },
    currentPageName() {
      return this.$route.meta.title || "App"
    }

  },
  methods: {
    route(route) {
      this.$router.push({ name: route })
    }
  }
})
</script>

<style lang="scss" scoped>
.ei-app-layout {
  height: 100vh;
  width: 100%;
  background: var(--app-white);
  display: flex;

  &--sidenav {
    width: var(--sidenav-width);
    height: 100%;
    position: relative;
    z-index: 9;
    background-color: var(--app-white);

    &__logo {
      height: var(--tab-height);
      padding: 0 var(--tab-padding);
      border-bottom: 1px solid var(--border-color);
      display: grid;
      justify-content: center;
      align-content: center;
      z-index: 9;
      background-color: var(--app-white);
    }

    &__menu {
      list-style-type: none;
			padding: 15px;
      display: grid;
      grid-template-columns: 1fr;
      z-index: 9;
      z-index: 9;
      background-color: var(--app-white);

      li {
        padding: 12px 15px;
        display: grid;
        grid-template-columns: 24px auto;
        cursor: pointer;
        border-radius: 8px;
        background-color: transparent;
        transition: background-color 0.2s ease-out;

        .icon {
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.74;

          i {
            font-size: 1.25rem;
          }
        }

        .label {
          color: var(--text-primary);
					font-weight: 500;
					font-size: 13px;
          line-height: 1.8;
        }

        &.active {
          background-color: var(--app-primary);
          transition: background-color 0.2s ease-in;

          .icon {
            opacity: 1;

            i {
              color: var(--app-white);
            }
          }

          .label {
            color: var(--app-white) !important;
            transition: color 0.2s ease-in;
          }
        }
      }
    }
  }

  &--body {
    background: var(--background-primary);
		width:  calc(100% - var(--sidenav-width));
    height: 100%;
		position: relative;
		overflow: hidden;

    &__heading {
      height: var(--tab-height);
      background-color: var(--app-white);
      border-bottom: 1px solid var(--border-color);
      border-left: 1px solid var(--border-color);
      display: grid;
      align-content: center;
      padding: 0 40px;
      z-index: 9;

      > * {
        color: var(--app-primary);
      }
    }
  }
}
</style>
