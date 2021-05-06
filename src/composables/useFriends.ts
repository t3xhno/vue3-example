import { fetchFriends } from '../api/friends';
import { ref } from 'vue';
import Swal from 'sweetalert2';

const useFriends = () => {
    const friends = ref({});
    const validPassword = /[0|+381]6\d[/|\s]?\d{2}[-|\s]?\d{2}[-|\s]?\d{2,3}/;
    const checkPassword = (pass: string) => validPassword.exec(pass);
    const resetFriends = () => friends.value = {};
    const getFriends = async (pass: string) => {
        resetFriends();
        checkPassword(pass) ? friends.value = (await fetchFriends()).data.data : Swal.fire({
            title: 'Error!',
            text: 'You\'ve entered the wrong password!',
            icon: 'error',
            confirmButtonText: 'Close'
        });
    };
    return { friends, getFriends };
};

export default useFriends;