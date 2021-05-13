import { createRouter, createWebHistory } from "vue-router";

export interface RouteType {
    path: string; name: string; component: () => any;
    meta?: { index?: number; keepAlive?: boolean; };
    children?: RouteType[];
}

const routes: RouteType[] = [
    {
        path: "/", name: "Landing",
        component: () => import("../components/Landing.vue")
    },
    {
        path: "/counter", name: "Counter",
        component: () => import("../components/Counter.vue")
    },
    {
        path: "/friends", name: "Friends",
        component: () => import("../components/Friends.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;