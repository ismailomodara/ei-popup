<template>
  <p
		ref="text"
		:contenteditable="editing"
		:class="{ editing : editing }"
		:style="setStyle"
	>{{ setValue }}</p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PopupElementText",
  props: {
    editing: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
		settings: {
			type: Object,
			default() {
				return {}
			}
		}
  },
	data() {
		return {}
	},
  computed: {
    setValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit("update", value)
      }
    },
		setStyle() {
			const { fontSize } = this.settings.styles;
			return {
				...this.settings.styles,
				fontSize: fontSize + "px"
			}
		}
  },
	watch: {
		editing() {
			if (!this.editing) {
				this.setValue = this.$refs.text.textContent
			}
		}
	},
})
</script>

<style lang="scss" scoped>
p {
	font-size: 16px;
	font-weight: 500;
	outline: none;
	box-shadow: none;
	border: none;
	color: #111111;
}
</style>
