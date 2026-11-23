<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    color: String,
    size: String,
    title: String,
    closable: Boolean,
});

let visible = ref(true);

let computedClass = computed(() => {
    let combined = props.class;
    if(props.color) {
        combined += ' is-' + props.color;
    }
    if(props.size) {
        combined += ' is-' + props.size;
    }
    return combined;
});

</script>
<template>
    <article v-if="visible" class="message" :class="computedClass">
        <div v-if="title" class="message-header">
            <p>{{ title }}</p>
            <button v-if="closable" class="delete" :class="size ? 'is-' + size : ''" @click="visible = false"></button>
        </div>
        <div class="message-body">
            <slot></slot>
        </div>
    </article>
</template>