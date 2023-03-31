import { createPinia, defineStore } from 'pinia';
import { defaultPopupElements } from "@/components/Popups/Popup/popup-elements";

export const useAppStore = defineStore('appstore', {
  state: () => ({
    popups: localStorage.getItem('ei-popups') ? JSON.parse(localStorage.getItem('ei-popups')) : [],
    editing: "",
    elements: []
  }),
  actions: {
    setPopups() {

    },
    addPopup(popup) {
      this.popups.push(popup)
    },
    setElementsDefault() {
      this.elements = defaultPopupElements;
    },
    setElements(elements) {
      this.elements = elements
    },
    addElement(element) {
      this.elements.push(element)
    },
    setElementToEdit(id) {
      this.editing = id
    }
  }
})

export default createPinia()
