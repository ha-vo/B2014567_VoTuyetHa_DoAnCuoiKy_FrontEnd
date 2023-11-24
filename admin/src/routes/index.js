import { createWebHistory, createRouter } from "vue-router";
import product_manager from "@/views/ProductsManager.vue";
import home from "@/views/BodyMainPage.vue"


const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/productsmanager',
        name: 'productsmanager',
        component: product_manager
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router