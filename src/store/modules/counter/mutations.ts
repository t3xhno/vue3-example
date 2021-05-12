import { MutationTree } from "vuex";
import { CounterMutationTypes } from "./mutation-types";
import { CounterState } from "./state";

export type CounterMutations<S = CounterState> = {
    [CounterMutationTypes.INCREMENT](state: S): void,
    [CounterMutationTypes.RESET](state: S): void
};

export const mutations: MutationTree<CounterState> & CounterMutations = {
    [CounterMutationTypes.INCREMENT]: state => state.counter++,
    [CounterMutationTypes.RESET]: state => state.counter = 0
};