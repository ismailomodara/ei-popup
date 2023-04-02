<template>
  <div
    ref="popupWidget"
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
    <template v-if='boundary'>
      <popup-element
        v-for="element in elements"
        :key='element.id'
        :element="element"
        :boundary="boundary"
      >
        <div
          :class="['popup-widget-element', { focused: editing === element.id }]"
          @click="editElement(element.id)"
          >
          <span class='popup-widget-element-action' @click='removeElement(element.id)'>
              <i class="ei-icon--trash" />
            </span>
          <component
            :is="components[element.component]"
            :editing="editing === element.id"
            :value="element.value"
            :settings='element.settings'
            :key="element.id"
            @update="element.value = $event"

          />
        </div>
      </popup-element>
    </template>
  </div>

</template>
<script setup>
import { useElementBounding } from '@vueuse/core';
import { ref, computed } from "vue";
import { useAppStore } from "@/store";

defineProps(['view', 'preview']);

import PopupElement from '@/components/Popups/Elements/PopupElement.vue';
import PopupElementText from '@/components/Popups/Elements/PopupElementText.vue';
import PopupElementHeading from '@/components/Popups/Elements/PopupElementHeading.vue';
import PopupElementButton from '@/components/Popups/Elements/PopupElementButton.vue';
import PopupElementInput from '@/components/Popups/Elements/PopupElementInput.vue';
import PopupElementImage from '@/components/Popups/Elements/PopupElementImage.vue';

const components = {
  "popup-element-text": PopupElementText,
  "popup-element-heading": PopupElementHeading,
  "popup-element-button": PopupElementButton,
  "popup-element-input": PopupElementInput,
  "popup-element-image": PopupElementImage,
}

const popupWidget = ref();
const { top, right, bottom, left } = useElementBounding(popupWidget);
const boundary = { top, right, bottom, left }
const views = ref({
  desktop: "500px",
  tablet: "400px",
  mobile: "380px"
})

const store = useAppStore();
const popup = store.popup;
const editing = computed(() => store.editing)
const elements = computed({
  get() {
    return store.popup.elements
  },
  set(elements) {
    store.setPopupElements(elements)
  }
})

const editElement = (elementId) => {
  store.setElementToEdit(elementId)
}

const removeElement = (elementId) => {
  store.removeElement(elementId)
}
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

  &-element {
    padding: 12px;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    > div:nth-child(2) {
      width: 100%;
    }

    &-action {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      z-index: 1;
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

    &.focused {
      border-color: #111111;

      .popup-widget-element-action {
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
