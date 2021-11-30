<template>
  <p>ers</p>
  <!-- <div>{{ $route.name }}</div>
  <div>{{ router.currentRoute.value.path }}</div> -->
  <!-- god if you are seeing this, this is how you pass in path. I tried using react
  router and it doesn't really work -->
  <potd v-bind:path="$route.fullPath" />
</template>

<script setup>
import { useRouter } from "vue-router";
import potd from "./Potd.jsx";
const router = useRouter();

console.log(router.currentRoute);
</script>
