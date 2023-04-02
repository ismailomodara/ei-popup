const heading = {
  x: 20,
  y: 20,
  required: false,
  type: ["text"],
  id: 'heading',
  name: 'Heading',
  component: 'popup-element-heading',
  value: "Enter text",
  icon: "ei-icon--type",
  settings: {
    basic: {},
    styles: {
      color: "#ffffff",
      textAlign: "center",
      fontWeight: "bolder",
      fontSize: 20,
      lineHeight: 1.4
    }
  }
}

const text = {
  x: 20,
  y: 20,
  required: false,
  type: ["text"],
  id: 'text',
  name: 'Text',
  component: 'popup-element-text',
  value: "Enter text",
  icon: "ei-icon--type",
  settings: {
    basic: {},
    styles: {
      color: "#ffffff",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: 1.4
    }
  }
}

const input = {
  x: 20,
  y: 20,
  required: false,
  type: ["text", "container", "input"],
  id: 'input',
  name: 'Input',
  component: 'popup-element-input',
  value: "",
  icon: "ei-icon--file",
  settings: {
    basic: {
      label: false,
      labelText: "Email",
      placeholder: "Enter email"
    },
    styles: {
      height: 36,
      background: true,
      backgroundColor: "#ffffff",
      borderRadius: 8,
      color: "#000000",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: 16
    }
  }
}

const button = {
  x: 20,
  y: 20,
  required: false,
  type: ["text", "container", "button"],
  id: 'button',
  name: 'Button',
  component: 'popup-element-button',
  value: "Submit",
  icon: "ei-icon--crosshair",
  settings: {
    basic: {},
    styles: {
      padding: 15,
      background: true,
      backgroundColor: "#000000",
      borderRadius: 8,
      color: "#ffffff",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 16
    }
  }
}

const image = {
  x: 20,
  y: 20,
  required: false,
  type: ["image"],
  id: 'image',
  name: 'Image',
  component: 'popup-element-image',
  value: "",
  icon: "ei-icon--image",
  settings: {
    basic: {
      alt: ""
    },
    styles: {
      height: 48,
      objectFit: "contain"
    }
  }
}

const suffix = new Date().getTime();
const textId = text.id + '-' + suffix
const headingId = heading.id + '-' + suffix
const inputId = input.id + '-' + suffix
const buttonId = button.id + '-' + suffix
const imageId = image.id + '-' + suffix

export const defaultPopupElements = {
  [textId]: {
    ...text,
    id: textId,
    value: "No credit card required. No Surprises.",
    required: true
  },
  [headingId]: {
    ...heading,
    id: headingId,
    value: "Get access to unlimited content from Ei-Popups.",
    required: true
  },
  [inputId]: {
    ...input,
    id: inputId,
    required: true
  },
  [buttonId]: {
    ...button,
    id: buttonId,
    value: "Signup Now",
    required: true
  },
  [imageId]: {
    ...image,
    id: imageId,
    value: "../../popup-stars.svg",
    required: true
  }
}

export const elements = {
  heading,
  text,
  button,
  image,
  input
}
