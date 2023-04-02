<template>
  <div
    :class="['popup-widget', { preview: preview }]"
    :style='{
      backgroundColor: popup.settings.backgroundColor,
      height: views[view],
      maxHeight: views[view],
      width: views[view],
      maxWidth: views[view],
    }'
    @click.self="editElement(null)"
  >
    <draggable
      class="popup-widget-elements"
      :style="{ justifyContent: popup.settings.alignment }"
      v-model="elements"
      v-bind="dragOptions"
      handle=".handle"
      item-key="id"
      ghost-class="ghost"
      @click.self="editElement(null)"
      @change="editAddedElement"
    >
      <template #item="{ element }">
        <div
          :class="['popup-widget-element', { focused: editing === element.id }]"
          :style="{
              paddingTop: popup.settings.spacing + 'px',
              paddingBottom: popup.settings.spacing + 'px',
            }"
          @click="editElement(element.id)">
          <div class="popup-widget-element-actions">
							<span class="handle">
                <i class="ei-icon--move" />
              </span>
            <span
              v-if='!element.required'
              :class="['delete', { disabled: element.required }]"
              @click='removeElement(element.id)'>
                <i class="ei-icon--trash" />
              </span>
          </div>
          <component
            :is="element.component"
            :editing="editing === element.id"
            :value="element.value"
            :settings='element.settings'
            :key="element.id"
            @update="element.value = $event"
          />
        </div>
      </template>
    </draggable>
  </div>

</template>
<script>
import draggable from "vuedraggable";
import { defineAsyncComponent } from "vue";
import { useAppStore } from "@/store";

export default {
  name: "PopupWidget",
  props: {
    view: {
      type: String,
      default: "desktop"
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
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
      views: {
        desktop: "500px",
        tablet: "400px",
        mobile: "380px"
      },
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
    popup() {
      return this.store.popup
    },
    editing() {
      return this.store.editing
    },
    elements: {
      get() {
        return this.store.popup.elements
      },
      set(elements) {
        this.store.setPopupElements(elements)
      }
    }
  },
  methods: {
    editAddedElement({ added }) {
      if (added) {
        this.store.setElementToEdit(added.element.id)
      }
    },
    editElement(elementId) {
      this.store.setElementToEdit(elementId)
    },
    removeElement(elementId) {
      this.store.removeElement(elementId)
    }
  }
};
</script>

<style scoped lang="scss">
.popup-widget {
  height: 500px;
  width: 500px;
  max-width: 500px;
  max-height: 500px;
  background-color: #e85e5b;
  border-radius: 100%;
  position: relative;
  padding: 30px;
  display: flex;
  justify-items: center;
  align-items: center;

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
    justify-content: center;
    padding: 40px;
    margin-bottom: 0;
    border-radius: 0.25rem;
  }

  &-element {
    padding: 10px;
    border: 1px solid transparent;
    display: flex;
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

      .popup-widget-element-actions {
        opacity: 1 !important;
      }
    }

    &:hover {
      border-color: #111111;

      .popup-widget-element-actions {
        opacity: 1 !important;
      }
    }
  }

  &.preview {
    pointer-events: none;

    .popup-widget-element:hover,
    .popup-widget-element.focused, {
      border-color: transparent;
    }

    .popup-widget-element-actions {
      display: none;
    }
  }
}

.ghost {
  opacity: 0.5;
  background-color: var(--app-primary-50);
  border: 1px dashed var(--app-primary);

  > * {
    opacity: 0;
  }
}

@media (screen and max-width: 600px) {
  .popup-widget {
    height: 380px !important;
    width: 380px !important;
    max-height: 380px !important;
    max-width: 380px !important;
  }
}
</style>
