const useGenerics = () => {
    // Array elements of a generic type
    type LastEl = <T>(arr: T[]) => T;
    const last: LastEl = arr => arr[arr.length - 1];
    // Alternatively - the functions can be typed in-line, but I prefer the explicit type signature
    const lastFn = <T>(arr: T[]): T => arr[arr.length - 1];

    const last1 = last([1, 2, 3, 4]), last2 = last(["1", "2", "3", "4"]);

    // Make tuple of a generic type
    type MakePair = <X, Y = number>(x: X, y: Y) => [X, Y];
    const makePair: MakePair = (a, b) => [a, b];

    // Override first generic type, with the second one taking on the default (p4) ^
    const [p1, p2, p3, p4] = [makePair(1, 2), makePair("1", "2"), makePair("1", 2), makePair<string | null>("1", 2)];

    // Type constraints (extending types, type intersections)
    // Here, T is some generic object which must at least have the properties firstName and lastName (the constraint)
    interface HasFirstLastName { firstName: string, lastName: string }
    type Constrained = <T extends HasFirstLastName>(obj: T) => T & { fullName: string };
    const makeFullName: Constrained = obj => ({ fullName: `${obj.firstName} ${obj.lastName}`, ...obj });
    // In-line alternative sucks (this is why I prefer defining type signatures for functions):
    const makeFullName1 = <T extends { firstName: string, lastName: string }>(obj: T): T & { fullName: string } =>
        ({ fullName: `${obj.firstName} ${obj.lastName}`, ...obj });

    const myObj = { firstName: "Marko", lastName: "Lazic", age: 28 };
    const fullName1 = makeFullName(myObj);

    type Whatever = <T>(obj: T) => void;
    const getGeneric: Whatever = obj => console.log(obj);
    return { last, makePair, makeFullName, last1, last2, p1, p2, p3, p4, getGeneric, fullName1 };
};
export default useGenerics;