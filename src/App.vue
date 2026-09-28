<script setup>
import { ref } from 'vue';

    let isPrimary = ref(true)
    let text = ref('');
</script>

<template>
    <button @click="isPrimary=!isPrimary" class="button" :class="{'is-primary': isPrimary, 'is-warning': !isPrimary}">Click Me!</button>
    <input type="text" class="input" v-model="text">
    <h1>{{ text.split('').reverse().join('') }}</h1>
</template>

<style>

</style>