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
        <div class="generator-container">
            <li
                v-for="(lol, index) of range(1, 100, 7)"
                :key="index"
                class="generated-range"
            >
                {{ lol }}
            </li>
        </div>
        <div class="generator-container">
            <li
                v-for="(lol, index) of fibo(15)"
                :key="index"
                class="generated-range"
            >
                {{ lol }}
            </li>
        </div>
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
    },
    setup: () => {
        function* range(min: number, max: number, step = 1) { while(min <= max) yield (min += step) - step; }
        function* fibo(n: number) {
            const inf = !n && n !== 0;
            let [f1, f2] = [0, 1];
            while(inf || n--) {
                yield f1;
                [f1, f2] = [f2, f1 + f2];
            }
        }
        return { range, fibo };
    }
});
</script>
