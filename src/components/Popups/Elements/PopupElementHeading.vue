<template>
	<h1
		ref="heading"
		:contenteditable="editing"
		:class="{ editing : editing }"
		:style="setStyle"
	>{{ setValue }}</h1>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "PopupElementHeading",
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
				this.setValue = this.$refs.heading.textContent
			}
		}
	},
})
</script>

<style lang="scss" scoped>
h1 {
	outline: none;
	box-shadow: none;
	border: none;
	color: #111111;
}
</style>
