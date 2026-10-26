<script setup>
defineProps(['items', 'title']);
</script>

<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id">
        <span :class="{
            'has-text-danger': item.importance === 'high',
            'has-text-warning': item.importance === 'medium',
            'has-text-success': item.importance === 'low'
        }">
            {{ item.text }}
        </span>

        <input type="checkbox" v-model="item.isDone">
    </li>
    </ul>

</template>