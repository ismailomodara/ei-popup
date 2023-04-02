import { createPinia, defineStore } from 'pinia';
const localStore = localStorage.getItem('ei-popups');

export const useAppStore = defineStore('appstore', {
  state: () => ({
    popups: localStore ? JSON.parse(localStore) : [],
    popup: {
      id: null,
      title: "",
      settings: {
        backgroundColor: "#e85e5b",
        spacing: 10,
        alignment: "center"
      },
      elements: []
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
      let payload = {}
      Object.assign(payload, element)
      this.popup.elements.push(payload)
    },
    removeElement(elementId) {
      this.popup.elements = this.popup.elements.filter(element => element.id !== elementId)
    },
    setElementToEdit(id) {
      this.editing = id
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

      this.popups.push(payload)
      localStorage.setItem('ei-popups', JSON.stringify(this.popups))
    },

    updatePopup() {
      const ids = this.popups.map(popup => popup.id);
      const index = ids.indexOf(this.popup.id);

      this.popups[index] = {
        ...this.popup,
        updated_at: new Date().getTime(),
      }

      localStorage.setItem('ei-popups', JSON.stringify(this.popups))
    },

    deletePopup(popupId) {
      this.popups = this.popups.filter(popup => popup.id !== popupId)
      localStorage.setItem('ei-popups', JSON.stringify(this.popups))
    }
  }
})

export default createPinia()
