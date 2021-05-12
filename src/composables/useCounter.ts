import { computed } from "vue";
import { useStore } from "../store/index";
import { CounterMutationTypes } from "../store/modules/counter/mutation-types";

const useCounter = () => {
    const store = useStore();
    const counter = computed(() => store.state.counter);
    const doubleCounter = computed(() => store.getters.doubleCounter);
    const inc = () => store.commit(CounterMutationTypes.INCREMENT);
    const reset = () => store.commit(CounterMutationTypes.RESET);
    return { counter, doubleCounter, inc, reset };
};

export default useCounter;