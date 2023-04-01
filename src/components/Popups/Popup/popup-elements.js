const heading = {
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
      fontSize: 20,
      lineHeight: 1.4
    }
  }
}

const text = {
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
  required: false,
  type: ["text", "container", "input"],
  id: 'input',
  name: 'Input',
  component: 'popup-element-input',
  label: "Input",
  value: "",
  placeholder: "Enter value",
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
  required: false,
  type: ["text", "container", "button"],
  id: 'button',
  name: 'Button',
  component: 'popup-element-button',
  value: "Submit",
  icon: "ei-icon--crosshair",
  settings: {
    basic: {
      label: false,
      labelText: "Email",
      placeholder: "E-mail"
    },
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

export const defaultPopupElements = [
  {
    ...image,
    id: image.id + '-' + new Date().getTime(),
    value: "../../popup-stars.svg",
    required: true
  },
  {
    ...heading,
    id: heading.id + '-' + new Date().getTime(),
    value: "Get access to unlimited content from Ei-Popups.",
    required: true
  },
  {
    ...input,
    id: input.id + '-' + new Date().getTime(),
    required: true
  },
  {
    ...button,
    value: "Signup Now",
    id: button.id + '-' + new Date().getTime(),
    required: true
  },
  {
    ...text,
    value: "No credit card required. No Surprises.",
    id: text.id + '-' + new Date().getTime(),
    required: true
  },
]

export default [
  heading,
  text,
  button,
  image,
  input
]
