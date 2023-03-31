<template>
	<div class="page-heading">
		<h5>Create Popup</h5>
	</div>
  <div class="popup">
		<div class="popup-elements">
			<popup-elements @add="addElement" />
		</div>
		<div class="popup-settings">
			<popup-settings />
		</div>
    <div class="popup-design">
      <popup-design ref="panel-design" />
    </div>
  </div>
</template>

<script>
import PopupElements from "@/components/Popups/Popup/PopupElements.vue";
import PopupDesign from "@/components/Popups/Popup/PopupDesign.vue";
import PopupSettings from "@/components/Popups/Popup/PopupSettings.vue";

export default {
  name: "AppPopup",
  components: {
		PopupSettings,
		PopupElements,
		PopupDesign
  },
	data() {
		return {}
	},
	computed: {
		store() {
			return this.store
		}
	},
  methods: {
		addElement(element) {
			this.$refs['panel-design'].addElement(element)
		}
  }

};
</script>

<style scoped lang="scss">
.page-heading {
	width: 100%;
	height: var(--tab-height);
	display: grid;
	align-content: center;
	margin-bottom: 40px;
}
.popup {
	display: flex;
	width: 100%;
	height: 100%;

	&-elements {
		width: 300px;
	}

	&-design {
		width: calc(100% - 600px);
	}

	&-settings {
		width: 300px;
	}
}
</style>
