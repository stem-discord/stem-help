import { createApp } from "vue";
import App from "./App.vue";
import { VuePlugin } from "vuera";

import router from "./router";
import store from "./store";
import "./style.scss";

createApp(App).use(store).use(router).use(VuePlugin).mount(`#app`);
