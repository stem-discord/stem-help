<template>
  <div ref="slot" class="text-render-123"></div>
</template>

<script>
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export default {
  mounted() {
    const content = this.text;
    this.$refs.slot.innerHTML = sanitizeHtml(marked.parse(content));
  },
  watch: {
    text(val) {
      this.$refs.slot.innerHTML = sanitizeHtml(marked.parse(val));
    },
  },
  props: {
    text: String,
  },
};
</script>

<style lang="scss">
.text-render-123 {
  b {
    display: inline-block;
    margin-top: 1rem;
  }
}
</style>
