<template>
  <div id="puppeteer-screenshot">
    <v-card v-if="!pending" class="rounded-0 card">
      <v-card-title>
        <img
          class="h-7 rounded-full"
          src="https://cdn.discordapp.com/attachments/839399426643591188/968933773729234974/unknown.png"
        />
        <div class="w-full pl-3">
          <h1>STEM University</h1>
          <div
            class="w-full h-2 border-black border-opacity-20"
            style="border-bottom-width: 1px"
          ></div>
        </div>
      </v-card-title>
      <v-card-text class="opacity-100 flex">
        <v-avatar class="rounded-lg flex-shrink-0" size="60">
          <img :src="data?.stem?.displayAvatarURL || ''" />
        </v-avatar>
        <div class="flex-column pl-4 w-full">
          <h3>{{ data?.stem?.displayName + '#' + data?.discriminator }}</h3>
          <div
            class="w-full h-1 border-black border-opacity-50"
            style="border-bottom-width: 1px"
          ></div>
          <ul :if="data?.createdTimestamp">
            <li
              v-for="(item, idx) in [
                [`Status`, info.status],
                [`Joined`, info.joined],
                [`Behavior`, info.behavior],
                [`Messages sent`, info.messagesSent],
              ]"
              :key="idx"
              class="flex"
            >
              <span>{{ item[0] }}</span>
              <span class="ml-auto">{{ unref(item[1] as string) }}</span>
            </li>
            <li class="flex">
              <span>Performance</span>
              <span class="flex ml-auto">
                <img
                  v-for="i in Array.from({ length: 4 }).fill(0)"
                  :key="(i as number)"
                  class="h-8 w-8"
                  src="https://media.discordapp.net/attachments/951131768478650368/966900470792740944/starsss.png"
                />
                <img
                  v-for="i in Array.from({ length: 1 }).fill(0)"
                  :key="(i as number)"
                  class="h-8 w-8"
                  src="https://media.discordapp.net/attachments/839399426643591188/969176637193216070/star_1.png"
                />
              </span>
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
    <div class="h-2"></div>
  </div>
</template>

<script lang="ts" setup>
import { unref } from 'vue';
import dayjs from 'dayjs';
const { $formatDate } = useNuxtApp();
const config = useRuntimeConfig();

const route = useRoute();
// const conf = useRuntimeConfig().public;

// $api();

const { data, pending } = useFetch<{ [key: string]: any }>(
  `${config.public.apiBase}/v1/service/discordidlookup/${route.params.id}`
);

const { data: dbData } = useFetch<{ [key: string]: any }>(
  `${config.public.apiBase}/v1/service/stem/stats/${route.params.id}`
);

const createdTime = computed(() => $formatDate(data.value?.createdAt));

const info = {
  status: computed(() => {
    if (!data.value) return;
    const joinedAt =
      (Date.now() - data.value.stem.joinedTimestamp) / (1000 * 60 * 60 * 24);
    if (joinedAt < 60) return `freshman`;
    if (joinedAt >= 60 && joinedAt < 90) return `sophomore`;
    if (joinedAt >= 90 && joinedAt < 120) return `junior`;
    if (joinedAt >= 120) return `senior`;
  }),
  joined: computed(() => {
    if (!data.value) return;
    const now = dayjs();
    const then = dayjs(data.value.stem.joinedTimestamp);
    return `${now.diff(then, `days`)} days ago`;
  }),
  behavior: computed(() => {
    // Honestly the code to calculate this is over everywhere friq it
    if (!dbData.value) return;
    return `meme supreme`;
  }),
  messagesSent: computed(() => {
    if (!dbData.value) return;
    // console.log(dbData.value);
    return dbData.value.stats?.messageCount;
  }),
};

// api.$fetch(`https://api.stem.help/v1/status`).then((res) => {
//   console.log(res);
// });

// api.fetch.v1.GET(`service/discordidlookup/${route.params.id}`).then((user) => {
//   console.log(user);
// });
</script>

<style lang="scss" scoped>
.card {
  background-image: url('https://cdn.discordapp.com/attachments/839399426643591188/965853294159356004/unknown.png');
  width: 420px;
  height: 220px;
  background-size: cover;
}

* {
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
}
</style>
