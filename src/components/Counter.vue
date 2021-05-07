<template>
    <div class="hello">
        {{ counter }}
        <button @click="inc()">
            Increment Counter
        </button>
        <button @click="reset()">
            Reset Counter
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCounter from "../composables/useCounter";

export default defineComponent({
    name: "HelloWorld",
    setup: () => {
        const { counter, inc, reset } = useCounter();
        return { counter, inc, reset };
    }
});
</script>