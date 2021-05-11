import useGenerics from "../src/composables/useGenerics";

const { last, makePair, makeFullName, lastFn, makeFullName1 } = useGenerics();

describe("Checking useGenerics functions...", () => {
    describe("Checking the last function...", () => {
        test("With numbers array", () => {
            expect(last([1, 2, 3, 4])).toEqual(4);
        });
        test("With strings array", () => {
            expect(last(["1", "2", "3", "4"])).toEqual("4");
        });
    });
    describe("Checking the makePair function...", () => {
        test("With number + number", () => {
            expect(makePair(1, 2)).toEqual([1, 2]);
        });
        test("With number + string", () => {
            expect(makePair(1, "2")).toEqual([1, "2"]);
        });
        test("With string + number", () => {
            expect(makePair("1", 2)).toEqual(["1", 2]);
        });
        test("With string + string", () => {
            expect(makePair("1", "2")).toEqual(["1", "2"]);
        });
    });
    describe("Checking the makeFullName function...", () => {
        test("Returns original object, plus the fullName property", () => {
            const originalObject = { age: 28, lastName: "Lazic", firstName: "Marko", hehehe: "lol" };
            expect(makeFullName(originalObject)).toStrictEqual({ fullName: "Marko Lazic", ...originalObject });
        });
    });
    describe('Covering the example functions', () => {
        test('They work', () => {
            expect(lastFn([0, 1, 2, 3])).toBe(3);
        });
        test('They work2', () => {
            expect(makeFullName1({ firstName: 'Lol', lastName: 'Hehe' })).toStrictEqual({ firstName: 'Lol', lastName: 'Hehe', fullName: 'Lol Hehe' });
        });
    });
});