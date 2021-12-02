<template>
  <div>
    <h1>Component Testing</h1>
    <div class="m-10">
      <span>Button</span>
      <Button>
        <p style="font-size: 8px">NEXT</p>
      </Button>
      <br />
      <Button>
        <p style="font-size: 12px">NEXT</p>
      </Button>
      <br />
      <Button>
        <p style="font-size: 24px">NEXT</p>
      </Button>
      <br />
      <Button>
        <p style="font-size: 76px">NEXT</p>
      </Button>
      <br />
      <Button> CLICK ME </Button>
      <button>
        <p style="font-size: 40px">NEXT</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import Button from "#/Button.vue";
</script>
