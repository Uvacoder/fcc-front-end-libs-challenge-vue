<template>
  <button class="bg-red-600 p-5 m-5 h-16" @click="play">
    <audio ref="chord" preload :src="audio"></audio>
    {{ name }}
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DrumPad",
  props: {
    audio: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup() {
    const chord = ref<HTMLAudioElement>();

    function play(): void {
      chord?.value?.play();
    }

    return { play, chord };
  },
});
</script>

<style scoped></style>
