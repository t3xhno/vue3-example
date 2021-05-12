import { GetterTree } from "vuex";
import { CounterState } from "./state";

export type CounterGetters = {
    doubleCounter(state: CounterState): number;
};

export const getters: GetterTree<CounterState, CounterState> & CounterGetters = {
    doubleCounter: state => state.counter * 2
};