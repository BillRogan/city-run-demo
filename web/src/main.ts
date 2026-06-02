import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import {
  faPersonRunning,
  faPersonHiking,
  faAngleUp,
  faLocationPin,
  faFlagCheckered,
  faShower,
  faSquareParking,
  faIdCard,
  faInfo,
  faCalendarDays,
  faEuroSign,
  faStopwatch,
  faSection,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faPersonRunning,
  faPersonHiking,
  faAngleUp,
  faLocationPin,
  faFlagCheckered,
  faShower,
  faSquareParking,
  faIdCard,
  faInfo,
  faCalendarDays,
  faEuroSign,
  faStopwatch,
  faSection,
  faCircleQuestion,
)

import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"

const app = createApp(App)

app.use(createPinia())
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app")
