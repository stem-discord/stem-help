<template>
  <div class="pl-5">
    <h1>Component Testing</h1>
    <div class="view">
      <h2>Buttons</h2>
      <Button>
        <p style="font-size: 8px">NEXT</p>
      </Button>
      <br />
      <Button>
        <p style="font-size: 12px">NEXT</p>
      </Button>
      <br />
      <Button>
        <p style="font-size: 24px">NEXT</p>
      </Button>
      <br />
      <Button>
        <p style="font-size: 76px">NEXT</p>
      </Button>
      <br />
      <Button> CLICK ME </Button>
    </div>
    <h2>Markdown</h2>
    <div class="view">
      <MarkdownRender v-bind:text="text" />
    </div>
    <h2>Markdown agnostic</h2>
    <div class="view">
      <MarkdownLoadFromUrl
        url="https://raw.githubusercontent.com/stem-discord/public/main/README.md"
      />
      <MarkdownLoadFromUrl
        url="https://raw.githubusercontent.com/stem-discord/public/main/faq.md"
      />
    </div>
    <h2>Markdown from Github</h2>
    <div class="view">
      <MarkdownLoadFromGithubUrl
        url="https://raw.githubusercontent.com/stem-discord/public/main/README.md"
      />
      <MarkdownLoadFromGithubUrl
        url="https://raw.githubusercontent.com/stem-discord/public/main/faq.md"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "#/Button.vue";
import MarkdownRender from "#/MarkdownRender.vue";
import MarkdownLoadFromUrl from "#/MarkdownLoadFromUrl.vue";
import MarkdownLoadFromGithubUrl from "#/MarkdownLoadFromGithubUrl.vue";

const text = `
# Heading 1
content

* list
* list2

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
`;
</script>

<style lang="scss" scoped>
.view {
  @apply m-5;
}
</style>
