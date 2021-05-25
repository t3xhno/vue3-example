import Landing from "../components/Landing.vue";
import Counter from "../components/Counter.vue";
import Friends from "../components/Friends.vue";
import Calculator from "../components/Calculator.vue";
import Space from "../components/3D.vue";

export interface RouteType {
    path: string; name: string; component: () => typeof Landing;
    meta?: { index?: number; keepAlive?: boolean; };
    children?: RouteType[];
}

export default [
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
    },
    {
        path: "/calculator", name: "Calculator",
        component: () => Calculator
    },
    {
        path: "/space", name: "Space",
        component: () => Space
    }
] as RouteType[];