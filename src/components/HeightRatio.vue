<template>
  <div ref="rect">
    <slot />
  </div>
</template>

// If you can write this in pure css, go for it
<script>
export default {
  mounted() {
    this.$refs.rect.style.width = `0`;
    this.r = new ResizeObserver(() => {
      this.$refs.rect.style.width =
        this.ratio * this.$refs.rect.offsetHeight + `px`;
    });
    this.r.observe(this.$refs.rect);
  },
  beforeUnmount() {
    this.r.disconnect();
  },
  props: {
    ratio: {
      type: Number,
      default: 1,
    },
  },
};
</script>
