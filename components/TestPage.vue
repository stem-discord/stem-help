<template>
  <div>
    <h1>Hello wonderful person {{ counter }} local {{ localCounter }}</h1>
    <button @click="counter++">click global</button>
    <CounterButton name="A" />
    <CounterButton name="B" />
    <CoolCounterButton name="B" />
    <RouterLink to="/counters">Go to counter</RouterLink>
  </div>
</template>

<script setup>
const counter = useCounter();
const localCounter = useState(`counter-loc`, () =>
  Math.round(Math.random() * 100)
);
</script>
