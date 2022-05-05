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
  <NuxtPage />
</template>

<script setup>
function login() {}
</script>

<style>
@import '~/assets/css/tailwind.css';
</style>
