<template>
  <Html>
    <Head>
      <Title>stem</Title>
    </Head>
  </Html>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { setTheme } from '~/composables/theme';

onBeforeMount(() => {
  const localStorageTheme = localStorage.getItem('theme');
  if (localStorageTheme) setTheme(localStorageTheme);
  else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
    setTheme('dark');
  else setTheme('light');
});
</script>
