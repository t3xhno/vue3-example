import { ref } from "vue";

const INITIAL_COUNTER_VALUE = 0;

const useCounter = () => {
    const counter = ref(INITIAL_COUNTER_VALUE);
    const inc = () => counter.value++;
    const reset = () => counter.value = INITIAL_COUNTER_VALUE;
    return { counter, inc, reset };
};

export default useCounter;