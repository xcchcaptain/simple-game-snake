import "./style/index.less";
import Game from "./World";

new Game();

import { createApp } from "vue";
import App from "./view/App.vue";

const app = createApp(App);
app.mount("#app");
