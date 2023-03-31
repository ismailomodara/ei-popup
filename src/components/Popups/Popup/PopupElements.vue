<template>
	<div class="popup-elements">
		<h5>Add Element</h5>
		<draggable
			class="popup-elements--list"
			:list="elements"
			:group="{ name: 'people', pull: 'clone', put: false }"
			:clone="clone"
			:sort="false"
			:item-key="'id'"
			:drag-class="'popup-element-drag'"
			:handle="'.popup-element-handle'"
		>
			<template #item="{ element }">
				<div
					class="popup-element"
					@dblclick="add(element)">
					<span class="popup-element-handle"><i :class="element.icon" /></span>
					<p class="popup-element-label">{{ element.name }}</p>
				</div>
			</template>
		</draggable>
	</div>
</template>
<script>
import draggable from "vuedraggable";
import elements from "@/components/Popups/Popup/popup-elements";

export default {
	name: "PopupPanelElements",
	components: {
		draggable
	},
	data() {
		return {
			elements,
		};
	},
	methods: {
		clone(element) {
			return {
				...element,
				id: element.id + '-' + new Date().getTime(),
				name: element.name
			};
		},
		add(element) {
			const elementParsed = this.clone(element)
			this.$emit("add", elementParsed)
		}
	}

};
</script>

<style scoped lang="scss">
.popup-elements {
	width: 100%;
	height: 100%;
	background-color: var(--brand-white);
	padding: 30px;
	border-left: 1px solid var(--border-color);
	border-right: 1px solid var(--border-color);
	overflow-y: scroll;

	&--list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}

	.popup-element {
		cursor: move;
		display: grid;
		justify-items: center;
		align-items: center;

		&-handle {
			width: 100%;
			height: 80px;
			margin-bottom: 5px;
			background-color: #f3f4fc;
			border-radius: 8px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&-label {
			font-size: 15px;
			font-weight: 500;
			color: #111111;
		}
	}
}

.popup-element-drag {
	.popup-element-handle {
		background: var(--brand-primary);

		i {
			color: #ffffff !important;
		}
	}
}
</style>
