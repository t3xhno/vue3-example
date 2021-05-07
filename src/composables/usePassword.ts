import { ref } from "vue";

const usePassword = () => {
    const resetPassword = () => friendsPassword.value = "";
    const friendsPassword = ref("");
    return { resetPassword, friendsPassword };
};

export default usePassword;