<template>
    <div id="canvas">
        <div class="floor" />
        <div class="cube">
            <div class="front" />
            <div class="back" />
            <div class="left" />
            <div class="right" />
            <div class="top">
                <div class="ballShadow" />
            </div>
            <div class="bottom" />
        </div>
        <div class="sphere" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        const hehe = ref("hehe");
        return { hehe };
    },
});
</script>
