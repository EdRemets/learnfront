<script setup>
import Message from '../components/Message.vue';


</script>

<template>
    <Message title="Hello World">Cool message</Message>
    <Message class="is-primary" title="Primary">Cool message1</Message>
    <Message color="info" title="Info" closable>Cool message2</Message>
    <Message color="success" size="small" title="Small" closable>Cool message3</Message>
    <Message color="warning" size="large" title="Large" closable>Cool message4</Message>
    <Message color="danger">Cool message5</Message>
    <Message color="dark" title="Dark">Cool message6</Message>
</template>