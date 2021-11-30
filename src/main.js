import { createApp } from "vue";
import App from "./App.vue";
import { VuePlugin } from "vuera-temporary";

import router from "./router";
import store from "./store";
import "./style.scss";

createApp(App).use(VuePlugin).use(store).use(router).mount(`#app`);
