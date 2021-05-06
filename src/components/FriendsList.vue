<template>
    <ul>
        <li v-for="(friend, index) in friends" :key="index">
            <h3>{{ friend.name }}</h3>
            <p>Age: {{ friend.age }}</p>
            <p>Phone number: {{ friend.phone }}</p>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Friends {
    name?: string,
    age?: number,
    phone?: string
}

export default defineComponent({
    props: {
        friends: {
            type: Object as PropType<Friends>
        }
    },
})
</script>
