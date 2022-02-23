import Vue from "vue";
import App from "./App.vue";
import VueLodash from "vue-lodash";
import lodash from "lodash";
import router from "./router";
import store from "./store/store";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;
Vue.use(VueLodash, { name: "custom", lodash: lodash });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
