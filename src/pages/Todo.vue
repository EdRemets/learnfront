<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
let i = 0;
let items = ref([
    {id:i++, text:'Piim', isDone: true, importance: 'high'},
    {id:i++, text:'Viin', isDone: true, importance: 'low'},
    {id:i++, text:'Sai', isDone: false, importance: 'medium'},
    {id:i++, text:'Mac', isDone: false, importance: 'low'},
]);
let newItem = ref('');
let newImportance = ref('medium');
function add() {
    if (newItem.value.trim() !== '') {
        items.value.push({id:i++, text: newItem.value.trim(), isDone: false, importance: newImportance.value});
        newItem.value = '';
        newImportance.value = 'medium';
    }
}

const importanceOrder = {
    high: 3,
    medium: 2,
    low: 1
};

let sortedItems = computed(() =>
    [...items.value].sort((firstValue, secondValue) =>
        importanceOrder[secondValue.importance] - importanceOrder[firstValue.importance]
    )
);

let doneItems = computed(() => sortedItems.value.filter(item => item.isDone));
let todoItems = computed(() => sortedItems.value.filter(item => !item.isDone));
</script>

<template>
    <div class="container mt-3">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="Find a repository">
            </div>
            <div class="control">
                <div class="select">
                    <select v-model="newImportance">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
            </div>
            <div class="control">
                <button @click="add" class="button is-info">
                    Add
                </button>
            </div>
        </div>
        <ItemList :items="sortedItems" title="All Items"></ItemList>
        <ItemList :items="doneItems" title="Done Items"></ItemList>
        <ItemList :items="todoItems" title="Todo Items"></ItemList>
    </div>
</template>

<style>

</style>