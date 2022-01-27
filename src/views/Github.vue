<template>
  <div class="p-10" id="githubview">
    <MDG
      url="https://raw.githubusercontent.com/stem-discord/.github/master/profile/README.md"
    />
  </div>
</template>
<script setup>
import MDG from "#/MarkdownLoadFromGithubUrl.vue";
</script>

<style lang="scss">
#githubview {
  p {
    margin-bottom: 1rem;
  }
}
</style>
