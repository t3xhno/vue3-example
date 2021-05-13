import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing.vue";
import Counter from "../components/Counter.vue";
import Friends from "../components/Friends.vue";

export interface RouteType {
    path: string; name: string; component: () => typeof Landing;
    meta?: { index?: number; keepAlive?: boolean; };
    children?: RouteType[];
}

const routes: RouteType[] = [
    {
        path: "/", name: "Landing",
        component: () => Landing
    },
    {
        path: "/counter", name: "Counter",
        component: () => Counter
    },
    {
        path: "/friends", name: "Friends",
        component: () => Friends
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;