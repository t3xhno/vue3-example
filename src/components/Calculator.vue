<template>
    {{ result }}
    <button @click="add.execute()">
        ADD
    </button>
    <button @click="multiply.execute()">
        MULTIPLY
    </button>
    <button @click="undo()">
        UNDO
    </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Command {
    execute: () => void;
    undo: () => void;
}

export default defineComponent({
    setup() {
        const result = ref(0);
        const ops = [];
        const add: Command = {
            execute: () => {
                result.value += 10;
                ops.push(add);
            },
            undo: () => result.value -= 10
        };
        const multiply: Command = {
            execute: () => {
                result.value *= 3;
                ops.push(multiply);
            },
            undo: () => result.value /= 3
        };
        type Undo = () => void;
        const undo: Undo = () => result.value = ops.pop()?.undo() || result.value;

        return { result, add, multiply, undo };
    }
});
</script>
