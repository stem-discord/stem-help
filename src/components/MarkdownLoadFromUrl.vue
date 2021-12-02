<template>
  <MD :text="content" />
</template>

<script setup>
import MD from "#/MarkdownRender.vue";
const content = ref(`loading`);
</script>

<script>
import { ref } from "vue";

export default {
  created() {
    fetch(this.url)
      .then((res) => res.text())
      .then((text) => {
        this.content = text;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
