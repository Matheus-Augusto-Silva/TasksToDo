import Vue from 'vue'
import Router from 'vue-router'
import PageHome from './pages/PageHome.vue';
import PageNovaTarefa from './pages/PageNovaTarefa.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: PageHome },
        { path: '/nova', component: PageNovaTarefa },
    ]
})


