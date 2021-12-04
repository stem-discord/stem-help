<template>
  <MD v-if="content" :text="content" />
  <div v-else class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script>
import MD from "#/MarkdownRender.vue";
import { ref } from "vue";

export default {
  setup() {
    const content = ref(``);
    // const number = ref(0);

    // setInterval(() => {
    //   number.value++;
    // }, 1000);

    return {
      content,
      // number,
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
