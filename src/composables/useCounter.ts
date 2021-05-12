import { computed } from "vue";
import { useStore, Store } from "../store/index";
import { CounterMutationTypes } from "../store/modules/counter/mutation-types";

const store = useStore();

const useCounter = (myStore: Store = store) => {
    const counter = computed(() => myStore.state.counter);
    const doubleCounter = computed(() => myStore.getters.doubleCounter);
    const inc = () => myStore.commit(CounterMutationTypes.INCREMENT);
    const reset = () => myStore.commit(CounterMutationTypes.RESET);
    return { counter, doubleCounter, inc, reset };
};

export default useCounter;