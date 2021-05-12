import axios from "../src/__mocks__/axios";
import useFriends from "../src/composables/useFriends";

const { friends, getFriends } = useFriends();
const initialFriends = friends.value;

describe("Checking the getFriends function...", () => {
    beforeEach(() => {
        axios.get.mockImplementationOnce(async () => await ({ data: { data: [ { firstName: "Marko" } ] } }));
    });

    test("Friends initialized to {}", () => {
        expect(initialFriends).toStrictEqual({});
    });
    test("getFriends executes corretly", async (done) => {
        await getFriends("+38166/63-30-051");
        expect(friends.value).toEqual([{firstName: "Marko"}]);
        done();
    });
    test("Fails with wrong password", async (done) => {
        await getFriends("That's where you're wrong, kiddo :)");
        expect(friends.value).toStrictEqual({});
        done();
    });
});