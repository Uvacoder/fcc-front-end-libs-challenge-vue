import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import { devtools } from '@/devtools';

createApp(App)
.use(router)
.use(devtools)
.mount("#app")
