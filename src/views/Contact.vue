<template>
  <h1>Contact the staff</h1>
  <div class="h-5"></div>
  <h2>Developers &amp; Github Contributors</h2>
  <div style="display: flex; flex-direction: row; align-items: center">
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      alt="Github mark"
      style="height: 3rem"
    />
    <div class="w-3"></div>
    <div>
      <p>
        <a href="https://github.com/stem-discord">STEM Discord Organization</a>
      </p>
    </div>
    <div class="w-3"></div>
    <div>
      <p>
        <a href="https://github.com/nopeless">nopeless</a>
      </p>
    </div>
    <div class="w-3"></div>
    <div>
      <p>
        <a href="https://github.com/Remceau">Remceau</a>
      </p>
    </div>
    <div class="w-3"></div>
    <div>
      <p>
        <a href="https://github.com/incaw">God/Weqsa</a>
      </p>
    </div>
    <div class="w-3"></div>
    <div>
      <p>
        <a href="https://github.com/retro-ai">Retro</a>
      </p>
    </div>
    <div class="w-3"></div>
    <div>
      <p>
        <a href="https://github.com/RoundStarling20">RoundStarling20</a>
      </p>
    </div>
  </div>

  <div class="h-5"></div>

  <h2>Within Discord</h2>
  <div style="display: flex; flex-direction: row; align-items: center">
    <img
      src="https://cdn.discordapp.com/attachments/886981010930159646/927640157379788850/Logo-Discord-2021-1024x780.png"
      alt="Github mark"
      style="height: 2rem"
    />
    <div class="w-3"></div>
    <div>
      <!-- TODO make this an api fetch -->
      <p
        v-for="(tag, idx) in [
          `accolader.io#7266`,
          `Burritochampion#5169`,
          `Sid#2354`,
          `Something Random#4411`,
          `Deadpool27#3573`,
          `EspeonZero#8908`,
          `retro#8664`,
          `desperado#7494`,
          `Akitti#5085`,
          `olanui#1438`,
          `Marcel Ferrari#6969`,
          `Parker ツ#5554`,
          `Lee Sin Support#1729`,
          `nope#6924`,
          `Guardian#2612`,
          `Stevveee#3315`,
          `hamisha#0010`,
          `Spidey#5259`,
          `Roundstarling20#7939`,
        ]"
        v-bind:key="idx"
      >
        {{ tag }}
      </p>
    </div>
  </div>

  <div class="h-5"></div>

  <h2>Donations</h2>
  <div style="display: flex; flex-direction: row; align-items: center">
    <img
      src="https://cdn.discordapp.com/attachments/886981010930159646/927639215360057395/Paypal-Logo-Transparent-PNG.png"
      alt="Github mark"
      style="height: 3rem"
    />
    <div>
      <p>
        <a href="https://www.paypal.com/donate/?hosted_button_id=C5UMNVT69K6SE"
          >PayPal</a
        >
      </p>
    </div>
    <div class="w-3"></div>
    <img
      src="https://cdn.discordapp.com/attachments/886981010930159646/927639860234313798/kisspng-patreon-logo-art-wikimedia-commons-film-22-5ace0f1a8cb986.8806118415234537225764.png"
      alt="Github mark"
      style="height: 3rem"
    />
    <div class="w-3"></div>
    <div>
      <p>
        <a href="https://www.paypal.com/donate/?hosted_button_id=C5UMNVT69K6SE"
          >Patreon</a
        >
      </p>
    </div>
  </div>
</template>
