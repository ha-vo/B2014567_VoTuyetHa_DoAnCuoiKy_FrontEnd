// import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from './routes'

import { createApp } from 'vue'
import App from './App.vue'

console.log("nomore", router)
createApp(App).use(router).mount('#app')
