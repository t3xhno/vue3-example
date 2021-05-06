import { fetchFriends } from '../api/friends';
import { ref } from 'vue';
import useSwal from '../composables/useSwal';

const useFriends = () => {
    const { swal } = useSwal();
    const friends = ref({});
    const validPassword = new RegExp(/[0|+381]6\d[/|\s]?\d{2}[-|\s]?\d{2}[-|\s]?\d{2,3}/);
    const checkPassword = (pass: string) => validPassword.exec(pass) ? true : false;
    const resetFriends = () => friends.value = {};
    const getFriends = async (pass: string) => {
        resetFriends();
        checkPassword(pass) ?
            friends.value = (await fetchFriends()).data.data :
            swal("Error!", "You've entered the wrong password!", "error", "Close");
    };
    return { friends, getFriends };
};

export default useFriends;