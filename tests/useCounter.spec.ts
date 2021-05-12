import useCounter from "../src/composables/useCounter";

const { counter, inc, reset, doubleCounter } = useCounter();
const init = counter.value;

describe("Checking useCounter functions...", () => {
    test("Initial counter is zero", () => {
        expect(init).toEqual(0);
    });

    test("Increments the counter", () => {
        inc();
        expect(counter.value).toEqual(init + 1);
    });

    test("Resets the counter", () => {
        inc();
        reset();
        expect(counter.value).toEqual(0);
    });

    test("doubleCounter working correctly", () => {
        inc();
        expect(doubleCounter.value).toBe(counter.value * 2);
    });
});