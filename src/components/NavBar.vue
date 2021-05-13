<template>
    <div class="nav-bar-container">
        <ul class="routes">
            <li
                v-for="(route, index) of allRoutes"
                :key="index"
                class="routes-item"
                :active="currentlyActive === index"
                @click="handleNav(index, route)"
            >
                {{ route.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import router, { RouteType } from "../router/index";

export default defineComponent({
    setup() {
        const currentlyActive = ref(0);
        const allRoutes = router.options.routes;
        type RouteHandler = (a: number, b: RouteType) => void;
        const handleNav: RouteHandler = (index, route) => {
            currentlyActive.value = index;
            router.push({ path: route.path });
        };
        return { allRoutes, currentlyActive, handleNav };
    },
});
</script>
