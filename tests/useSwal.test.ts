import useFriends  from "../src/composables/useFriends";

const swal = jest.fn();
const { getFriends } = useFriends(swal);

describe("Checking Swal...", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Swal is getting called on wrong password", async done => {
        getFriends("asdawe");
        expect(swal).toHaveBeenCalled();
        done();
    });
    test("Swal is NOT getting called on correct password", async done => {
        getFriends("0666330051");
        expect(swal).not.toHaveBeenCalled();
        done();
    });
});