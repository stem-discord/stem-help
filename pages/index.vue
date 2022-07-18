<template>
  <div>
    <h1>Hello</h1>
    <Markdown :source="stuff" />
  </div>
</template>

<script setup>
import Markdown from 'vue3-markdown-it';

let i = 0;

const stuff = ref(``);

const opts = [`~~hello~~`, `__hi__`];

setInterval(() => {
  stuff.value = opts[i++ % opts.length];
}, 1000);
</script>
