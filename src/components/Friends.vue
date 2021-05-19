<template>
    <h1>My friends!</h1>
    <InputGroup @get-friends="tryGettingFriends" />
    <FriendsList :friends="friends" />
    <img
        id="test-lol"
        src="https://source.unsplash.com/random/experimental?dark"
        alt="roflmao"
        banner
    >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputGroup from "../components/InputGroup.vue";
import FriendsList from "../components/FriendsList.vue";
import useGenerics from "../composables/useGenerics";
import useFriends from "../composables/useFriends";

export default defineComponent({
    components: { InputGroup, FriendsList },
    setup: () => {
        const { getGeneric, fullName1: fN } = useGenerics();
        getGeneric(fN);
        const { friends, getFriends } = useFriends();
        const tryGettingFriends = (pass: string) => getFriends(pass);
        return { tryGettingFriends, friends };
    }
});
</script>
