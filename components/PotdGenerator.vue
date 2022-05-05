<template>
  <v-container>
    <h1>Problem of the day Tool</h1>

    <v-form ref="form" class="m-5" width="100">
      <v-container>
        <v-text-field
          v-model="title"
          label="Title"
          variant="contained"
          required
        ></v-text-field>

        <v-textarea
          v-model="question"
          label="Question"
          variant="contained"
          required
        ></v-textarea>
        <v-autocomplete
          v-model="questionType"
          :items="[
            `single`,
            // `mcq-single`,
            // `mcq-multi`,
            `true-false`,
            // `open-regex`,
          ]"
          dense
          filled
          label="Question type"
          required
        ></v-autocomplete>
        <v-container v-if="questionType">
          <div v-if="questionType === `single`">
            <v-text-field
              v-model="answer"
              label="Answer"
              variant="contained"
            ></v-text-field>
          </div>
          <div v-else-if="questionType === `true-false`">
            <v-switch
              v-model="answer"
              :label="answer ? 'True' : 'False'"
              variant="contained"
            ></v-switch>
          </div>
        </v-container>
        <label class="w-full p-2"
          >I agree to not cry about copyrights after submitting this
          question</label
        >
        <input v-model="copyrightCheck" type="checkbox" />
        <v-divider></v-divider>
      </v-container>
      <v-btn class="p-8" @click="submit"> Submit </v-btn>
    </v-form>
    <div class="border-2 border-gray-200 h-fit">
      <textarea
        v-model="codeview"
        class="codeview outline-none"
        readonly
        oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
      ></textarea>
    </div>
  </v-container>
</template>

<script setup>
const value = ref(null);

const form = ref(null);
const copyrightCheck = ref(null);

const title = ref(``);
const questionType = ref(null);

const question = ref(null);
const answer = ref(null);

watchEffect(() => {
  if (questionType.value === `true-false`) {
    answer.value = false;
  } else if (questionType.value === `single`) {
    answer.value = ``;
  } else {
    answer.value = null;
  }
});

const codeview = computed(() => {
  return JSON.stringify(
    {
      metadata: {
        title: title.value,
        questionType: questionType.value,
      },
      content: { test: `hi`, answer: answer.value },
    },
    null,
    2
  );
});

function submit(e) {
  if (!copyrightCheck.value) {
    alert(`You must agree to not be a crybaby about copyrights`);
    e.preventDefault();
    return;
  }
  console.log(form);
}
</script>

<style scoped lang="scss">
.codeview {
  width: 100%;
  font-family: monospace;
  // Css is retarded
  height: 1000px;
}
</style>
