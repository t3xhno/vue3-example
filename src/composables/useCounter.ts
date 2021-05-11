import { ref } from "vue";

const INITIAL_COUNTER_VALUE = 0;

const useCounter = (init: number = INITIAL_COUNTER_VALUE) => {
    const counter = ref(init);
    const inc = () => ++counter.value;
    const reset = () => counter.value = init;
    return { counter, inc, reset };
};

export default useCounter;