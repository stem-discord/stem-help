<template>
  <h1>View our community trees!</h1>

  <div class="view">
    <div class="card" v-for="user in users" :key="user.id">
      <h2>{{ user.author.toUpperCase() }}</h2>
      <img :src="user.url" />
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
</template>

<script>
import Button from "@/components/Button.vue";
import { ref } from "vue";

export default {
  setup() {
    const users = ref([
      {
        author: `james`,
        title: `Christmas Tree`,
        url: `http://api.stem.help/v1/service/banner/html/ChristmasTree`,
        id: 0,
      },
      {
        author: `mike`,
        title: `Christmas Tree`,
        url: `http://api.stem.help/v1/service/banner/html/ChristmasTree`,
        id: 1,
      },
      {
        author: `sophie`,
        title: `Christmas Tree`,
        url: `http://api.stem.help/v1/service/banner/html/ChristmasTree`,
        id: 2,
      },
      {
        author: `jane`,
        title: `Christmas Tree`,
        url: `http://api.stem.help/v1/service/banner/html/ChristmasTree`,
        id: 3,
      },
    ]);

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

    return {
      users,
      voteData,
      upvote,
      downvote,
    };
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
}

.voting {
  width: 100%;
  display: flex;
}
</style>
