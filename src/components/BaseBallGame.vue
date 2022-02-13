<template>
  <div class="border-pretty">
    <h1>Baseball Game</h1>
    <p>Made with love ❤</p>
    <div class="h-10"></div>

    <!-- create a list of items -->

    <ul class="w-full">
      <li v-for="(attempt, idx) in attempts" :key="idx">
        <div class="flex w-full">
          <p>{{ idx + 1 }}.</p>
          <div class="w-4"></div>
          <p>{{ attempt?.description }}</p>
          <p style="margin-left: auto">{{ attempt?.number }}</p>
        </div>
      </li>
    </ul>
    <form v-on:submit.prevent="makeGuess">
      <input
        type="number"
        v-model="guessText"
        style="
          border: 0;
          outline: 0;
          background: transparent;
          border-bottom: 1px solid black;
        "
        @input="
          (event) => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');

            // validator
            if (event.target.value.length > 4) {
              const v = event.target.value[4];
              event.target.value = event.target.value.slice(0, 3) + v;
            }

            text = event.target.value;
          }
        "
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { BaseBallGame } from "baseball-game";

const bb = new BaseBallGame(4);

const attempts = ref([]);

function makeGuess(e) {
  const guess = e.srcElement[0].value;

  if (guess.length < 4) {
    alert(`Please enter a 4 digit number`);
    return;
  }

  if (guess.length !== new Set(guess).size) {
    alert(`Please enter a number with no duplicates`);
    return;
  }

  const desc = bb.describe(guess);

  // Reset
  e.srcElement[0].value = ``;

  attempts.value.push({
    description: desc,
    number: guess,
  });
}
</script>

<style lang="scss">
// at this point every style is leaking everywhere
// i hate my life
.border-pretty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  padding: 1rem;
  margin: 0.2rem;
  box-shadow: 0 0 7px #00000041;
}
</style>
