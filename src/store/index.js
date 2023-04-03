import { createPinia, defineStore } from 'pinia';
const localStore = localStorage.getItem('ei-popups-new');

export const useAppStore = defineStore('appstore', {
  state: () => ({
    popups: localStore ? JSON.parse(localStore) : {},
    popup: {
      id: null,
      title: "",
      settings: {
        backgroundColor: "#e85e5b",
        spacing: 10,
        alignment: "center"
      },
      elements: {}
    },
    editing: null
  }),
  actions: {
    /**
     * Popup Elements CRUD
     */
    setPopup(popup) {
      this.popup = popup
    },
    setPopupElements(elements) {
      this.popup.elements = elements
    },
    addElement(element) {
      this.popup.elements[element.id] = { ...element }
    },
    removeElement(elementId) {
      delete this.popup.elements[elementId]
    },
    setElementToEdit(elementId) {
      this.editing = elementId
    },
    setElementAxis(elementId, offsetTop, offsetLeft) {
      if (this.popup.elements[elementId]) {
        this.popup.elements[elementId].offsetTop = offsetTop;
        this.popup.elements[elementId].offsetLeft = offsetLeft;
      }
    },

    /**
     * Popup CRUD
     */
    createPopup() {
      const randomString = ["Apple", "Storey", "Pie", "Sushi", "Strawberry", "Forest"];
      const randomNumber = () => {
        return Math.floor(Math.random() * randomString.length)
      }
      const payload = {
        ...this.popup,
        id: Math.random().toString(16).slice(2),
        title: randomString[randomNumber()] + ' ' + randomString[randomNumber()],
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
      }

      this.popups[payload.id] = { ...payload }
      localStorage.setItem('ei-popups-new', JSON.stringify(this.popups))
    },

    updatePopup() {
      this.popups[this.popup.id] = {
        ...this.popup,
        updated_at: new Date().getTime(),
      }

      localStorage.setItem('ei-popups-new', JSON.stringify(this.popups))
    },

    deletePopup(popupId) {
      delete this.popups[popupId]
      localStorage.setItem('ei-popups-new', JSON.stringify(this.popups))
    }
  }
})

export default createPinia()
