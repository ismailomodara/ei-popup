<template>
	<div class="popup-elements">
    <app-section-heading
      title='Elements'
      description='Double click or drag and drop elements to add to design.'
    />
		<draggable
			class="popup-elements--list"
			:list="elements"
			:group="{ name: 'people', pull: 'clone', put: false }"
			:clone="clone"
			:sort="false"
			:item-key="'id'"
			:drag-class="'popup-element-drag'"
			:handle="'.handle'"
		>
			<template #item="{ element }">
				<div
					class="popup-element handle"
					@dblclick="add(element)">
					<span class="popup-element-icon">
            <i :class="element.icon" />
          </span>
					<p class="popup-element-label">{{ element.name }}</p>
				</div>
			</template>
		</draggable>
	</div>
</template>
<script>
import draggable from "vuedraggable";
import elements from "@/components/Popups/Popup/popup-elements";
import AppSectionHeading from '@/components/App/AppSectionHeading.vue'

export default {
	name: "PopupPanelElements",
	components: {
    AppSectionHeading,
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
	background-color: var(--app-white);
  margin-bottom: 40px;

	&--list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
	}

	.popup-element {
		cursor: move;
		display: grid;
    grid-template-columns: 18px 1fr;
    grid-column-gap: 10px;
		justify-items: flex-start;
		align-items: center;
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 5px;
    background-color: #f3f4fc;
    border-radius: 8px;

		&-icon {
			display: flex;
			justify-content: center;
			align-items: center;

      i {
        color: var(--text-primary)
      }
		}

		&-label {
			font-size: 14px;
			font-weight: 500;
			color: var(--text-secondary);
		}
	}
}

.popup-element-drag {
  background-color: var(--app-primary) !important;

  .popup-element-icon i,
  .popup-element-label {
    color: #ffffff !important;
  }
}
</style>
