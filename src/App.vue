<template>
  <CookieAccept
    position="bottom-right"
    transitionName="fade"
    showPostponeButton="true"
    @clicked-accept="cookieAccepted"
  />
  <div id="nav">
    <router-link to="/">
      <Logo text="STEM" />
    </router-link>
    <!-- later add ways to check for mobile or not -->
    <div class="menu">
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/leaderboards">Leaderboards</router-link>
    </div>
    <div class="login">
      <router-link to="/login">Login</router-link>
    </div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <!-- this popup is absolute -->
  <div id="popup" :if="popup != null" />
  <router-view class="h-full w-full" />
</template>

<script setup>
import Logo from "./components/Logo.vue";
import CookieAccept from "./absolute/CookieAccept.vue";
function cookieAccepted() {
  console.log(`cookie accepted`);
}
</script>

<style lang="scss">
@use "style.scss";

#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-weight: light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-color);
  display: flex;
  flex-direction: column;
  gap: 0;
}

#nav {
  grid-template-areas: "logo menu login";
  line-height: 2.3rem;
  font-size: 1.5rem;
  padding: 0 5px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr auto;
  // z-index: 2;
  align-items: center;
  gap: 0.5rem;
  user-select: none;

  padding: 10px 20px 10px 20px;

  border-bottom: 1px solid var(--bg-color);

  text-transform: uppercase;

  a {
    font-weight: light;
    color: var(--main-color);

    &.router-link-exact-active {
      color: var(--sub-color);
    }
  }

  .logo {
    grid-area: logo;
  }

  .menu {
    grid-area: menu;
    align-items: center;
    a {
      margin: 0.5rem;
    }
  }

  .login {
    grid-area: login;
  }
}
</style>
