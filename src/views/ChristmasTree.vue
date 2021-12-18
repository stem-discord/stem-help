<template>
  <h1>View our community trees!</h1>

  <div class="view">
    <div class="card" v-for="(user, k) in users" :key="k">
      <h2 class="text-render">{{ user.username }}</h2>
      <code
        class="p-4 bg-gray-800 text-render text-xs"
        style="color: #ffffff; border-radius: 5px; width: 260px"
      >
        {{ user.stdout }}
      </code>
      <div class="h-5"></div>
      <div class="voting">
        <Button
          class="upvote"
          :active="voteData[user.id] === 1 ? `activeUp` : ``"
          @click="upvote(user.id)"
        >
          <i class="fas fa-thumbs-up"></i>
          <p>{{ user.upvotes }}</p>
        </Button>
        <div class="w-1"></div>
        <Button
          class="downvote"
          @click="downvote(user.id)"
          :active="voteData[user.id] === -1 ? `activeDown` : ``"
        >
          <i class="fas fa-thumbs-down"></i>
          <p>{{ user.downvotes }}</p>
        </Button>
      </div>
    </div>
  </div>
  <div class="h-10"></div>
  <h1>Upload your tree!</h1>

  <div class="form-wrapper" :class="{ submitting: sendingMeme }">
    <h5 class="bg-red-500" style="color: grey">{{ errorMessage }}</h5>
    <form @submit.prevent class="form" ref="form">
      <h1 style="opacity: 100%">
        {{ sending ? "Uploading..." : "Submit Here" }}
      </h1>
      <span>
        <input type="text" name="title" required />
        <label for="title">Title</label>
      </span>
      <span>
        <input
          type="text"
          name="source_code"
          required
          style="font-family: Consolas, monaco, monospace"
        />
        <label for="source_code">Code</label>
      </span>
      <span>
        <input
          type="text"
          name="code_type"
          required
          style="font-family: Consolas, monaco, monospace"
        />
        <label for="code_type">Language (e.g python)</label>
      </span>
      <span>
        <input
          type="text"
          name="token"
          required
          style="font-family: Consolas, monaco, monospace"
        />
        <label for="token">Your token (get it by dming STEM.HELP !token)</label>
      </span>
      <Button @click="sendChristmasTree()" style="color: black">Upload!</Button>
    </form>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { ref } from "vue";

const form = ref(null);

export default {
  setup() {
    const users = ref([]);
    const errorMessage = ref(undefined);

    const voteData = ref({
      0: 1,
      1: -1,
    });

    function upvote(id) {
      this.voteData[id] = (this.voteData[id] ?? 0) <= 0 ? 1 : 0;
    }
    function downvote(id) {
      this.voteData[id] = (this.voteData[id] ?? 0) >= 0 ? -1 : 0;
    }
    async function sendChristmasTree() {
      if (!form.value) return;
      console.log(`sending...`);
      this.sendingMeme = true;
      const fd = new FormData(form.value);
      try {
        await fetch(`https://api.stem.help/v1/events/christmastree`, {
          method: `POST`,
          body: fd,
          headers: {
            // adding this doesnt work
            // 'Content-Type': 'multipart/form-data'
          },
        }).then(async (r) => {
          const jbody = await r.json();
          console.log(jbody);
          if (r.status >= 400) {
            console.log(`error`);
            this.errorMessage = jbody.message;
          } else {
            console.log(`success`);
            alert(`your code has been submitted!`);
            form.value.reset();
          }
        });
      } catch (e) {
        console.log(e);
        if (e.status === 500) {
          this.errorMessage = `internal server error`;
        } else {
          this.errorMessage = e.statusText;
        }
        alert(`something went wrong`);
      } finally {
        this.sendingMeme = false;
      }
    }

    return {
      users,
      voteData,
      upvote,
      downvote,
      sendChristmasTree,
      errorMessage,
    };
  },
  created() {
    fetch(`https://api.stem.help/v1/events/christmastree`)
      .then((res) => res.json())
      .then(async (data) => {
        await Promise.all(
          Object.entries(data.trees).map(async ([k, v]) => {
            const { tag } = await fetch(
              `https://api.stem.help/v1/service/discordidlookup/${k}`,
            ).then((r) => r.json());
            v.username = tag;
          }),
        );
        this.users = data.trees;
      })
      .catch((err) => {
        alert(`error fetching christmas tree data`);
        console.log(err);
      });
  },
  mounted() {
    form.value = this.$refs.form;
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss">
.view {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.card {
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

.voting {
  width: 100%;
  display: flex;
}

// form styles
.form-wrapper {
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  .meme-form-error,
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    padding: 2rem;
    box-shadow: 0 0 7px #00000041;
    width: 36rem;
    margin: 0 auto;
  }
  .meme-form-error {
    background-color: #ff6347;
    margin-bottom: 3rem;
    // display: none; (toggle between none and flex)
  }
  form {
    background: #00000000;
    h1 {
      font-size: 3rem;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 1rem 0;
      width: 100%;
      input {
        width: 100%;
        padding: 0.8rem;
        background: none;
        border-bottom: solid 2px #613a94a1;
        margin-bottom: 1rem;
      }
      label {
        position: absolute;
        margin-left: 1.2rem;
        transition: all 0.4s ease;
      }
      input:valid ~ label,
      input:focus ~ label {
        font-size: 1.2rem;
        transform: translate(-0.2rem, -3rem);
        color: rgb(116, 116, 116);
      }
      input:focus {
        border-bottom: solid 2px var(--main-alpha);
      }
    }
    button {
      padding: 0.6rem;
      margin: 2.6rem 0 0.2rem 0;
      color: white;
      background-color: var(--main-alpha);
      cursor: pointer;
      transition: all 0.4s ease;
    }
    button:hover {
      box-shadow: 0 0 1rem #00000041;
    }
    h2 {
      display: none;
    }
  }
}
.submitting {
  position: relative;
  h1,
  span,
  input,
  button {
    opacity: 0;
    pointer-events: none;
  }
  h2 {
    display: block !important;
    color: rgb(84, 84, 84);
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
