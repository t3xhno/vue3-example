import { fetchFriends } from "../api/friends";
import { ref } from "vue";
import useSwal, { SwalType } from "../composables/useSwal";

const { swal } = useSwal();

const useFriends = (mySwal: SwalType = swal) => {
    const friends = ref({});
    const validPassword = new RegExp(/^(0|\+381)6\d[/|\s]?\d{2}[-|\s]?\d{2}[-|\s]?\d{2,3}$/);
    const fetchFriendsAction = async () => friends.value = (await fetchFriends()).data.data;
    const checkPassword = (pass: string) => validPassword.exec(pass) ? true : false;
    const resetFriends = () => friends.value = {};
    const getFriends = async (pass: string) => {
        resetFriends();
        checkPassword(pass) ?
            await fetchFriendsAction() :
            mySwal("Error!", "You've entered the wrong password!", "error");
    };
    return { friends, getFriends };
};

export default useFriends;