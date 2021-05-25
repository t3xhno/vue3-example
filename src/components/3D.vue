<template>
    <div id="canvas">
        <div class="floor"></div>
        <div class="cube">
            <div class="front"></div>
            <div class="back"></div>
            <div class="left"></div>
            <div class="right"></div>
            <div class="top">
                <div class="ballShadow"></div>
            </div>
            <div class="bottom"></div>
        </div>
        <div class="sphere"></div>
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
