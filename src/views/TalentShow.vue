<template>
  <div class="p-10">
    <center>
      <h1>{{ userName }}</h1>
    </center>
    <div class="vote-wrapper">
      <span @click="upvote()" class="vote">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0cHyBIvLq-CLHFPY2ezYpBtsEj4eL93cs0M0xRgY4r_1Sgu8l"
        />
      </span>
      <span class="vote-count">{{ count }}</span>
      <span @click="downvote()" class="vote">
        <img
          src="https://target.scene7.com/is/image/Target/GUEST_dba0b06a-4aa4-4c91-a49b-74e7200202c4?wid=325&hei=325&qlt=80&fmt=pjpeg"
        />
      </span>
    </div>
    <h1>Video</h1>
    <div class="wrapper">
      <video
        class="video"
        v-for="(v, k) in videoList"
        :key="k"
        width="400"
        height="350"
        controls
        preload
      >
        <source
          v-for="(v, k) in videoList"
          :key="k"
          :src="v"
          type="video/mp4"
        />
      </video>
    </div>
    <br /><br />

    <h1>Audio</h1>
    <div class="wrapper">
      <audio class="audio" v-for="(a, k) in audioList" :key="k" controls>
        <source
          v-for="(a, k) in audioList"
          :key="k"
          :src="a"
          type="audio/ogg"
        />
      </audio>
    </div>
    <br /><br />

    <h1>Image</h1>
    <div class="wrapper">
      <img
        v-for="(i, k) in imageList"
        :key="k"
        :src="i"
        alt="video"
        width="400"
        height="350"
      />
    </div>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.vote {
  height: 50px;
  width: 40px;
  padding: 2px 7px;
  border-radius: 3px;
  font-size: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #607d8b;
  background: #f7f9fa;
  -webkit-transition: color 0.3s, background-color 0.3s;
  -o-transition: color 0.3s, background-color 0.3s;
  transition: color 0.3s, background-color 0.3s;
  cursor: pointer;
}

.vote-wrapper {
  display: flex;
  flex-direction: column;
}

.vote-count {
  padding: 0 15px;
}
</style>

<script>
export default {
  setup() {
    const videoList = [`movie.mp4`, `movie2.mp4`, `movie3.mp4`];
    const imageList = [
      `https://image.shutterstock.com/image-vector/stem-science-technology-engineering-mathematics-260nw-1391360291.jpg`,
      `https://image.shutterstock.com/image-vector/illustration-stem-science-technology-engineering-260nw-592087955.jpg`,
      `https://image.shutterstock.com/image-vector/illustration-stem-science-technology-engineering-260nw-1415324810.jpg`,
    ];
    const audioList = [`audio.mp4`, `audio2.mp4`, `audio3.mp4`];
    const userName = `nope`;
    let count = 0;

    function upvote() {
      count++;
    }

    function downvote() {
      count--;
    }

    return {
      videoList,
      imageList,
      audioList,
      userName,
      count,
      upvote,
      downvote,
    };
  },
};
</script>
