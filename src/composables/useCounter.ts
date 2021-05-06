import { ref } from 'vue';

const useCounter = () => {
    const counter = ref(0);
    const inc = () => counter.value++;
    const reset = () => counter.value = 0;
    return { counter, inc, reset };
};

export default useCounter