<script setup>
import { computed, ref } from 'vue';
let i = 0;
let items = ref([
    {id:i++, text:'Piim', isDone: true},
    {id:i++, text:'Viin', isDone: true},
    {id:i++, text:'Sai', isDone: false},
    {id:i++, text:'Mac', isDone: false},
]);
let newItem = ref('');
function add() {
    if (newItem.value.trim() !== '') {
        items.value.push({id:i++, text: newItem.value.trim(), isDone: false});
        newItem.value = '';
    }
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let todoItems = computed(() => items.value.filter(item => !item.isDone));
</script>

<template>
    <div class="container mt-3">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="Find a repository">
            </div>
            <div class="control">
                <button @click="add" class="button is-info">
                    Add
                </button>
            </div>
        </div>
        <h1>All Items</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.text }}
                <input type="checkbox" v-model="item.isDone">
            </li>
        </ul>

        <h1>Done Items</h1>
        <ul>
            <li v-for="item in doneItems" :key="item.id">
                {{ item.text }}
                <input type="checkbox" v-model="item.isDone">
            </li>
        </ul>

        <h1>To-do Items</h1>
        <ul>
            <li v-for="item in todoItems" :key="item.id">
                {{ item.text }}
                <input type="checkbox" v-model="item.isDone">
            </li>
        </ul>
    </div>
</template>

<style>

</style>