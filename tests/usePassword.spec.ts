import usePassword from "../src/composables/usePassword";

const { resetPassword, friendsPassword } = usePassword();
const initialPassword = friendsPassword.value;

describe("Checking usePasswords...", () => {
    test("Initialized to empty string", () => {
        expect(initialPassword).toBe("");
    });
    test("Resets correctly to empty string", () => {
        friendsPassword.value = "hehehe";
        resetPassword();
        expect(friendsPassword.value).toBe("");
    });
});