import {createRouter, createWebHashHistory} from "vue-router";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/LandingPage";
import Stats from "./components/BotStats";

const routes = [
    {path: '/', component: Home},
    {path: '/stats', component: Stats},
    {
        path: '/:pathMatch(.*)*',
        component: ErrorPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;
