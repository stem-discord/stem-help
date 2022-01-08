<template>
  <div class="p-10" id="toeflview">
    <MDG
      url="https://raw.githubusercontent.com/stem-discord/resources/main/main/English/TOEFL%20independent%20essay%20examples"
    />
  </div>
</template>
<script setup>
import MDG from "#/MarkdownLoadFromGithubUrl.vue";
</script>

<style lang="scss">
#toeflview {
  p {
    margin-bottom: 1rem;
  }
}
</style>
