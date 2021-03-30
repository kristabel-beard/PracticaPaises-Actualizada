import Vue from 'vue';
import VueRouter from 'vue-router';
import Paises from './Views/Paises.vue';
import PaisDetalle from './Views/PaisDetalle.vue'

Vue.use(VueRouter);
const routes = [{
        path: '/Paises',
        name: 'Paises',
        component: Paises

    }, {
        path: '/Paises/:id/Detalle',
        name: 'PaisDetalle',
        component: PaisDetalle,
        props: true
    }

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router