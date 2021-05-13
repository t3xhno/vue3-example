<template>
    <div class="container">
        <NavBar />
        <img
            src="./assets/images/dieTrash.jpg"
            alt="lol"
        >
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
    name: "App",
    components: { NavBar }
});
</script>