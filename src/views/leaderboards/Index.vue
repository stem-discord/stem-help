<template>
  <div class="h-full w-full">
    <div class="h-full w-full">
      <Loading v-if="loading" class="m-auto" />
      <ul v-else class="overflow-hidden">
        <div>
          <li
            v-for="user in users"
            :key="user.id"
            class="flex col-start-auto my-3 ml-10 text-white p-5"
            style="border-radius: 9999px 0 0 9999px; background-color: #1d222e"
          >
            <p>{{ user.username }}</p>
            <p class="ml-auto right-0">{{ user.score }}</p>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Loading from "@/components/Loading";

const loading = ref(true);

const users = ref([]);

setTimeout(() => {
  loading.value = false;

  const res = [
    {
      username: `Michael#8831`,
      score: 24,
    },
    {
      username: `Captain_Mat01#1223`,
      score: 20,
    },
    {
      username: `Burbujas#6023`,
      score: 15,
    },
    {
      username: `MadeInHell#7765`,
      score: 12,
    },
  ];

  users.value = res;
}, 1000);
</script>

<style lang="scss"></style>
