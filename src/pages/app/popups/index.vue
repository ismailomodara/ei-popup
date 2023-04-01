<template>
  <div class="popups">
    <div v-if='popups.length === 0' class='popups-empty'>
      <img src='@/assets/images/empty.svg' alt='Empty' />
      <h2>No popups created.</h2>
    </div>
    <el-row v-else type='flex' :gutter='30'>
      <el-col v-for="popup in popups" :key="popup.id" v :sm='12' :md='8'>
        <div class='popup'>
          <div>
            <h4>{{ popup.title }}</h4>
            <p>{{ popup.id }}</p>
          </div>
          <div>
            <el-button type='primary' plain size='small' @click='view(popup.id)'>
              View
            </el-button>
            <el-popconfirm
              width="220"
              confirm-button-text="Yes"
              cancel-button-text="No, Thanks"
              confirm-button-type='danger'
              icon-color="#626AEF"
              title="Proceed to delete?"
              @confirm='remove(popup.id)'
            >
              <template #reference>
                <el-button type='danger' plain size='small'>
                  Remove
                </el-button>
              </template>
            </el-popconfirm>

          </div>
        </div>
      </el-col>
    </el-row>
    <div class='popups-create'>
      <el-button type='primary' size='large' @click='create'>Create New Popup</el-button>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '@/store'

export default {
  name: "AppPopups",
  computed: {
    store() {
      return useAppStore()
    },
    popups() {
      return this.store.popups
    }
  },
  methods: {
    create() {
      this.$router.push({ name: "app.popups.create"})
    },
    view(popupId) {
      const popup = this.popups.find(popup => popup.id === popupId)
      this.store.setPopup(popup)
      this.$router.push({ name: "app.popups.edit", params: { id: popupId }})
    },
    remove(popupId) {
      this.store.deletePopup(popupId);
    }
  }
}
</script>

<style lang="scss" scoped>
.popups {
  padding: 40px;

  .popup {
    height: 120px;
    width: 100%;
    background-color: var(--app-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

    h4 {
      text-transform: capitalize;
    }

    p {
      color: var(--text-tertiary);
    }
  }

  &-empty {
    height: 400px;
    width: 80%;
    margin: auto;
    background-color: var(--app-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      height: 120px;
      width: auto;
      margin-bottom: 20px;
    }
  }

  &-create {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
}
</style>
