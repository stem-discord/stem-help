<template>
  <h1>{{ props.name }}</h1>
  <button @click="counter++">Increase counter {{ counter }}</button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
}>();

const counter = useState(`counter-${props.name}`, () => 0);

defineExpose({
  counter,
});
</script>
