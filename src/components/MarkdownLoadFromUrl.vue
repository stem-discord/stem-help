<template>
  <div>{{ content }}</div>
  <MD :text="number.toString()" />
</template>

<script>
import MD from "#/MarkdownRender.vue";
import { ref } from "vue";

export default {
  setup() {
    const content = ref(`loading`);
    const number = ref(0);

    setInterval(() => {
      number.value++;
    }, 1000);

    return {
      content,
      number,
    };
  },
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
  components: {
    MD,
  },
};
</script>
