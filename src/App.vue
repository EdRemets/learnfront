<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
import Todo from './pages/Todo.vue'
import Modals from './pages/Modals.vue'

let tabTitles = ref([
    'Todo',
    'Models'
]);

let activeTab = ref(0);

let contents = [
    Todo,
    Modals
];
</script>

<template>
    <Tabs :titles="tabTitles" :active="activeTab", @change="activeTab = $event"></Tabs>
    <div class="container content mt-3">
        <component :is="contents[activeTab]"></component>
    </div>
</template>

<style></style>