<template>
  <p
		ref="text"
		:contenteditable="editing"
		:style="styles"
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
    styles() {
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
	outline: none;
	box-shadow: none;
	border: none;
  width: 100%;
}
</style>
