<template>
    <div class="hello">
        {{ counter }}
        <button @click="inc()">
            Increment Counter
        </button>
        <button @click="reset()">
            Reset Counter
        </button>
        {{ doubleCounter }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCounter from "../composables/useCounter";

export default defineComponent({
    setup: () => {
        const { counter, inc, reset, doubleCounter } = useCounter();
        return { counter, inc, reset, doubleCounter };
    }
});
</script>