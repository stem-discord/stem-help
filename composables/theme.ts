import { ref, computed } from 'vue';

const currentTheme = ref('light');

const setTheme = (theme: string): void => {
  currentTheme.value = theme;
  document.body.setAttribute('class', theme);
  localStorage.setItem('theme', theme);
};

const toggleTheme = (): void => {
  setTheme(currentTheme.value === 'dark' ? 'light' : 'dark');
};

const theme = computed(() => currentTheme);
const isDark = computed(() => theme.value.value === 'dark');

export { setTheme, toggleTheme, theme, isDark };
