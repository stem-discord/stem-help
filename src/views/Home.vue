<template>
  <div class="home">
    <h1>welcome to the STEM Helpers &amp; Students Discord website</h1>
    <h4>It's time to ditch Chegg</h4>

    <h1>Links</h1>
    <router-link to="/rules" class="button">RULES</router-link>
    <router-link to="/privacypolicy" class="button">PRIVACY POLICY</router-link>
    <router-link to="/toefl" class="button">RESOURCES</router-link>
    <p class="inline">(toefl at the moment, additional content coming soon)</p>
    <!-- <router-link to="/about">About</router-link> -->
    <!-- <router-link to="/contact">Contact</router-link> -->
    <!-- <router-link to="/faq">FAQ</router-link> -->

    <p>A Server dedicated to helping with Homework and Discussions.</p>
    <p>
      SCIENCE, TECHNOLOGY, ENGINEERING & MATHEMATICS (STEM) Server for Students,
      Professionals and Enthusiasts
    </p>
    <p>
      Whether you're a student or just interested in learning about any of these
      subjects or related fields, this server is for you!
    </p>

    <div class="h-10"></div>

    <h1>Join the server</h1>

    <p>
      <a href="https://discord.gg/stem"> discord.gg/stem</a>

      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </p>
    <div style="background-color: #7289da; width: fit-content">
      <iframe
        src="https://discord.com/widget?id=493173110799859713&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      >
      </iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue";

export default {
  name: `Home`,
  components: {
    Button,
  },
};
</script>
