import Vue from "vue";
import Router from "vue-router";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaNovaTarefa from "./pages/PaginaNovaTarefa";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: PaginaInicial, name: "home" },
    { path: "/tarefa", component: PaginaNovaTarefa, name: "task" },
  ],
});
