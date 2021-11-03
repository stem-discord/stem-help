<template>
  <h1 class="select-none">Login using Discord</h1>
  <button @click="discordLogin">discord login</button>
  <div class="form-wrapper">
    <form @submit.prevent ref="form">
      <input type="text" v-model="username" placeholder="username" required />
      <input
        type="password"
        v-model="password"
        placeholder="password"
        required
      />
      <button type="submit" @click="login">login</button>
    </form>
  </div>
</template>

<script setup>
function discordLogin() {
  // show new page in uri
  alert(`not a thing`);
}

function login() {
  alert(`thonk`);
}
</script>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 10px;
  align-items: center;
}

.form-wrapper {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
