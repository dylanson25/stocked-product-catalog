// import { saludar } from "./js/componentes";
// import ROUTER from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.sass";

import router from "./router/routes.js";

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
