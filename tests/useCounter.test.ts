import useCounter from "../src/composables/useCounter";

const { counter, inc, reset } = useCounter();
const init = counter.value;

describe("Checking useCounter functions...", () => {
    test("Initial counter is zero", () => {
        expect(init).toEqual(0);
    });

    test("Increments the counter", () => {
        expect(inc()).toEqual(init + 1);
    });

    test("Resets the counter", () => {
        counter.value = 10;
        reset();
        expect(counter.value).toEqual(0);
    });
});