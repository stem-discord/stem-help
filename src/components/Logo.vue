<template>
  <div class="logo">
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: `LOGO`,
  },
});
</script>

<style lang="scss">
.logo {
  p {
    color: var(--main-color);
    font-size: 2rem;
    font-weight: 900;
    text-align: center;
    // enable anti aliasing
    -webkit-font-smoothing: antialiased;
    font-smooth: always;
  }
}
</style>
