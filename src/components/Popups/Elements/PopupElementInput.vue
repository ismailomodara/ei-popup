<template>
	<div>
		<label v-if="basic.label">{{ basic.labelText }}</label>
		<input
      v-model="setValue"
      type="text"
      :placeholder='basic.placeholder'
      :readonly='editing'
      :style="styles" />
	</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "PopupElementInp",
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
    basic() {
      return this.settings.basic;
    },
    styles() {
      const { fontSize, borderRadius } = this.settings.styles;
      return {
        ...this.settings.styles,
        fontSize: fontSize + "px",
        borderRadius: borderRadius + "px",
        backgroundColor: this.settings.styles.background ? this.settings.styles.backgroundColor : "transparent"
      }
    }
	}
})
</script>

<style lang="scss" scoped>
label {
	color: #111111;
}

input {
  padding-left: 10px;
	height: 40px;
	width: 100%;
	background-color: #ffffff;
	border-radius: 8px;
	border: none;
	outline: none;
	box-shadow: none;
	color: #111111;

  &::placeholder {
    font-weight: 400;
    color: var(--text-quartenary)
  }
}
</style>
