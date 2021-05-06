<template>
  <div class="container">
    <Counter/>
    <Friends/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Counter from './components/Counter.vue';
import Friends from './components/Friends.vue';

export default defineComponent({
  name: 'App',
  components: { Counter, Friends }
});
</script>