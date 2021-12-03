<template>
  <MD :text="content" />
</template>

<script>
import MD from "#/MarkdownRender.vue";
import { ref } from "vue";

export default {
  setup() {
    const content = ref(`loading`);
    return {
      content,
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
