const useGenerics = () => {
    // Array elements of a generic type
    type LastEl = <T>(arr: T[]) => T;
    const last: LastEl = arr => arr[arr.length - 1];
    const last1 = last([1, 2, 3, 4]), last2 = last(["1", "2", "3", "4"]);
    // Make array of a generic type
    type MakePair = <X, Y = number>(x: X, y: Y) => [X, Y];
    const makePair: MakePair = (a, b) => [a, b];
    // Override first generic type, with the second one taking on the default ^
    const pair1 = makePair(1, 2), pair2 = makePair("1", "2"), pair3 = makePair<string | null>("1", 2);
    // Type constraints (extending types, type intersections)
    interface Person { firstName: string, lastName: string }
    type Constrain = <T extends Person>(obj: T) => T & { fullName: string };
    const makeFullName: Constrain = obj => ({ fullName: `${obj.firstName} ${obj.lastName}`, ...obj });
    const myObj = { firstName: "Marko", lastName: "Lazic", age: 28 };
    const fullName1 = makeFullName(myObj);
    type Whatever = <T>(obj: T) => void;
    const getGeneric: Whatever = obj => console.log(obj);
    return { last, makePair, makeFullName, last1, last2, pair1, pair2, pair3, getGeneric, fullName1 };
};
export default useGenerics;