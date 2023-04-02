<template>
	<div class="popup-elements">
    <app-section-heading
      title='Elements'
      description='Double click an element to add to design.'
    />
    <div class='popup-elements--list'>
      <div
        v-for="element in elements"
        :key='element.id'
        class="popup-element handle"
        @dblclick="add(element)">
					<span class="popup-element-icon">
            <i :class="element.icon" />
          </span>
        <p class="popup-element-label">{{ element.name }}</p>
      </div>
    </div>
	</div>
</template>
<script>
import { elements } from '@/components/Popups/Popup/popup-elements'
import AppSectionHeading from '@/components/App/AppSectionHeading.vue'
import { useAppStore } from '@/store'

export default {
	name: "PopupElements",
	components: {
    AppSectionHeading
	},
	data() {
		return {
      elements: JSON.parse(JSON.stringify(elements))
		};
	},
	methods: {
		add(element) {
      const parsedElement = JSON.parse(JSON.stringify({
        ...element,
        id: element.id + '-' + new Date().getTime()
      }))
      useAppStore().addElement(parsedElement)
      useAppStore().setElementToEdit(parsedElement.id)
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
    cursor: pointer;
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

.popup-element.sortable-chosen.ghost {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  border: 1px dashed var(--app-primary);
  background-color: var(--app-primary-50) !important;
  color: #ffffff;

  i {
    color: #ffffff;
  }
}
</style>
