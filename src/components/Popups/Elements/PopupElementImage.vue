<template>
	<div>
		<img v-if="value" :src="value" alt="Image" />
		<span v-else>
			<i class="ei-icon--image" />
		</span>
	</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "PopupElementImage",
	props: {
		editing: {
			type: Boolean,
			default: false
		},
		id: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		value: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			uploading: false,
			file: null,
			imageThumbnail: ""
		}
	},
	computed: {
		setValue: {
			get() {
				return this.value
			},
			set(value) {
				this.$emit("update", value)
			}
		}
	}
})
</script>

<style lang="scss" scoped>
.test {
	height: 200px;
	width: 300px;
}
</style>
