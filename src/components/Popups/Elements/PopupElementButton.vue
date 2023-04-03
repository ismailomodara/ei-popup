<template>
	<button
		ref="button"
		:contenteditable="editing"
    :style="styles"
    type='submit'
    @click='allowSubmit'
		@keydown.prevent.space="allowSpace"
	>{{ value }}</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "PopupElementButton",
	props: {
		editing: {
			type: Boolean,
			default: false
		},
		preview: {
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
      const { padding, fontSize, borderRadius } = this.settings.styles;
      return {
        ...this.settings.styles,
        borderRadius: borderRadius + "px",
        fontSize: fontSize + "px",
        paddingTop: padding + "px",
        paddingBottom: padding + "px",
        cursor: this.preview ? 'pointer' : 'default'
      }
    }
	},
	watch: {
		editing() {
			if (!this.editing) {
				this.setValue = this.$refs.button.textContent
			}
		}
	},
	methods: {
		allowSpace() {
			document.execCommand("insertText", false, ' ')
		},
    allowSubmit() {
      if (this.preview) {
        this.$message.success("Button clicked!")
      }
    }
	}
})
</script>

<style lang="scss" scoped>
button {
	font-size: 16px;
	font-weight: 500;
	outline: none;
	box-shadow: none;
	border: none;
  width: 100%;
  border-radius: 8px;
	padding: 15px 20px;
  background-color: #111111;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
