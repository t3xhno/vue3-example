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
import { defineComponent, computed } from "vue";
import { useStore } from "../store/index";
import { CounterMutationTypes } from "../store/modules/counter/mutation-types";

export default defineComponent({
    setup: () => {
        const store = useStore();
        const counter = computed(() => store.state.counter);
        const doubleCounter = computed(() => store.getters.doubleCounter);
        const inc = () => store.commit(CounterMutationTypes.INCREMENT);
        const reset = () => store.commit(CounterMutationTypes.RESET);
        return { counter, inc, reset, doubleCounter };
    }
});
</script>