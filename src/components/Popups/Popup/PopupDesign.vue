<template>
	<div
		class="popup-design-window"
		@click.prevent.stop="editElement(null)">
		<div class="popup-ui">
			<draggable
				class="popup-ui-elements"
				v-model="elements"
				v-bind="dragOptions"
				handle=".handle"
				item-key="order"
				@click.prevent.stop="editElement(null)"
				@change="editAddedElement"
			>
				<template #item="{ element }">
					<div
						:class="['popup-ui-element', { focused: editing === element.id }]"
						@click.prevent.stop="editElement(element.id)">
						<div class="popup-ui-element-actions">
							<span class="handle">
                <i class="ei-icon--move" />
              </span>
							<span :class="['delete', { disabled: element.required }]">
                <i class="ei-icon--trash" />
              </span>
						</div>
						<component
							v-bind="element"
							:is="element.component"
							:editing="editing === element.id"
							@update="element.value = $event"
						/>
					</div>
				</template>
			</draggable>
		</div>
    <div>
      <el-button type="primary" plain>Preview</el-button>
      <el-button type="primary" @click="save">Save</el-button>
    </div>
	</div>
</template>
<script>
import draggable from "vuedraggable";
import { defineAsyncComponent } from "vue";
import { useAppStore } from "@/store";

export default {
	name: "PopupDesign",
	components: {
		draggable,
		PopupElementImage: defineAsyncComponent(() => import("@/components/Popups/Elements/PopupElementImage.vue")),
		PopupElementHeading: defineAsyncComponent(() => import("@/components/Popups/Elements/PopupElementHeading.vue")),
		PopupElementText: defineAsyncComponent(() => import("@/components/Popups/Elements/PopupElementText.vue")),
		PopupElementInput: defineAsyncComponent(() => import("@/components/Popups/Elements/PopupElementInput.vue")),
		PopupElementButton: defineAsyncComponent(() => import("@/components/Popups/Elements/PopupElementButton.vue")),
	},
	data() {
		return {
			dragOptions: {
				animation: 250,
				group: "people",
				disabled: false,
				ghostClass: "ghost"
			}
		};
	},
	computed: {
		store() {
			return useAppStore()
		},
    editing() {
      return this.store.editing
    },
		elements: {
      get() {
        return this.store.elements
      },
      set(elements) {
        this.store.setElements(elements)
      }
		}
	},
	methods: {
		addElement(element) {
      this.store.addElement(element)
			this.editAddedElement({ added: {element} });
		},
		editAddedElement({ added }) {
			if (added) {
				this.store.setElementToEdit(added.element.id)
			}
		},
    editElement(elementId) {
      this.store.setElementToEdit(elementId)
    },
    save() {
      const payload = {
        title: "Testing",
        created_at: new Date().getTime(),
        elements: this.store.elements
      }
      this.store.addPopup(payload)
      localStorage.setItem('ei-popups', JSON.stringify(this.store.popups))
    }
	},
	created() {
		this.store.setElementsDefault();
	}
};
</script>

<style scoped lang="scss">
.popup-design {
	display: flex;
	justify-content: space-between;
	width: 100%;

	&-window {
		overflow-y: scroll;
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		&--component {
			background-color: var(--brand-white);
			padding: 20px;
		}
	}
}

.popup-ui {
	height: 400px;
	width: 400px;
	max-width: 400px;
	max-height: 400px;
	background-color: #e85e5b;
	border-radius: 100%;
	position: relative;
	padding: 30px;

	&:before {
		content: "";
		position: absolute;
		top: 10px;
		left: 10px;
		height: calc(100% - 20px);
		width: calc(100% - 20px);
		border: 4px solid #fff;
		border-radius: 100%;
	}

	&-elements {
		height: 100%;
		width: 100%;
		display: -webkit-box;
		display: flex;
		-ms-flex-direction: column;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		flex-direction: column;
		padding: 40px;
		margin-bottom: 0;
		border-radius: 0.25rem;
	}

	&-element {
		padding: 10px;
		border: 1px solid transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;

		> div:nth-child(2) {
			width: 100%;
		}

		&-actions {
			position: absolute;
			top: 0;
			right: 0;
			opacity: 0;
			z-index: 1;
			display: flex;

			span {
				height: 26px;
				width: 26px;
				background: #111111;
				display: flex;
				justify-content: center;
				align-items: center;

				i {
					font-size: 14px;
					color: #ffffff;
				}
			}

			.handle {
				cursor: move;
			}

      .delete {
        cursor: pointer;

        &.disabled {
          cursor: not-allowed;
          opacity: 0.74;
        }
      }
		}

		&.focused {
			border-color: #111111;

			.popup-ui-element-actions {
				opacity: 1 !important;
			}
		}

		&:hover {
			border-color: #111111;

			.popup-ui-element-actions {
				opacity: 1 !important;
			}
		}
	}
}

.sortable-chosen-ghost {
  background-color: #ffffff;
}

.ghost {
	background-color: var(--brand-primary-50);
}

.list-group {

}

.border {






}
</style>
