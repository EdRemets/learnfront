<script setup>
import Btn from '../components/Btn.vue';


</script>

<template>
    <Btn class="is-primary">Cool button</Btn>
    <Btn class="is-primary is-rounded is-outlined is-inverted">Cool button</Btn>
    <Btn color="primary" rounded outlined inverted>Cool button</Btn>
    <Btn color="primary">Cool button</Btn>
    <Btn fullwidth >Cool button</Btn>
    <Btn state="loading" @click="console.log('yee')">Cool button</Btn>
    <Btn state="disabled">Cool button</Btn>
    <Btn class="is-primary" href="https://google.com">Cool button</Btn>
    <Btn class="is-primary" state="disabled" href="https://google.com">Cool button</Btn>
    <Btn class="is-primary is-rounded is-outlined is-inverted">Cool button2</Btn>
    <Btn color="primary" rounded outlined inverted>Cool button3</Btn>
    <Btn color="primary">Cool button4</Btn>
    <Btn fullwidth >Cool button5</Btn>
    <Btn state="loading" @click="console.log('ok')">Cool button6</Btn>
    <Btn state="disabled">Cool button7</Btn>
    <Btn class="is-primary" href="https://google.com">Cool button8</Btn>
    <Btn class="is-primary" state="disabled" href="https://google.com">Cool button9</Btn>

</template>