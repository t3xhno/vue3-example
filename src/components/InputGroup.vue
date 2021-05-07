<template>
    <div class="input-group">
        <label for="fiendsPassword">Passwod:</label>
        <input
            v-model="friendsPassword"
            type="password"
            name="friendsPassword"
        >
    </div>
    <button @click="tryGettingFriends(friendsPassword)">
        Click to get friends
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import usePassword from "../composables/usePassword";

export default defineComponent({
    emits: ["get-friends"],
    setup: (_, { emit }) => {
        const { resetPassword, friendsPassword } = usePassword();
        const tryGettingFriends = (pass: string) => {
            emit("get-friends", pass);
            resetPassword();
        };
        return { tryGettingFriends, friendsPassword };
    },
});
</script>
