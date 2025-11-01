import { createRouter, createWebHistory } from "vue-router"


import Api from "./components/Api.vue"
import Formulario from "./components/Formulario/index.vue"



const routes = [
    /* ---- definición de la ruta raíz ---- */
    //{ path: '/', component: Binding },
    { path: '/', redirect: '/Formulario' },

    /* ---- definición de las rutas activas ---- */

    { path: '/Api', component: Api },
    { path: '/Formulario', component: Formulario },



    /* ---- definición de las rutas no existentes ---- */
    { path: '/:pathmatch(.*)*', redirect: '/Formulario' },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router