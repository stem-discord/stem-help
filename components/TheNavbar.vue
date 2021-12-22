<template>
  <div class="bg-nav w-full px-5 py-2">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- left -->
      <span class="text-[2rem] font-extrabold">STEM</span>

      <!-- right -->
      <div class="flex-center space-x-3">
        <!-- theme selector -->
        <button @click="toggleTheme" class="button px-2">
          <SunIcon v-show="isDark" class="w-5" />
          <MoonIcon v-show="!isDark" class="w-5" />
        </button>

        <button class="button">Sign in</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleTheme } from '@/composables/theme';
import { SunIcon, MoonIcon } from '@heroicons/vue/outline';
</script>

<style lang="scss"></style>
