import { createApp } from 'vue'

// App
import App from './App.vue'

// Element UI
import ElementPlus from 'element-plus';
import locale from "element-plus/lib/locale/lang/en"

// Styling
import './assets/scss/ei-main.scss'

// Router
import router from './router'

// State
import store from './store'

// Animate
import 'animate.css';

const app = createApp(App)

app.use(ElementPlus, { locale })
app.use(router)
app.use(store)

app.mount('#app')
