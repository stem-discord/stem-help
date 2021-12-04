<template>
  <div class="pl-5">
    <h1>Component integration Testing</h1>
    <div class="view">
      <h2>Buttons</h2>
      <Button @click="() => scriptClick(`Hello top`)">
        <p style="font-size: 24px">NEXT</p>
      </Button>
      <Button @click="() => scriptClick(`Hello bottom`)">
        <p style="font-size: 24px">NEXT</p>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "#/Button.vue";

function scriptClick(msg) {
  console.log(`Has clicked ${msg}`);
}
</script>

<style lang="scss" scoped>
.view {
  @apply m-5;
}
</style>
