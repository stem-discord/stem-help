<template>
  <div>
    <h1>Welcome to counters</h1>
    <CounterButton ref="A" name="A" />
    <CounterButton name="B" />
    <CounterButton ref="C" name="C" />
    <h2>
      Counter for A using ref
      {{ A && A.counter }}
    </h2>
  </div>
</template>

<script setup>
const A = ref(null);

const C = ref(null);

function st(executor) {
  executor();
  return setTimeout(() => {
    st(executor);
  }, 1000);
}

st(() => {
  console.log(C.value && C.value.counter);
  if (C.value) {
    C.value.counter++;
  }
});
</script>
