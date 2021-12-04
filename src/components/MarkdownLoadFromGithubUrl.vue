<template>
  <div ref="slot">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    fetch(this.url)
      .then((res) => res.text())
      .then((text) =>
        fetch(`https://api.github.com/markdown`, {
          headers: {
            "Content-Type": `application/json`,
          },
          // do not store this response to the cache since its not even stored on local storage
          cache: `no-store`,
          method: `POST`,
          body: JSON.stringify({
            accept: `application/vnd.github.v3+json`,
            mode: `markdown`,
            text,
          }),
        })
          .then((res) => res.text())
          .then((html) => {
            this.$refs.slot.innerHTML = html;
          })
          .catch((err) => {
            console.log(err);
          }),
      )
      .catch((e) => {
        console.log(e);
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
