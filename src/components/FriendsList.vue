<template>
    <div class="friends-list-container">
        <ul class="friends-list-ul">
            <li
                v-for="(friend, index) in friends"
                :key="index"
                class="friends-list-item"
            >
                <h3>{{ friend.name }}</h3>
                <p>Age: {{ friend.age }}</p>
                <p>Phone number: {{ friend.phone }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Friends {
    name: string,
    age: number,
    phone: string
}

export default defineComponent({
    props: {
        friends: {
            type: Array as PropType<Partial<Friends>[]>,
            default: () => {
                return [
                    { name: "No friends, lol :)", age: 0, phone: "Nobody calls you, anyway." }
                ];
            }
        }
    }
});
</script>
