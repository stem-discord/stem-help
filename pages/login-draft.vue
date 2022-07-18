<template>
  <div class="flex">
    <h1 class="mr-0 w-fit">STOOM SERVER OWO</h1>
    <div class="p-4 w-fit ml-auto">
      <div style="right: 0; width: 500px" class="">
        <v-form>
          <div class="flex">
            <v-text-field
              v-model="username"
              label="username"
              density="compact"
              hide-details="true"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="password"
              density="compact"
              hide-details="true"
            ></v-text-field>
            <v-btn class="h-full self-center" @click="login">Login</v-btn>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script setup>
const username = ref(``);
const password = ref(``);
const config = useRuntimeConfig();

function login() {
  $fetch(`${config.public.apiBase}/v1/auth/login`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`,
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  }).then((res) => {
    if (res.status === 200) {
      res.json().then((data) => {
        console.log(data);
      });
    } else {
      alert(`login has failed. Status ${res.status}`);
    }
  });
}
</script>
