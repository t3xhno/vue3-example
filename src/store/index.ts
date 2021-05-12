import { createStore, Store as VuexStore, CommitOptions } from "vuex";
import { CounterState, state } from "./modules/counter/state";
import { CounterGetters, getters } from "./modules/counter/getters";
import { CounterMutations, mutations } from "./modules/counter/mutations";

export const store = createStore({
    state, getters, mutations
});

export type Store = Omit<VuexStore<CounterState>, "getters" | "commit"> & {
    commit<K extends keyof CounterMutations>(
        key: K, options?: CommitOptions
    ): ReturnType<CounterMutations[K]> & {
        getters: {
            [K in keyof CounterGetters]: ReturnType<CounterGetters[K]>
        }
    }
};

export const useStore = () => store as Store;