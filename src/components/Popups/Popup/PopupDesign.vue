<template>
	<div
		class="popup-design animate__animated animate__fadeIn"
		@click.self="$refs.widget.editElement(null)">
    <div class='popup-design-widget'>
      <popup-widget ref="widget" :view="view" />
    </div>
    <div class="popup-design-footer">
      <div class="popup-design-footer-mode">
        <el-radio-group v-model="view" size="large">
          <el-radio-button label="desktop">
            <span><i class="ei-icon--monitor" /></span>
          </el-radio-button>
          <el-radio-button label="tablet">
            <span><i class="ei-icon--tablet" /></span>
          </el-radio-button>
          <el-radio-button label="mobile">
            <span><i class="ei-icon--smartphone" /></span>
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="popup-design-footer-action">
        <el-button @click="preview = true">Preview</el-button>
        <el-button type="primary" :loading='saving' @click="save">Save</el-button>
      </div>
    </div>
	</div>
  <popup-widget-preview v-model:show='preview' />
</template>
<script>
import { useAppStore } from '@/store'
import PopupWidget from '@/components/Popups/Popup/Widget/PopupWidget.vue'
import PopupWidgetPreview from '@/components/Popups/Popup/Widget/PopupWidgetPreview.vue'

export default {
  name: "PopupDesign",
  components: {
    PopupWidget,
    PopupWidgetPreview
  },
  data() {
    return {
      view: "desktop",
      preview: false,
      saving: false,
      updating: false
    }
  },
  computed: {
    store() {
      return useAppStore()
    },
    action() {
      const route = this.$route.name;
      return route ? route.split(".")[2] : ""
    }
  },
  methods: {
    save () {
      this.saving = true;
      this.action === 'create' ? this.store.createPopup() : this.store.updatePopup()

      setTimeout(() => {
        this.$router.push({ name: "app.popups" })
        this.saving = false;
      }, 1500)
    }
  }
}
</script>

<style scoped lang="scss">
.popup-design {
  height: 100%;
	width: 100%;
  padding: 40px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-widget {
    min-height: 500px;
  }


  &-footer {
    background-color: var(--app-white);
    margin: 50px auto 100px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 60px;
  }
}
</style>
